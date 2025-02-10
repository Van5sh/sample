import Navbar from "@/app/navbar";
import "../globals.css";
import Footer from "@/app/footer";
import FourthPage from "@/app/components/fourthpage";
import ThirdPage from "@/app/components/thirdpage";
import FirstPage from "@/app/components/firstpage";
import SecondPage from "@/app/components/secondpage";

export default function Landing() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <FirstPage/>
            <SecondPage/>
            <ThirdPage/>
            <FourthPage/>
            <Footer/>
        </div>
    );
}
