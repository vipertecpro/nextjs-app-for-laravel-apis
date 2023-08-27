'use client'

import { Breadcrumbs } from '@material-tailwind/react'
import Link from 'next/link'

export default function ReviewsReceived() {
    return (
        <>
            <Breadcrumbs className={'w-screen'}>
                <Link
                    href={'/dashboard'}
                    className="opacity-60 text-2xl font-bold">
                    Dashboard
                </Link>
                <Link
                    href={'/dashboard/reviews/received'}
                    className="opacity-60 text-2xl font-bold">
                    Reviews Received
                </Link>
            </Breadcrumbs>
            <div className={'p-2'}>
                <div className={'border-2 rounded-lg p-5'} />
            </div>
        </>
    )
}
