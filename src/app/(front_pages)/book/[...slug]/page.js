'use client'
import useSWR from 'swr'
import Image from 'next/image'
async function fetcher(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
export default function SingleBook({ params }) {
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
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                    </div>
                    <div className="flex flex-col space-y-8 lg:col-span-3">
                        {data.pageData.bookReviews.data.map(review => {
                            return (
                                <>
                                    <div key={review.id}>
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
        </>
    )
}
