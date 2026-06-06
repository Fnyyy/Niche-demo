"use client";
import { useState, useEffect } from "react";
import { Heart, User, MagnifyingGlass } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-serif font-semibold tracking-widest text-charcoal">
          NICHE
        </div>
        
        <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest text-charcoal-light">
          <a href="#trend-radar" className="hover:text-gold transition-colors">The Trend Radar</a>
          <a href="#dupe-logic" className="hover:text-gold transition-colors">Dupe Logic</a>
          <a href="#scent-guide" className="hover:text-gold transition-colors">Scent Guide</a>
        </div>

        <div className="flex space-x-6 text-xl text-charcoal">
          <button className="hover:text-gold transition-colors"><MagnifyingGlass /></button>
          <button className="hover:text-gold transition-colors"><Heart /></button>
          <button className="hover:text-gold transition-colors"><User /></button>
        </div>
      </div>
    </motion.nav>
  );
}
