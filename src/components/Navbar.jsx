import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" fixed top-0 left-0 w-full bg-[#1c1c1c] text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <h1 className="text-2xl font-semibold">PORTFOLIO</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 px-6 py-2 border border-zinc-600 rounded-lg bg-zinc-800">
          <li className="hover:text-gray-300 cursor-pointer"><a href="#intro">Home</a></li>
          <li className="hover:text-gray-300 cursor-pointer"><a href="#services">Services</a></li>
          <li className="hover:text-gray-300 cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-gray-300 cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-gray-300 cursor-pointer"><a href="#projects">Projects</a> </li>
        </ul>

        {/* Desktop Button */}
        <button 
        onClick={() => window.open("https://wa.me/918802765551?text=Hello%20Parvez%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity")}
        className="hidden md:block px-4 py-2 border border-gray-400 rounded-lg 
                           hover:border-white 
                           hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] 
                           transition">
          Let's Talk
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-zinc-900">
          <li className="list-none hover:text-gray-300 cursor-pointer">Home</li>
          <li className="list-none hover:text-gray-300 cursor-pointer">Services</li>
          <li className="list-none hover:text-gray-300 cursor-pointer">About</li>
          <li className="list-none hover:text-gray-300 cursor-pointer">SKills</li>
          <li className="list-none hover:text-gray-300 cursor-pointer">Projects</li>

           <button 
        onClick={() => window.open("https://wa.me/918802765551?text=Hello%20Parvez%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity")}
        className="md:block px-4 py-2 border border-gray-400 rounded-lg 
                           hover:border-white 
                           hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] 
                           transition">
          Let's Talk
        </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;