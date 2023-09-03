import { HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const BreadCrumbs = ({ className, ...props }) => (
    <nav
        className="flex border-b border-gray-100 bg-gray-50"
        aria-label="Breadcrumb">
        <ol
            role="list"
            className="mx-auto flex w-full max-w-screen space-x-4 px-4 sm:px-6 lg:px-8">
            <li className="flex">
                <div className="flex items-center">
                    <Link
                        href={'/dashboard'}
                        className="text-gray-400 hover:text-gray-500">
                        <HomeIcon
                            className="h-5 w-5 flex-shrink-0"
                            aria-hidden="true"
                        />
                        <span className="sr-only" />
                    </Link>
                </div>
            </li>
            {props.pages !== undefined && props.pages.length > 0 ? (
                props.pages.map(page => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                className="h-full w-6 flex-shrink-0 text-gray-300"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <Link
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={
                                    page.current ? 'page' : undefined
                                }>
                                {page.name}
                            </Link>
                        </div>
                    </li>
                ))
            ) : (
                <li className="flex">
                    <div className="flex items-center">
                        <svg
                            className="h-full w-6 flex-shrink-0 text-gray-300"
                            viewBox="0 0 24 44"
                            preserveAspectRatio="none"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                        </svg>
                    </div>
                </li>
            )}
        </ol>
    </nav>
)

export default BreadCrumbs
