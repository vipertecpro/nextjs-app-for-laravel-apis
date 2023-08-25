import Link from 'next/link'
import ApplicationLogo from '@/components/ApplicationLogo'

function TopHeader(props) {
    if (props.pathName === '/register') {
        return (
            <>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register new account
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                    Already a member?{' '}
                    <Link
                        href={`/login`}
                        className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Click Here To Login
                    </Link>
                </p>
            </>
        )
    } else if (props.pathName === '/forgot-password') {
        return (
            <>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Reset Your Account
                </h2>
                <div className={`flex flex-row justify-around`}>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Not a member?{' '}
                        <Link
                            href={`/register`}
                            className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Register
                        </Link>
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Already a member?{' '}
                        <Link
                            href={`/register`}
                            className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Login to your account
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                    Not a member?{' '}
                    <Link
                        href={`/register`}
                        className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Click Here To Register
                    </Link>
                </p>
            </>
        )
    }
}

const AuthCard = ({ pathName, children }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className={`text-center flex flex-col justify-center`}>
                        <Link href="/" className={`mx-auto`}>
                            <ApplicationLogo
                                width={100}
                                height={100}
                                className="h-10 w-auto"
                                src={`https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600`}
                                alt="Your Company"
                            />
                        </Link>
                        <TopHeader pathName={pathName} />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AuthCard
