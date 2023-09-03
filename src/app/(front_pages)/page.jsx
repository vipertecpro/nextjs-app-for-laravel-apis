export const metadata = {
    title: process.env.NEXT_APPLICATION_NAME + ' - Home Page',
}
import { RenderBooks } from '@/components/RenderBooks'

export default function HomePage() {
    return (
        <>
            <RenderBooks />
        </>
    )
}
