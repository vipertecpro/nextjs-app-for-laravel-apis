'use client'
import 'tailwindcss/tailwind.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import { ThemeProvider } from '@material-tailwind/react'
import useSWR from 'swr'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
async function fetcher(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
export const metadata = {
    title: process.env.NEXT_APP_NAME,
    description: 'Book Store',
}
export default function RootLayout({ children }) {
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
    const fetcher = url => fetch(url).then(res => res.json())
    const useServerStatus = () => {
        const { data, error } = useSWR(`${BACKEND_URL}/api/endpoint`, fetcher, {
            refreshInterval: 10000,
            revalidateIfStale: true,
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
        })
        return {
            isRunning: !!data,
            isLoading: !error && !data,
            isError: error,
        }
    }
    function RenderTheme() {
        const { isRunning, isLoading, isError } = useServerStatus()
        if (isLoading) {
            return (
                <>
                    <div
                        className={
                            'flex justify-center align-middle items-center h-screen'
                        }>
                        <h1 className={'text-5xl text-gray-400'}>
                            LOADING . . .{' '}
                        </h1>
                    </div>
                </>
            )
        }
        if (isError) {
            return (
                <>
                    <div
                        className={
                            'flex justify-center align-middle items-center h-screen'
                        }>
                        <h1 className={'text-5xl text-gray-400'}>
                            SERVER IS NOT RUNNING...PLEASE START THE SERVER
                        </h1>
                    </div>
                </>
            )
        }
        if (isRunning) {
            return <ThemeProvider>{children}</ThemeProvider>
        }
    }
    return (
        <html lang="en">
            <Head>
                <link
                    href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className={inter.className}>
                <RenderTheme />
                <ToastContainer
                    position="top-right"
                    autoClose={8000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    draggable={false}
                    pauseOnVisibilityChange
                    closeOnClick
                    pauseOnHover
                />
            </body>
        </html>
    )
}
