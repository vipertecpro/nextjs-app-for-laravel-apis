'use client'
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import {
    Button,
    Dialog,
    DialogFooter,
    Textarea,
    DialogBody,
    DialogHeader,
} from '@material-tailwind/react'
import { useState } from 'react'
async function fetcher(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
export default function SingleBook({ params }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(cur => !cur)
    const { data, error } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/book/${params.slug}`,
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
    const submitReview = (e) => {
        e.preventDefault()

    }
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 row-gap-8 lg:grid-cols-5 mb-10">
                    <div className="col-span-1">
                        <Link
                            href={'/'}
                            className="flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                            Back To Books
                        </Link>
                    </div>
                </div>
                <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            {data.pageData.book.created_at}
                        </p>
                        <div className="mb-3">
                            <div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                                    {data.pageData.book.title}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-3">
                                <img
                                    alt="avatar"
                                    src="/user.png"
                                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                                />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                    {data.pageData.book.author}
                                </div>
                                <p className="text-sm font-medium leading-4 text-gray-600">
                                    Author
                                </p>
                            </div>
                        </div>
                        <div className={'my-5'}>
                            <div className="grid border divide-y rounded 2xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 2xl:grid-cols-2 sm:divide-y-0 sm:divide-x">
                                <div className="flex flex-col justify-between p-5">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                            ISBN 10
                                        </p>
                                        <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                            {data.pageData.book.ISBN_10}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                            Total Reviews
                                        </p>
                                        <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                            {
                                                data.pageData.book
                                                    .book_reviews_count
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between p-5">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                            ISBN 13
                                        </p>
                                        <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                            {data.pageData.book.ISBN_13}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                            Average Rating
                                        </p>
                                        <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                            {
                                                data.pageData.book
                                                    .book_reviews_avg_rating
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-8 lg:col-span-3">
                        <div className="flex justify-between items-center text-black transition-colors">
                            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                                Reviews
                            </p>
                            <div>
                                <button
                                    className="group relative inline-flex items-center overflow-hidden rounded bg-gray-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-gray-500"
                                    onClick={handleOpen}>
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

                                    <span className="text-sm font-medium transition-all group-hover:me-4">
                                        Create Review
                                    </span>
                                </button>
                            </div>
                        </div>
                        {data.pageData.bookReviews.data.map(review => {
                            return (
                                <>
                                    <div
                                        key={review.id}
                                        className={
                                            'border-2 border-gray-400 p-5 rounded-xl'
                                        }>
                                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                                            {review.created_at}
                                        </p>
                                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                                            {review.content}
                                        </p>
                                        <div className="flex items-center">
                                            <div className="mr-3">
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    alt="avatar"
                                                    src="/user.png"
                                                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                                    Posted By :{' '}
                                                    {review.created_by.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Dialog open={open} handler={handleOpen}>
                <form onSubmit={submitReview}>
                    <div className="flex items-center justify-between">
                        <DialogHeader>
                            New review to "{data.pageData.book.title}"
                        </DialogHeader>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-5 w-5"
                            onClick={handleOpen}>
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <DialogBody divider>
                        <div className="grid gap-6">
                            <Textarea
                                name={'review'}
                                placeholder="Write review . . ."
                                label="Message"
                                labelProps={{
                                    className: 'hidden',
                                }}
                                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                containerProps={{ className: 'min-w-[100px]' }}
                            />
                        </div>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button
                            variant="outlined"
                            color="red"
                            onClick={handleOpen}>
                            close
                        </Button>
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={handleOpen}>
                            submit review
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    )
}
