import { NextResponse } from 'next/server'
import axios from 'axios'

const verifyJWT = async token => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/client/test`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        if (response.status === 200) {
            return true
        }
    } catch (err) {
        console.error('JWT Verification Error:', err)
    }
    return false
}
export async function middleware(request) {
    const token = request.cookies.get('jwtToken') || null
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    const isTokenValid = await verifyJWT(token)

    if (isTokenValid) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}
export const config = {
    matcher: ['/dashboard'],
}
