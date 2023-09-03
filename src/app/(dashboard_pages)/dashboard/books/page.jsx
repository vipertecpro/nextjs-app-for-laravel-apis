import BreadCrumbs from '@/components/BreadCrumbs'
const pages = [{ name: 'My Books', href: '#', current: true }]
export const metadata = {
    title: process.env.NEXT_APPLICATION_NAME + ' - My Books',
}
export default function Books() {
    return (
        <>
            <BreadCrumbs pages={pages} />
            <div className={'p-2'}>
                <div className={'border-2 rounded-lg p-5'} />
            </div>
        </>
    )
}
