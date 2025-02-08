'use client';

import Group from "@/app/assets/Group.svg";
import Image from "next/image";
import React from "react";
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black p-8">
            {/* Outer container with vertical stacking */}
            <div className="mx-auto max-w-7xl flex flex-col gap-8">

                {/* Top Row: Logo on left, first list on right */}
                <div className="flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Logo */}
                    <div>
                        <Image
                            src={Group}
                            alt="Logo"
                            width={120}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                    {/* First List */}
                    <div>
                        <ul className="flex flex-row items-center gap-6">
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Journal
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Custom
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Second Row: Icons on left, second list on right */}
                <div className="flex w-full flex-col md:flex-row items-center justify-between">

                    {/* Left: Icons */}
                    <div className="flex flex-row items-center gap-6">
                        <Facebook className="text-white hover:text-gray-300 w-5 h-5" />
                        <Instagram className="text-white hover:text-gray-300 w-5 h-5" />
                    </div>

                    {/* Right: Second List */}
                    <ul className="flex flex-row items-center gap-6 mt-4 md:mt-0">
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                FAQ’s
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                Returns
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                Ordering
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                Shipping
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                Personalization Policies
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
