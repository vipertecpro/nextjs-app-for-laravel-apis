import BreadCrumbs from '@/components/BreadCrumbs'

const pages = [{ name: 'Reviews Given', href: '#', current: true }]
export const metadata = {
    title: process.env.NEXT_APPLICATION_NAME + ' - Reviews Given',
}

export default function ReviewsGiven() {
    return (
        <>
            <BreadCrumbs pages={pages} />
            <div className={'p-2'}>
                <div className={'border-2 rounded-lg p-5'} />
            </div>
        </>
    )
}
