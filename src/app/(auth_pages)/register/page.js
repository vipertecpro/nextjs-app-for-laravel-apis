'use client'

import AuthCard from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import { Input } from '@material-tailwind/react'
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
                            <div className="mt-2">
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
                                        placeholder={'Enter name'}
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-sm shadow-gray-900/20 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        containerProps={{
                                            className: 'min-w-[100px]',
                                        }}
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
                            <div className="mt-2">
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
                                        placeholder={'Enter email address'}
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-sm shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        containerProps={{
                                            className: 'min-w-[100px]',
                                        }}
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
                            <div className="mt-2">
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
                                        placeholder={'Enter password'}
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-sm shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        containerProps={{
                                            className: 'min-w-[100px]',
                                        }}
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
                            <div className="mt-2">
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
                                        placeholder={'Confirm password'}
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-sm shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        containerProps={{
                                            className: 'min-w-[100px]',
                                        }}
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
                </div>
            </AuthCard>
        </GuestLayout>
    )
}

export default RegisterPage
