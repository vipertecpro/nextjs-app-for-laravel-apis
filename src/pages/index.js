import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import useSWR from 'swr'
async function fetcher(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('An error occurred while fetching the data.')
    return await res.json()
}
export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    const { data } = useSWR(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/api/client/books',
        fetcher,
        {
            refreshInterval: 60000,
        },
    )
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-gray-700 underline">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                    <defs>
                                        <pattern
                                            id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30">
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Book</span>
                            </span>{' '}
                            Reviews
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Click on the book you'd like to rate and review.
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                        {data !== undefined
                            ? data.pageData.data.map(book => (
                                  <Link
                                      key={book.id}
                                      href="/"
                                      aria-label="Book Item"
                                      className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                                      <div className="flex flex-col h-full">
                                          <Image
                                              width={300}
                                              height={300}
                                              src={'/placeholder.png'}
                                              className="object-cover w-full h-48"
                                              alt=""
                                          />
                                          <div className="flex-grow border border-t-0 rounded-b">
                                              <div className="p-5">
                                                  <h2 className="mb-2 text-xl font-semibold leading-3">
                                                      {book.title}
                                                  </h2>
                                                  <h6 className="mb-2 text-sm font-semibold leading-5">
                                                      {book.author}
                                                  </h6>
                                                  <div
                                                      className={
                                                          'flex justify-between text-sm my-2'
                                                      }>
                                                      <p>
                                                          TR :{' '}
                                                          {
                                                              book.book_reviews_count
                                                          }
                                                      </p>
                                                      <p>
                                                          AR :{' '}
                                                          {
                                                              book.book_reviews_avg_rating
                                                          }
                                                      </p>
                                                  </div>
                                                  <p className="mb-2 text-sm font-light text-right">
                                                      {book.created_at}
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </Link>
                              ))
                            : ''}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
