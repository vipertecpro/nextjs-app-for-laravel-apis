import SingleBook from '@/components/SingleBook'
export async function generateMetadata({ params }) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_FOR_FETCH}/client/book/${params.slug}`,
    )
    const data = await response.json()
    return {
        title:
            process.env.NEXT_APPLICATION_NAME +
            ' - ' +
            data.pageData.book.title,
        keywords: [
            'Book',
            'Book Title : ' + data.pageData.book.title,
            'Book ISBN 10 : ' + data.pageData.book.ISBN_10,
            'Book ISBN 13 : ' + data.pageData.book.ISBN_13,
            'Book Author : ' + data.pageData.book.author,
        ],
    }
}
export default function SingleBookPage({ params }) {
    return (
        <>
            <SingleBook params={params} />
        </>
    )
}
