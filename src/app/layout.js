'use client'
import 'tailwindcss/tailwind.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import { ThemeProvider } from '@material-tailwind/react'

export const metadata = {
    title: process.env.NEXT_APP_NAME,
    description: 'Book Store',
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link
                    href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className={inter.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
