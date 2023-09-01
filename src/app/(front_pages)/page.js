'use client'

import useSWR from 'swr'
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from '@material-tailwind/react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

async function fetcher(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
export function RenderBooks({ searchTerm, currentPage, setCurrentPage }) {
    const { data, error } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/books?page=${currentPage}&search=${searchTerm}`,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 10000,
        },
    )
    if (error) {
        return <>Failed to load</>
    }
    if (!data) {
        return <>Loading...</>
    }

    return (
        <>
            <div className="flex items-center justify-between gap-3 mx-auto pb-5">
                <Link
                    className={`group relative inline-flex items-center overflow-hidden rounded border-2 border-current px-6 py-1  ${
                        currentPage === 1
                            ? 'pointer-events-none'
                            : 'text-indigo-600 focus:outline-none ring-2 ring-indigo-200 active:text-indigo-500 ring-offset-4'
                    }`}
                    href={'/'}
                    onClick={() => setCurrentPage(currentPage - 1)}>
                    <span className="absolute -start-full transition-all group-hover:start-4">
                        <svg
                            className="h-5 w-5 rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                    <span className="text-lg font-medium transition-all group-hover:ml-4">
                        Previous
                    </span>
                </Link>
                <p className="text-2xl font-bold text-gray-900">
                    {currentPage}
                    <span className="mx-0.25">/</span>
                    {data.pageData.last_page}
                </p>
                <Link
                    className={`group relative inline-flex items-center overflow-hidden rounded border-2 border-current px-6 py-1  ${
                        currentPage === data.pageData.last_page
                            ? 'pointer-events-none'
                            : 'text-indigo-600 focus:outline-none ring-2 ring-indigo-200 active:text-indigo-500 ring-offset-4'
                    }`}
                    href={'/'}
                    disabled={currentPage === data.pageData.last_page}
                    onClick={() => setCurrentPage(currentPage + 1)}>
                    <span className="absolute -end-full transition-all group-hover:end-4">
                        <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                    <span className="text-lg font-medium transition-all group-hover:me-4">
                        Next
                    </span>
                </Link>
            </div>
            <div className={`border-4 border-gray-400 p-5 rounded-2xl`}>
                <div
                    className={
                        'grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-6 gap-5'
                    }>
                    {data.pageData.data.map(book => (
                        <Link href={`/book/${book.slug}`} key={book.id}>
                            <Card className="max-w-100 md:max-w-[18rem] overflow-hidden hover:ring-2 ring-offset-4 ring-gray-600">
                                {/* Details for each book */}
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="m-0 rounded-none h-44">
                                    <Image
                                        fill
                                        className={
                                            'h-auto max-w-full object-cover'
                                        }
                                        src={book.image || '/placeholder.avif'}
                                        alt="ui/ux review check"
                                    />
                                </CardHeader>
                                <CardBody className={'p-2'}>
                                    <Typography variant="h5" color="blue-gray">
                                        {book.title}
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray">
                                        {book.author}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-2 flex items-center justify-between">
                                    <Typography className="font-normal">
                                        TR: {book.book_reviews_count}
                                    </Typography>
                                    <Typography className="font-normal">
                                        AR: {book.book_reviews_avg_rating}
                                    </Typography>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const searchInputRef = useRef(null)

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }, [searchTerm])

    return (
        <>
            <div className={'p-5'}>
                <div className="px-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 lg:px-5 lg:py-10">
                    <div className="relative">
                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-5">
                            <input
                                ref={searchInputRef}
                                placeholder="Search . . . "
                                required
                                type="text"
                                className="flex-grow w-full h-16 text-4xl px-4 mb-3 font-bold text-gray-900 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-gray-200 focus:outline-none focus:shadow-outline"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
                <RenderBooks
                    searchTerm={searchTerm}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </>
    )
}
