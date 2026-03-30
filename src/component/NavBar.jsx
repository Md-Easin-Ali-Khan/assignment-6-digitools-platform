import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import navData from "./navData";


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navData.map(link => (
        <li key={link.id}>
            <a className="text-[16px] text-gray-900 font-semibold hover:text-purple-600" href={link.path}>
                {link.name}
            </a>
        </li>
    ))

    return (
        <div className="navbar h-23 flex justify-between px-6 relative">
            <div className="my-6">
                <div className="flex items-center">

                    <button onClick={() => setOpen(!open)}>
                        {open ?
                            <X className="md:hidden"></X>
                            : <Menu className="md:hidden"></Menu>
                        }
                    </button>

                    <ul className={`md:hidden bg-white shadow-lg p-3 rounded transition-all duration-300 absolute space-y-3 ${open ? 'top-18' : '-top-96'}`}>
                        {links}
                    </ul>

                    <h1 className="text-4xl ml-3 font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
                </div>
            </div>
            <ul className="hidden md:flex gap-8">
                {
                    links
                }
            </ul>
            <div className="flex items-center gap-3">
                <div><ShoppingCart className="w-4 text-gray-900 font-semibold"></ShoppingCart></div>
                <button className="btn text-gray-900 font-semibold">Login</button>
                <button className="btn bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] rounded-full text-white">Get Started</button>
            </div>

        </div>


    );
};

export default NavBar;