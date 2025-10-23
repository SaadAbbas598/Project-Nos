import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="relative flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-md max-w-4xl">
        {/* Illustration */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://illustrations.popsy.co/gray/reading.svg"
            alt="Illustration"
            className="w-full"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 bg-[#e9ecfc] p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            <div className="text-center text-sm text-gray-600">
              Already a member?{" "}
              <Link to="/" className="text-blue-600 font-medium hover:underline">
                Login
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1d7e] text-white py-2 rounded-lg font-medium hover:bg-[#0f1360] transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
