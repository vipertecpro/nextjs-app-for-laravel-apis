'use client'

import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const LoginPage = () => {
    const router = useRouter()
    const routPathName = usePathname()
    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [message, setMessage] = useState({
        messageData: '',
        messageStatus: '',
    })

    useEffect(() => {
        if (router.query !== undefined) {
            if (router.query.reset?.length > 0 && errors.length === 0) {
                setMessage(atob(router.query.reset))
            } else {
                setMessage(null)
            }
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        await login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setMessage,
        })
    }

    return (
        <GuestLayout>
            <AuthCard pathName={routPathName}>
                <AuthSessionStatus status={message} />
                <div className="mt-5">
                    <div>
                        <form
                            method="POST"
                            className="space-y-6"
                            onSubmit={submitForm}>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </Label>
                                <div className="mt-2">
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </div>

                                <InputError
                                    messages={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </Label>
                                <div className="mt-2">
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={event =>
                                            setPassword(event.target.value)
                                        }
                                        autoComplete="current-password"
                                    />
                                </div>
                                <InputError
                                    messages={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <label
                                        htmlFor="remember_me"
                                        className="inline-flex items-center">
                                        <input
                                            id="remember_me"
                                            type="checkbox"
                                            name="remember"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            onChange={event =>
                                                setShouldRemember(
                                                    event.target.checked,
                                                )
                                            }
                                        />
                                        <span className="ml-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AuthCard>
        </GuestLayout>
    )
}

export default LoginPage
