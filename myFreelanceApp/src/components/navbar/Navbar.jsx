import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Popup from "../popup/Popup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 font-[Poppins] border-b shadow-sm transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 border-gray-900"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-gray-100 tracking-wide">
          Logo
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-base font-medium text-white">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-lg">
          <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer" />
          <FaInstagram className="text-pink-500 hover:text-pink-600 cursor-pointer" />
          <FaTwitter className="text-sky-400 hover:text-sky-600 cursor-pointer" />
          <FaLinkedinIn className="text-blue-700 hover:text-blue-900 cursor-pointer" />
        </div>

        {/* WhatsApp Button */}
        <button className="hidden md:flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300">
          <FaWhatsapp className="text-xl" />
          Whatsapp
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full bg-gray-100 text-gray-800 shadow hover:bg-gray-200 transition"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end-safe px-5 pt-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-100 text-gray-800 shadow hover:bg-gray-200 transition"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col px-6 py-4 space-y-6 text-base font-medium text-white">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          <div className="flex justify-center pt-4 space-x-4 text-lg">
            <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:text-pink-600 cursor-pointer" />
            <FaTwitter className="text-sky-400 hover:text-sky-600 cursor-pointer" />
            <FaLinkedinIn className="text-blue-700 hover:text-blue-900 cursor-pointer" />
          </div>

          <button className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition duration-300">
            <FaWhatsapp className="text-xl" />
            Whatsapp
          </button>
        </div>
      </div>
      <Popup />
    </nav>
  );
};

export default Navbar;
