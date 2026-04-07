import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import navData from "./navData";

export const gradientBtn = "btn bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] rounded-full text-white text-sm md:text-base"

const NavBar = ({ selectedProduct }) => {

  const [open, setOpen] = useState(false);

  const links = navData.map(link => (
    <li key={link.id}>
      <a className="text-gray-900 font-semibold hover:text-purple-600" href={link.path}>
        {link.name}
      </a>
    </li>
  ))

  return (
    <div className="shadow-lg py-5 md:py-6 px-10 lg:px-20 flex justify-between md:justify-between items-center">
        <div className="flex items-center relative">

          <button
            className="lg:hidden pr-3"
            onClick={() => setOpen(!open)}>
            {open ?
              <X className="w-4 sm:w-5 md:w-6"></X>
              : <Menu className="w-4 sm:w-5 md:w-6"></Menu>
            }
          </button>

          <ul className={`lg:hidden bg-amber-300 shadow-lg p-3 rounded transition-all duration-600 absolute space-y-3 ${open ? 'top-9 sm:top-12' : '-top-96'}`}>
            {links}
          </ul>

          <h1 className="text-2xl md:text-4xl sm:text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
        </div>
      <ul className="hidden lg:flex gap-8">
        {
          links
        }
      </ul>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-7 lg:ml-0">
        <div className="relative">
          <ShoppingCart className="w-4 sm:w-5 md:w-6 text-gray-900" />
          <span className="absolute -top-2 md:-top-3 -right-2 bg-red-500 text-white text-xs w-4 md:w-5 h-5 md:h-6 flex items-center justify-center rounded-full">
            {selectedProduct.length}
          </span>
        </div>

        <button className="btn text-gray-900 sm:font-semibold rounded-full">
          Login
        </button>

        <button className={gradientBtn}>
          Get Started
        </button>
      </div>

    </div>


  );
};

export default NavBar;