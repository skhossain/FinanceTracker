"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Add logout logic here
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-lg font-bold">
                    <Link href="/">FinanceTracker</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="block md:hidden p-2 rounded text-gray-300 focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <Link href="/about" className="hover:text-gray-400">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy" className="hover:text-gray-400">
                            Privacy
                        </Link>
                    </li>
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <Link href="/auth/login" className="hover:text-gray-400">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/register" className="hover:text-gray-400">
                                    Register
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/profile" className="hover:text-gray-400">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-gray-400">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="hover:text-gray-400">
                                    Logout
                                </button>
                            </li>
                        </>
                    )}

                    <li>
                        <Link href="/dashboard" className="hover:text-gray-400">
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden bg-gray-800 text-white space-y-4 p-4">
                    <li>
                        <Link href="/about" className="hover:text-gray-400">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy" className="hover:text-gray-400">
                            Privacy
                        </Link>
                    </li>
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <Link href="/auth/login" className="hover:text-gray-400">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/register" className="hover:text-gray-400">
                                    Register
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/profile" className="hover:text-gray-400">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-gray-400">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="hover:text-gray-400">
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                    <li>
                        <Link href="/dashboard" className="hover:text-gray-400">
                            Dashboard
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
