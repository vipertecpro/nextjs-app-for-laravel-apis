import Link from 'next/link'
import BreadCrumbs from '@/components/BreadCrumbs'
export const metadata = {
    title: process.env.NEXT_APPLICATION_NAME + ' - Dashboard',
}
export default function Dashboard() {
    return (
        <>
            <BreadCrumbs />
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
