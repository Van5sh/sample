import icon1 from "@/app/assets/icon1.svg";
import icon2 from "@/app/assets/icon2.svg";
import bottl2e from "@/app/assets/bottl2e.svg";
import bcircle from "@/app/assets/bcircle.svg";
import Image from "next/image";

export default function Firstpage() {
    return (
        <div>
            <div className="relative mt-12 w-[300px] mx-auto">

                <Image src={bcircle} alt="bg" width={300} height={150} />
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 z-20">
                    <h1 className="text-2xl font-bold text-black text-center">
                        The Ultimate Companion for Hydration
                    </h1>
                    <p className="text-lg text-black text-center">
                        we believe in the power of hydration. Our mission is simple yet vital
                    </p>
                </div>

                {/* Bottle image overlay shifted downward */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                        src={bottl2e}
                        alt="bottle"
                        width={100}
                        height={100}
                        className="translate-y-32 z-30" // adjust translate-y-32 as needed
                    />
                </div>
            </div>

            <div className="flex justify-between items-start mt-12 p-3">
                <Image src={icon1} alt="icon1" width={100} height={100} />
                <Image src={icon2} alt="icon2" width={100} height={100} />
            </div>
        </div>
    );
}
