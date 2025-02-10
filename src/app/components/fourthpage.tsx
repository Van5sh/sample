"use client";

import { useRef, useEffect } from 'react';
import footer from "@/app/assets/footer.svg";
import footer1 from "@/app/assets/footer1.svg";
import footer2 from "@/app/assets/footer2.svg";
import footer3 from "@/app/assets/footer3.svg";
import footer4 from "@/app/assets/footer4.svg";
import Image from "next/image";

export default function FourthPage() {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const horizontalScroll = window.scrollY * 0.5;
                timelineRef.current.scrollLeft = horizontalScroll;
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={timelineRef}
            className="flex flex-row overflow-x-auto no-scrollbar"
        >
            <Image src={footer} alt="Roadmap" width={1500} height={400} />
            <Image src={footer1} alt="Roadmap" width={1500} height={400} />
            <Image src={footer2} alt="Roadmap" width={1500} height={400} />
            <Image src={footer3} alt="Roadmap" width={1500} height={400} />
            <Image src={footer4} alt="Roadmap" width={1500} height={400} />
        </div>
    );
}
