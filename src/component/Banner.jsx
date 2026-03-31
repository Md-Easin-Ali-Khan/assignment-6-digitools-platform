import { Play } from "lucide-react";
import BannerImage from "../assets/banner.png"
import CercleImage from "../assets/cercle.png"
import { gradientBtn } from "./NavBar";

const Banner = () => {
    return (

        <div className="flex justify-between items-center my-20 space-y-5 flex-col md:flex-row">

            {/* Banner Content */}
            <div>
                <div className="flex md:mx-0 mx-auto items-center gap-1.5 w-fit rounded-full bg-[#E1E7FF] py-2 px-4">
                    <div><img src={CercleImage} alt="" /></div>
                    <p className="font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</p>
                </div>
                <h1 className="font-extrabold mb-4 leading-tight text-gray-900 text-5xl md:text-7xl text-center md:text-left">
                    Supercharge Your<p>Digital Workflow</p>
                </h1>
                <p className="text-lg text-gray-500 mb-8 text-center md:text-left">
                    Access premium AI tools, design assets, templates, and productivity<br />software—all in one place. Start creating faster today.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <button className={gradientBtn}>Explore Products

                    </button>

                    <button className="btn group relative flex items-center font-semibold text-purple-600 border border-[#4F39F6] rounded-full overflow-hidden transition-all duration-300 hover:text-white">

                        <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] transition-all duration-500 ease-out group-hover:w-full"></span>

                        <span className="relative flex items-center gap-2 transition-colors duration-300">
                            <Play></Play>
                            <span>Watch Demo</span>
                        </span>

                    </button>
                </div>
            </div>

            {/* Banner Image */}
            <div className="w-full max-w-md flex justify-center md:justify-end">
                <img src={BannerImage} alt="Digital tools illustration" />
            </div>
        </div>
    );
};

export default Banner;