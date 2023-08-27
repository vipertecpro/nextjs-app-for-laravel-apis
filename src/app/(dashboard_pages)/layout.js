'use client'

import { useAuth } from '@/hooks/auth'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Popover } from '@headlessui/react'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const notifications = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: ChartPieIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Security',
        description: "Your customers' data will be safe and secure",
        href: '#',
        icon: FingerPrintIcon,
    },
    {
        name: 'Integrations',
        description: 'Connect with third-party tools',
        href: '#',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will convert',
        href: '#',
        icon: ArrowPathIcon,
    },
]
import {
    Bars3BottomLeftIcon,
    BellIcon,
    HomeIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    ArchiveBoxArrowDownIcon,
    ArrowTopRightOnSquareIcon,
    BookmarkIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    {
        name: 'My Books',
        href: '/dashboard/books',
        icon: BookmarkIcon,
    },
    {
        name: 'Reviews Received',
        href: '/dashboard/reviews/received',
        icon: ArchiveBoxArrowDownIcon,
    },
    {
        name: 'Reviews Given',
        href: '/dashboard/reviews/given',
        icon: ArrowTopRightOnSquareIcon,
    },
]
const userNavigation = [{ name: 'Sign out', href: '#' }]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function ClockIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-3 w-3">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    )
}
export default function DashboardPagesLayout({ children }) {
    const { user } = useAuth({ middleware: 'auth' })
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const currentRouteName = usePathname()
    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 md:hidden"
                        onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full">
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0">
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }>
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <XMarkIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav className="space-y-1 px-2">
                                            {navigation.map(item => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        currentRouteName ===
                                                            item.href
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                                                    )}>
                                                    <item.icon
                                                        className={classNames(
                                                            currentRouteName ===
                                                                item.href
                                                                ? 'text-gray-300'
                                                                : 'text-gray-400 group-hover:text-gray-300',
                                                            'mr-4 flex-shrink-0 h-6 w-6',
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div
                                className="w-14 flex-shrink-0"
                                aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex min-h-0 flex-1 flex-col bg-gray-300">
                        <div className="flex h-16 flex-shrink-0 items-center bg-gray-200 px-4">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div>
                        <div className="flex flex-1 flex-col overflow-y-auto">
                            <nav className="flex-1 space-y-1 px-2 py-4">
                                {navigation.map(item => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            currentRouteName === item.href
                                                ? 'bg-gray-800 text-white'
                                                : 'text-gray-500 bg-gray-200 hover:bg-gray-700 hover:text-white',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                                        )}>
                                        <item.icon
                                            className={classNames(
                                                currentRouteName === item.href
                                                    ? 'text-gray-200'
                                                    : 'text-gray-400 group-hover:text-gray-100',
                                                'mr-3 flex-shrink-0 h-6 w-6',
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:pl-64 h-screen">
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                        <div className="flex flex-1 justify-end px-4">
                            <div className="ml-4 flex items-center md:ml-6">
                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">*/}
                                {/*    <span className="sr-only">*/}
                                {/*        View notifications*/}
                                {/*    </span>*/}
                                {/*    <BellIcon*/}
                                {/*        className="h-6 w-6"*/}
                                {/*        aria-hidden="true"*/}
                                {/*    />*/}
                                {/*</button>*/}
                                {/* Profile dropdown */}
                                <Popover className="relative">
                                    <Popover.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <BellIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1">
                                        <Popover.Panel className="absolute z-auto mt-5 flex w-screen max-w-max -translate-x-2/3 px-4">
                                            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                                <div className="p-4">
                                                    {notifications.map(item => (
                                                        <div
                                                            key={item.name}
                                                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                            <div>
                                                                <Link
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className="font-semibold text-gray-900">
                                                                    {item.name}
                                                                    <span className="absolute inset-0" />
                                                                </Link>
                                                                <p className="mt-1 text-gray-600">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map(item => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'block px-4 py-2 text-sm text-gray-700',
                                                            )}>
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1 bg-gray-50">{children}</main>
                </div>
            </div>
            {/*<GuestNavBar user={user} />*/}
            {/*{children}*/}
        </>
    )
}
