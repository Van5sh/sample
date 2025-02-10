"use client";
import Image from "next/image";
import bottle1 from "@/app/assets/bottle1.svg"
import bottle2 from "@/app/assets/bottle2.svg"
import bottle3 from "@/app/assets/bottle3.svg"
import bottle4 from "@/app/assets/bottle4.svg"
import bottle5 from "@/app/assets/bottle5.svg"
import bottle6 from "@/app/assets/bottle6.svg"
import CustomButton from "@/app/components/ui/buttons";

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
                <CustomButton text="VIEW MORE"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="bg-gray-100 rounded">
                    <Image
                        src={bottle1}
                        alt="Bottle 1"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <div className="p-3">
                        <p className="text-left p-2 text-black">Rainbow 600</p>
                        <CustomButton text="Learn More"/>
                    </div>
                </div>
                <div className="bg-gray-100 rounded">
                    <Image
                        src={bottle2}
                        alt="Bottle 2"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <div className="p-3">
                        <p className="text-left p-2 text-black">Rio 650</p>
                        <CustomButton text="Learn More"/>
                    </div>
                </div>
                <div className="bg-gray-100 rounded">
                    <Image
                        src={bottle3}
                        alt="Bottle 3"
                        width={250}
                        height={250}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <div className="p-3">
                        <p className="text-left p-2 text-black">Big Bull 1300</p>
                        <CustomButton text="Learn More"/>
                    </div>
                </div>
                <div className="bg-gray-100 rounded">
                    <Image
                        src={bottle4}
                        alt="Bottle 3"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <div className="p-3">
                        <p className="text-left p-2 text-black">Rome 600</p>
                        <CustomButton text="Learn More"/>
                    </div>
                </div>
                <div className="bg-gray-100 rounded">
                    <Image
                        src={bottle5}
                        alt="Bottle 3"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <div className="p-3">
                        <p className="text-left p-2 text-black">Rainbow 600</p>
                        <CustomButton text="Learn More"/>
                    </div>
                </div>
                <div className="bg-gray-100 rounded">
                    <Image
                        src={bottle6}
                        alt="Bottle 3"
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto rounded-t"
                    />
                    <div className="p-3">
                        <p className="text-left p-2 text-black">Rio 650</p>
                        <CustomButton text="Learn More"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
