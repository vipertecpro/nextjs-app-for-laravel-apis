'use client'

import GuestNavBar from '@/components/GuestNavBar'
import { useAuth } from '@/hooks/auth'

export default function FrontLayout({ children }) {
    const { user } = useAuth({ middleware: 'guest' })
    return (
        <>
            <GuestNavBar user={user} />
            <div className={'bg-gray-100 h-screen'}>{children}</div>
        </>
    )
}
