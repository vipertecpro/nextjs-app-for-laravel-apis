'use client'

import AuthCard from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const RegisterPage = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }
    const routPathName = usePathname()
    return (
        <GuestLayout>
            <AuthCard pathName={routPathName}>
                <div className="mt-10">
                    <div>
                        <form
                            onSubmit={submitForm}
                            method="POST"
                            className="space-y-6">
                            {/* Name */}
                            <div className="mt-4">
                                <Label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </Label>
                                <div className="mt-2">
                                    <Input
                                        id="name"
                                        type="text"
                                        value={name}
                                        className="block mt-1 w-full"
                                        onChange={event =>
                                            setName(event.target.value)
                                        }
                                        autoFocus
                                    />
                                </div>

                                <InputError
                                    messages={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="mt-4">
                                <Label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </Label>
                                <div className="mt-2">
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        className="block mt-1 w-full"
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </div>
                                <InputError
                                    messages={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
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
                                        autoComplete="new-password"
                                    />
                                </div>
                                <InputError
                                    messages={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <Label
                                    htmlFor="passwordConfirmation"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </Label>
                                <div className="mt-2">
                                    <Input
                                        id="passwordConfirmation"
                                        type="password"
                                        value={passwordConfirmation}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={event =>
                                            setPasswordConfirmation(
                                                event.target.value,
                                            )
                                        }
                                    />
                                </div>
                                <InputError
                                    messages={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-between my-5">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10">
                        <div className="relative">
                            <div
                                className="absolute inset-0 flex items-center"
                                aria-hidden="true">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-white px-6 text-gray-900">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]">
                                <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                                <span className="text-sm font-semibold leading-6">
                                    Twitter
                                </span>
                            </a>

                            <a
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]">
                                <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm font-semibold leading-6">
                                    GitHub
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </AuthCard>
        </GuestLayout>
    )
}

export default RegisterPage
