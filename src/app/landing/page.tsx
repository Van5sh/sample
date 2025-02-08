import Navbar from "@/app/navbar";
import "../globals.css";
import Footer from "@/app/footer";
import FourthPage from "@/app/components/fourthpage";
import ThirdPage from "@/app/components/thirdpage";

export default function Landing() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <ThirdPage/>
            <Footer/>
        </div>
    );
}
