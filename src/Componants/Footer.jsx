
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import footerImg from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#001a33] text-white px-10 py-5 flex flex-col items-center border-t border-white/10">
      {/* Top Section */}
      <div className="w-full flex justify-between items-center border-b border-white/10 pb-3 mt-3">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-2">
          <img src={footerImg} alt="Logo" className="w-9 h-9 object-contain" />
          <span className="font-semibold tracking-wide">HERO.IO</span>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium mr-2">Social Links</p>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaGlobe />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="text-sm mt-3 opacity-70">
        Copyright © 2025 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
