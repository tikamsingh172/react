import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="sticky top-0 z-50 shadow">
            <nav className="
            bg-white border-2 border-gray-200 px-4 md:px-6 py-3">
                <div className="w-[95%] mx-auto flex justify-between items-center">
                    {/* company logo here */}
                    <div className="flex flex-wrap justify-center items-center">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl font-bold text-red-500">&lt;/&gt;</span>
                            <span className="font-bold text-green-500">|</span>
                            <span className="text-xl font-bold text-indigo-800"> TikamSoftwares</span>
                        </Link>
                    </div>
                    {/* _________________________ */}
                    {/* menu */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `${isActive ? 'text-orange-700 ' : 'text-gray-700'} hover:text-orange-700 font-semibold`}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `${isActive ? 'text-orange-700 ' : 'text-gray-700'} hover:text-orange-700 font-semibold`}
                                >About</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `${isActive ? 'text-orange-700 ' : 'text-gray-700'} hover:text-orange-700 font-semibold`}
                                >Contact</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) =>
                                        `${isActive ? 'text-orange-700 ' : 'text-gray-700'} hover:text-orange-700 font-semibold`}
                                >Github</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* __________ */}
                    {/* login/logout signup */}
                    <div className="">
                        <div className="hidden md:block space-x-3">
                            <Link
                                to="#"
                                className="px-4 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 "
                            >Log In</Link>
                            <Link
                                className="px-4 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-gorange-800 focus:ring-4 focus:ring-orange-300 "
                                to="#"
                            >Sign Up</Link>
                        </div>
                        <div className="md:hidden">
                            <Link
                                to="#"
                                className="px-4 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-gorange-800 focus:ring-4 focus:ring-orange-300 "
                            >☰</Link>
                        </div>
                    </div>
                    {/* ___________________ */}

                </div>
            </nav>
        </header>
    )
}

export default Header;