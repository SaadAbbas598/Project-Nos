import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Upload Document", href: "/upload" },
    { name: "Create Event", href: "/create-event" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 shadow-sm border-b border-gray-200 sticky top-0 z-50"
    >
      {/* ===== Row 1: Logo + Links + Sign In/Up ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-4 space-y-3 md:space-y-0">
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-800 w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-white font-bold text-base sm:text-lg">
              🏛️
            </div>
            <span className="font-semibold text-gray-800 text-base sm:text-lg">Eventify</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-800 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-700 font-medium text-sm lg:text-base">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, color: "#1e40af" }}
              transition={{ duration: 0.2 }}
            >
              <a href={link.href} className="hover:text-blue-700 transition">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Sign In / Sign Up */}
        <div className="hidden md:flex items-center space-x-3">
          <motion.a
            href="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 px-4 py-1.5 rounded-lg hover:bg-gray-100 text-sm font-medium transition"
          >
            Sign In
          </motion.a>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-800 text-white px-4 py-1.5 rounded-lg hover:bg-blue-900 text-sm font-medium transition"
          >
            Sign Up
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <ul className="flex flex-col space-y-2 px-4 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-3 rounded transition"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 px-4 pb-4">
              <a
                href="/login"
                className="flex-1 text-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="flex-1 text-center bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 text-sm font-medium transition"
              >
                Sign Up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Row 2: Full-Width Responsive Search Bar ===== */}
      <div className="px-4 md:px-10 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm flex flex-col sm:flex-row"
        >
          {/* Artist/Event Search */}
          <input
            type="text"
            placeholder="Search by Artist, Events"
            className="flex-grow px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none border-b sm:border-b-0 sm:border-r border-gray-200"
          />
          {/* Location Input */}
          <input
            type="text"
            placeholder="Location"
            className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none flex-grow sm:flex-none sm:w-48 border-b sm:border-b-0 sm:border-r border-gray-200"
          />
          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-800 text-white px-6 py-2.5 sm:py-3 hover:bg-blue-900 text-sm font-medium w-full sm:w-auto transition"
          >
            Search
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
