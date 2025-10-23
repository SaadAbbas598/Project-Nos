import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 text-sm mt-1">
          Please enter your details to continue
        </p>

        <form className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="imane23@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-lg"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="w-4 h-4 border-gray-300" />
            <p>
              Agree with{" "}
              <a href="#" className="text-blue-600 font-medium">
                terms and conditions
              </a>
            </p>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-[#1a1d7e] text-white py-2 rounded-md font-medium hover:bg-[#0f1360] transition text-sm"
          >
            Login
          </button>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md font-medium hover:bg-gray-100 transition text-sm"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
