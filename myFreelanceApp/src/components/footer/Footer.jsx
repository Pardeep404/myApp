import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-10 font-[Poppins]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Datalyst</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
          Get started with Datalyst today and unlock the power of data.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
            ].map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
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
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              Faridabad, Haryana, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              +91 92052 90899
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              support@yourcompany.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaFacebookF className="text-[#1877F2]" />
            </a>
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaInstagram className="text-[#E1306C]" />
            </a>
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaTwitter className="text-[#1DA1F2]" />
            </a>
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaLinkedinIn className="text-[#0077B5]" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 mt-10 pt-6">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
