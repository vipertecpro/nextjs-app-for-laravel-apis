'use client'

import useSWR from 'swr'
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Tooltip,
    Typography,
} from '@material-tailwind/react'

async function fetcher(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}

export default function HomePage() {
    const { data: getBookCategories, error } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/books`,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 10000,
        },
    )
    return (
        <>
            <Card className="max-w-[24rem] overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="ui/ux review check"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="blue-gray">
                        UI/UX Review Check
                    </Typography>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="mt-3 font-normal">
                        Because it&apos;s about motivating the doers. Because
                        I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center -space-x-3">
                        <Tooltip content="Natali Craig">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="natali craig"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Tania Andrew">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="tania andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                    </div>
                    <Typography className="font-normal">January 10</Typography>
                </CardFooter>
            </Card>
        </>
    )
}
