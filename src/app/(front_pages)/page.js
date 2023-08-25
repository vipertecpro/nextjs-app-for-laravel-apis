'use client'

import useSWR from 'swr'
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Tooltip,
    Typography,
} from '@material-tailwind/react'
import Link from 'next/link'
import Image from 'next/image'

async function fetcher(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
export default function HomePage() {
    const { data: getBookCategories, error } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/books`,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 10000,
        },
    )
    return (
        <>
            <div className={'p-5'}>
                <div className="px-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 lg:px-5 lg:py-10">
                    <div className="relative">
                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-5">
                            <input
                                placeholder="Search . . . "
                                required
                                type="text"
                                className="flex-grow w-full h-16 text-4xl px-4 mb-3 font-bold text-gray-900 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-gray-200 focus:outline-none focus:shadow-outline"
                            />
                        </form>
                    </div>
                </div>
                <div className={` border-4 border-gray-400  p-5 rounded-2xl`}>
                    <div
                        className={
                            'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5'
                        }>
                        <Link href={''} className={'w-100 inline'}>
                            <Card className="max-w-100 md:max-w-[18rem] overflow-hidden">
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
                                        src={'/placeholder.avif'}
                                        alt="ui/ux review check"
                                    />
                                </CardHeader>
                                <CardBody className={'p-2'}>
                                    <Typography variant="h5" color="blue-gray">
                                        Book Name
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray">
                                        Author Name
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        color="gray"
                                        className="mt-2 font-normal">
                                        Because it&apos;s about motivating the
                                        doers. Because I&apos;m here to follow
                                        my dreams and inspire others.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-2 flex items-center justify-between">
                                    <Typography className="font-normal">
                                        TR : 0
                                    </Typography>
                                    <Typography className="font-normal">
                                        AR : 0
                                    </Typography>
                                </CardFooter>
                            </Card>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mx-auto p-20">
                    <Link
                        href={'/'}
                        className="inline-flex h-10 w-10 items-center justify-center rounded border border-gray-800 bg-white text-gray-900 rtl:rotate-180">
                        <span className="sr-only">Next Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-18 w-18"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                    <p className="text-2xl font-bold text-gray-900">
                        0<span className="mx-0.25">/</span>12
                    </p>
                    <Link
                        href={'/'}
                        className="inline-flex h-10 w-10 items-center justify-center rounded border border-gray-800 bg-white text-gray-900 rtl:rotate-180">
                        <span className="sr-only">Next Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-18 w-18"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}
