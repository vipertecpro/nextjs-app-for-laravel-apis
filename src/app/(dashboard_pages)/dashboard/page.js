'use client'
import { Breadcrumbs } from '@material-tailwind/react'
import Link from 'next/link'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import {
    CursorArrowRaysIcon,
    EnvelopeOpenIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const stats = [
    {
        id: 1,
        name: 'Total Subscribers',
        stat: '71,897',
        change: '122',
        changeType: 'increase',
    },
    {
        id: 2,
        name: 'Avg. Open Rate',
        stat: '58.16%',
        change: '5.4%',
        changeType: 'increase',
    },
    {
        id: 3,
        name: 'Avg. Click Rate',
        stat: '24.57%',
        change: '3.2%',
        changeType: 'decrease',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Dashboard() {
    return (
        <>
            <Breadcrumbs className={'w-screen'}>
                <Link href="#" className="opacity-60 text-2xl font-bold">
                    Dashboard
                </Link>
            </Breadcrumbs>
            <div className={'p-2'}>
                <div className={'border-2 rounded-lg p-5'}>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <Link href={'/dashboard/books'}>
                            <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <p className="truncate text-sm font-medium text-gray-500">
                                        Total Books
                                    </p>
                                </dt>
                                <dd className="flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        0
                                    </p>
                                </dd>
                            </div>
                        </Link>
                        <Link href={'/dashboard/reviews/received'}>
                            <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <p className="truncate text-sm font-medium text-gray-500">
                                        Total Reviews Received
                                    </p>
                                </dt>
                                <dd className="flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        0
                                    </p>
                                </dd>
                            </div>
                        </Link>
                        <Link href={'/dashboard/reviews/given'}>
                            <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <p className="truncate text-sm font-medium text-gray-500">
                                        Total Reviews Given
                                    </p>
                                </dt>
                                <dd className="flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        0
                                    </p>
                                </dd>
                            </div>
                        </Link>
                    </dl>
                </div>
            </div>
        </>
    )
}
