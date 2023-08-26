'use client'

import { useAuth } from '@/hooks/auth'
import GuestNavBar from '@/components/GuestNavBar'

export default function DashboardPagesLayout({ children }) {
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <>
            <GuestNavBar user={user} />
            {children}
        </>
    )
}
