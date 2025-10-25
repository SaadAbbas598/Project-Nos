import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 shadow-sm border-b border-gray-200">
      {/* ===== Row 1: Logo + Links + Sign In/Up ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 space-y-3 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-800 w-9 h-9 rounded flex items-center justify-center text-white font-bold">
            🏛️
          </div>
          <span className="font-semibold text-gray-800 text-lg">Eventify</span>
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

      {/* ===== Row 2: Full-Width Responsive Search Bar ===== */}
      <div className="px-4 md:px-10 pb-4">
        <div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm flex flex-col sm:flex-row">
          {/* Artist/Event Search */}
          <input
            type="text"
            placeholder="Search by Artist, Events"
            className="flex-grow px-4 py-3 text-sm outline-none border-b sm:border-b-0 sm:border-r border-gray-200"
          />
          {/* Location Input */}
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-3 text-sm outline-none flex-grow sm:flex-none sm:w-48 border-b sm:border-b-0 sm:border-r border-gray-200"
          />
          {/* Search Button */}
          <button className="bg-blue-800 text-white px-6 py-3 hover:bg-blue-900 text-sm font-medium w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
