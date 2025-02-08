"use client";
import Image from "next/image";

export default function ThirdPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Top section: Heading, paragraph, button */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4">
                <div>
                    <h1 className="text-black text-2xl font-bold mb-2">
                        Hydration Essentials
                    </h1>
                    <p className="text-gray-700">
                        Discover Our Range of Premium Water Bottles
                    </p>
                </div>
                <button className="mt-4 md:mt-0 bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition duration-200">
                    VIEW MORE
                </button>
            </div>

            {/* Grid of images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {/* Card 1 */}
                <div className="bg-gray-100 rounded">
                    <Image
                        src="/bottle1.jpg"
                        alt="Bottle 1"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <p className="text-center p-2 text-black">Bottle 1</p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 rounded">
                    <Image
                        src="/bottle2.jpg"
                        alt="Bottle 2"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <p className="text-center p-2 text-black">Bottle 2</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 rounded">
                    <Image
                        src="/bottle3.jpg"
                        alt="Bottle 3"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <p className="text-center p-2 text-black">Bottle 3</p>
                </div>
            </div>
        </div>
    );
}
