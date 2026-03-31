import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import navData from "./navData";


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navData.map(link => (
        <li key={link.id}>
            <a className="text-gray-900 font-semibold hover:text-purple-600" href={link.path}>
                {link.name}
            </a>
        </li>
    ))

    return (
        <div className="md:h-24 flex flex-col justify-center md:flex-row md:justify-between items-center">
            <div className="my-6">
                <div className="flex items-center relative">

                    <button
                        className="md:hidden pr-3"
                        onClick={() => setOpen(!open)}>
                        {open ?
                            <X className="md:hidden"></X>
                            : <Menu className="md:hidden"></Menu>
                        }
                    </button>

                    <ul className={`md:hidden bg-white shadow-lg p-3 rounded transition-all duration-600 absolute space-y-3 ${open ? 'top-12' : '-top-96'}`}>
                        {links}
                    </ul>

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
                </div>
            </div>
            <ul className="hidden md:flex space-x-4 px-2">
                {
                    links
                }
            </ul>
            <div className="flex items-center gap-4 md:gap-2 mb-6 md:mb-0">
                <ShoppingCart className="w-4 block text-gray-900" />

                <button className="btn text-gray-900 font-semibold">
                    Login
                </button>

                <button className="btn bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] rounded-full text-white text-sm md:text-base">
                    Get Started
                </button>
            </div>

        </div>


    );
};

export default NavBar;