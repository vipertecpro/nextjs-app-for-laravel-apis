'use client'

import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss'

const getCookie = name => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
    return null
}
export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const token = getCookie('jwtToken')
    const {
        data: user,
        error,
        mutate,
    } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/client/user`, () =>
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/client/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                return res.data.user
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                return error.response.data.user
            }),
    )
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, setMessage, ...props }) => {
        await csrf()
        setErrors([])
        setMessage({})
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/client/register`, props)
            .then(response => {
                mutate()
                setMessage({
                    messageData: response.data.message,
                    messageStatus: 'success',
                })
                router.push(response.data.redirectUrl)
            })
            .catch(error => {
                if (error.response.status !== 422) {
                    throw error
                } else {
                    setErrors(error.response.data.errors)
                    setMessage({
                        messageData: error.response.data.message,
                        messageStatus: 'error',
                    })
                }
            })
    }

    const login = async ({ setErrors, setMessage, ...props }) => {
        await csrf()
        setErrors([])
        setMessage({})
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/client/login`, props)
            .then(response => {
                document.cookie = `jwtToken=${response.data.token}; path=/`
                mutate()
                setMessage({
                    messageData: response.data.message,
                    messageStatus: 'success',
                })
                router.push(response.data.redirectUrl)
            })
            .catch(error => {
                if (error.response.status !== 422) {
                    throw error
                } else {
                    setErrors(error.response.data.errors)
                    setMessage({
                        messageData: error.response.data.message,
                        messageStatus: 'error',
                    })
                }
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }
    const submitReviewForm = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/submitBookReview`,
                props,
            )
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }
    const logout = async () => {
        if (!error) {
            await axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}/client/logout`, [], {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then(() => {
                    mutate()
                    document.cookie =
                        'jwtToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
                })
        }
        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        submitReviewForm,
    }
}
