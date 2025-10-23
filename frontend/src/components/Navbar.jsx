import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      {/* ===== Row 1: Logo + Links + Sign In/Up ===== */}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-800 w-8 h-8 rounded flex items-center justify-center text-white font-bold">
            🏛️
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-blue-700">Home</a></li>
          <li><a href="/upload" className="hover:text-blue-700">Upload Document</a></li>
          <li><a href="/create-event" className="hover:text-blue-700">Create Event</a></li>
          <li><a href="/about" className="hover:text-blue-700">About Us</a></li>
          <li><a href="/contact" className="hover:text-blue-700">Contact Us</a></li>
        </ul>

        {/* Sign In / Sign Up */}
        <div className="flex items-center space-x-3">
          <a
            href="/login"
            className="border border-gray-300 px-4 py-1 rounded-lg hover:bg-gray-100 text-sm font-medium"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-blue-800 text-white px-4 py-1 rounded-lg hover:bg-blue-900 text-sm font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* ===== Row 2: Search Bar ===== */}
      <div className="flex items-center justify-center px-8 pb-4">
        <div className="flex items-center w-full max-w-4xl border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search by Artist, Events"
            className="flex-grow px-4 py-2 text-sm outline-none"
          />
          <div className="border-l h-6"></div>
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 w-40 text-sm outline-none"
          />
          <button className="bg-blue-800 text-white px-6 py-2 hover:bg-blue-900">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
