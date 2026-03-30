import React from "react";
import { Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full h-[60vh] bg-black flex flex-col items-center justify-center text-center px-4">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center h-full">
        {/* Large Logo */}
        <div className="mb-12" data-aos="zoom-in">
          <img 
            src="/spilled-milk-logo.png" 
            alt="Spilled Milk Logo" 
            className="w-[500px] sm:w-[700px] lg:w-full lg:max-w-5xl h-auto object-contain"
          />
        </div>

        {/* Contact Information */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl sm:text-3xl font-black text-[#f0e8dd] uppercase tracking-tighter">
            Let's Start Something
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-[#f0e8dd]/70 font-bold uppercase tracking-widest text-xs sm:text-sm">
            <a 
              href="mailto:info@kaanchstudios.com" 
              className="flex items-center gap-2 hover:text-[#1a3a8f] transition-colors"
            >
              <Mail size={18} />
              <span>hello@spilledmilk.com</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#f0e8dd] transition-colors"
            >
              <Instagram size={18} />
              <span>@kaanchstudios</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Bengaluru, India</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-[#1a3a8f]/10 w-full max-w-2xl text-[10px] font-bold text-[#f0e8dd]/30 uppercase tracking-[0.3em]">
          © 2026 Kaanch Studios. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
