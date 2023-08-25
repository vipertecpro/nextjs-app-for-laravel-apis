'use client'

import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }
    const routPathName = usePathname()
    return (
        <GuestLayout>
            <AuthCard pathName={routPathName}>
                <AuthSessionStatus className="mb-4" status={status} />
                <div className="mt-10">
                    <div className="my-4 text-sm text-justify text-gray-900">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>
                    <form
                        onSubmit={submitForm}
                        method="POST"
                        className="space-y-6">
                        <div>
                            <Label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </Label>
                            <div className="mt-2">
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setEmail(event.target.value)
                                    }
                                    autoFocus
                                />
                            </div>
                            <InputError
                                messages={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Send Verification Link
                            </button>
                        </div>
                    </form>
                </div>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
