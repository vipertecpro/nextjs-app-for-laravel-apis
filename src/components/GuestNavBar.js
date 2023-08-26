'use client'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { PencilSquareIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment } from 'react'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'
export default function GuestNavBar({ user }) {
    const { logout } = useAuth()
    const pathName = usePathname()
    return (
        <>
            <Disclosure as="header" className="bg-gray-50">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                            <div className="relative flex h-16 justify-between">
                                <div className="relative z-10 flex px-2 lg:px-0">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </div>
                                </div>
                                <div className="relative z-10 flex items-center lg:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        id={`mobile_menu_button`}
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">
                                            Open menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center space-x-2">
                                    {!user ? (
                                        <>
                                            <Link
                                                href={`/login`}
                                                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                <UserCircleIcon
                                                    className="-ml-0.5 h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                                Login
                                            </Link>
                                            <Link
                                                href={`/register`}
                                                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                <PencilSquareIcon
                                                    className="-ml-0.5 h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                                Register
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            {pathName.includes('dashboard') ? (
                                                <Link
                                                    className="items-center overflow-hidden rounded-xl bg-gray-600 px-5 py-1 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                                    href={'/'}>
                                                    <span className="text-sm font-medium">
                                                        Back to home
                                                    </span>
                                                </Link>
                                            ) : (
                                                <Link
                                                    className="items-center overflow-hidden rounded-xl bg-gray-600 px-5 py-1 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                                    href={'/dashboard'}>
                                                    <span className="text-sm font-medium">
                                                        Go to dashboard
                                                    </span>
                                                </Link>
                                            )}

                                            <Menu
                                                as="div"
                                                className="relative ml-4 flex-shrink-0">
                                                <div>
                                                    <Menu.Button
                                                        id={`menu_button`}
                                                        className="flex rounded-full bg-gray-200 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700">
                                                        <span className="sr-only">
                                                            Open user menu
                                                        </span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src={'/user.png'}
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
                                                        <Menu.Item>
                                                            <Link
                                                                onClick={logout}
                                                                href="#"
                                                                className={
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                }>
                                                                Logout
                                                            </Link>
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel
                            as="nav"
                            className="lg:hidden"
                            aria-label="Global">
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-4">
                                    {user ? (
                                        <>
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={'/user.png'}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium text-white">
                                                    {user.name}
                                                </div>
                                                <div className="text-sm font-medium text-gray-400">
                                                    {user.email}
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">
                                                    View notifications
                                                </span>
                                                <BellIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="ml-3 flex flex-row align-baseline justify-center w-full space-x-4">
                                                <Link
                                                    href={`/login`}
                                                    className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                    <UserCircleIcon
                                                        className="-ml-0.5 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                    Login
                                                </Link>
                                                <Link
                                                    href={`/register`}
                                                    className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                    <PencilSquareIcon
                                                        className="-ml-0.5 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                    Register
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {user ? (
                                    <>
                                        <div className="mt-3 space-y-1 px-2">
                                            <Disclosure.Button
                                                id={`user-navigation-disclosure-panel-3`}
                                                onClick={logout}
                                                href="#"
                                                className={
                                                    'block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                                                }>
                                                Logout
                                            </Disclosure.Button>
                                        </div>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}
