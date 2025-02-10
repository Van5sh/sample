import Image from "next/image";
import Features from "@/app/assets/features.svg";

export default function SecondPage() {
    return (
        <div className="relative w-full h-screen">
            <Image
                src={Features}
                alt="Hello"
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    );
}
