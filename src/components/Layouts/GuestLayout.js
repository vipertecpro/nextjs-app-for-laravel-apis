import Head from 'next/head'
import Image from 'next/image'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                <div className="flex min-h-full flex-1">
                    <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                        {children}
                    </div>
                    <div className="relative hidden w-0 flex-1 lg:block">
                        <Image
                            fill
                            className="absolute inset-0 h-full w-full object-cover"
                            src={'/login_banner.png'}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestLayout
