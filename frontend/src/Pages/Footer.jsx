import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#f2f6fc] px-6 md:px-20 py-16 md:py-24">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Protect your business with Proof
          </h1>
          <p className="text-gray-600 mb-6">
            Verify your customer's identity and start building a trusted
            relationship in minutes.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center hover:opacity-80 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
                alt="App Store"
                className="w-5 h-5 mr-2"
              />
              App Store
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center hover:opacity-80 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-5 h-5 mr-2"
              />
              Google Play
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="bg-white rounded-3xl shadow-lg p-8 relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="Phone"
              className="w-40 h-40 md:w-52 md:h-52"
            />
          </div>
          <div className="absolute top-0 right-10 bg-blue-700 w-4 h-4 rounded-full"></div>
          <div className="absolute bottom-5 left-5 bg-blue-400 w-6 h-6 rounded-full"></div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0b1b46] text-white py-12 px-6 md:px-20 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p className="text-sm text-gray-300 mb-2">
              Your trusted partner for exclusive offers and deals tailored to
              your needs.
            </p>
            <p className="text-sm text-gray-400">
              Need help?{" "}
              <a href="#" className="underline hover:text-white">
                Contact Us
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Address: Add later</li>
              <li>📞 Phone: 794-716-8830</li>
              <li>✉️ Email: info@deal.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Subscribe to our newsletter
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-gray-900 outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm pt-6">
          <p>© All rights reserved. Made by Deal</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
