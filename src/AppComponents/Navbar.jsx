/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar ({ mode, title }) {
    let location = useLocation();

    return (
        <Popover className="relative bg-white">
            <div className="mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">{ title }</span>
                            <h5 className='text-2xl' >{ title }</h5>
                        </Link>
                    </div>

                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className={ `bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${ mode }-500` }>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-5">
                        {
                            location.pathname === '/'
                                ? <Link to="/" className={ `text-base font-medium bg-${ mode }-700 text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                    Home
                                </Link>
                                : <Link to="/" className={ `text-base font-medium text-${ mode }-500 hover:bg-${ mode }-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                    Home
                                </Link>
                        }
                        {
                            location.pathname === '/about'
                                ? <Link to="/about" className={ `text-base font-medium bg-${ mode }-700 text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                    About
                                </Link>
                                : <Link to="/about" className={ `text-base font-medium text-${ mode }-500 hover:bg-${ mode }-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                    About
                                </Link>
                        }
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-5">
                        <Link to="/signin" className={ `text-base font-medium text-${ mode }-500 hover:bg-${ mode }-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium` }>
                            Sign in
                        </Link>
                        <Link
                            to="/signup"
                            className={ `text-base font-medium text-${ mode }-500 hover:bg-${ mode }-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium` }
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>

            <Transition
                as={ Fragment }
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className='text-3xl' >{ title }</h5>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className={ `bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${ mode }-500` }>
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {
                                    location.pathname === '/'
                                        ? <Link to="/" className={ `text-base font-medium bg-${ mode }-700 text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                            Home
                                        </Link>
                                        : <Link to="/" className={ `text-base font-medium text-${ mode }-500 hover:bg-${ mode }-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                            Home
                                        </Link>
                                }
                                {
                                    location.pathname === '/about'
                                        ? <Link to="/about" className={ `text-base font-medium bg-${ mode }-700 text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                            About
                                        </Link>
                                        : <Link to="/about" className={ `text-base font-medium text-${ mode }-500 hover:bg-${ mode }-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                            About
                                        </Link>
                                }
                            </div>
                            <div className='mt-6 text-center text-base font-medium text-gray-500'>
                                {
                                    location.pathname === '/signup'
                                        ? <Link to="/signup" className={ `text-base font-medium bg-${ mode }-700 text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                            Signup
                                        </Link>
                                        : <Link to="/signup" className={ `text-base font-medium text-${ mode }-500 hover:bg-${ mode }-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium` }>
                                            Signup
                                        </Link>
                                }
                            </div>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing User?{ ' ' }
                                <Link to="/signin" className={ `text-${ mode }-600 hover:text-${ mode }-500` }>
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

//#region Comments

{/* <Popover className="relative">
                            { ({ open }) => (
                                <>
                                    <Popover.Button
                                        className={ classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            `group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${ mode }-500`
                                        ) }
                                    >
                                        <span>Solutions</span>
                                        <ChevronDownIcon
                                            className={ classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            ) }
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={ Fragment }
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"

                        </Popover> */}

//#endregion
