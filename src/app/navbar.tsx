'use client';

import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.svg";

const Navbar = () => {
    return (
        <nav className="flex bg-transparent p-4 md:py-5">
            <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-6 md:px-8">
                <div>
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={120}
                        height={100}
                        className="object-contain"
                    />
                </div>
                <ul className="flex flex-row items-center gap-8">
                    <li>
                        <a href="#" className="text-black hover:text-gray-600 p-1">
                            Shop
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-gray-600 p-1">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-gray-600 p-1">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-gray-600 p-1">
                            Journal
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-gray-600 p-1">
                            Custom
                        </a>
                    </li>
                    <li>
                        <button
                            className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition duration-200"
                        >
                            Inquiry Now
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
