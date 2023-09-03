import BreadCrumbs from '@/components/BreadCrumbs'

const pages = [{ name: 'Reviews Received', href: '#', current: true }]
export const metadata = {
    title: process.env.NEXT_APPLICATION_NAME + ' - Reviews Received',
}

export default function ReviewsReceived() {
    return (
        <>
            <BreadCrumbs pages={pages} />
            <div className={'p-2'}>
                <div className={'border-2 rounded-lg p-5'} />
            </div>
        </>
    )
}
