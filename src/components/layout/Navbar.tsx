"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/config/site-content";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-4" : "bg-white/90 backdrop-blur-sm py-6"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-[#D32F2F] flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <Flame className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-gray-900">
            {siteConfig.shortName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold text-lg transition-colors hover:text-[#D32F2F] ${pathname === link.href ? "text-[#D32F2F]" : "text-gray-700"}`}
            >
              {link.name}
            </Link>
          ))}
          
          <a
            href={`tel:${siteConfig.phone}`}
            className="px-5 py-2 font-bold text-white bg-[#D32F2F] rounded-full shadow-md hover:bg-red-700 transition-colors"
          >
            اتصل الآن
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7 text-[#D32F2F]" />
          ) : (
            <Menu className="w-7 h-7 group-hover:text-[#D32F2F] transition-colors" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-semibold text-lg transition-colors ${pathname === link.href ? "bg-red-50 text-[#D32F2F]" : "text-gray-700 hover:bg-gray-50"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2 border-t pt-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block text-center w-full px-5 py-3 font-bold text-white bg-[#D32F2F] rounded-full shadow-sm hover:bg-red-700 transition-colors"
                >
                  اتصل التان
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
