import React from "react";
import phoneMockup from "../assets/mobile-mockup.png";
export default function Dashboard() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-10 bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Left Section */}
      <div className="max-w-lg space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Remote Online Closing (RON)
        </h1>

        <p className="text-gray-600 text-lg">
          • save time &nbsp; • more convenient &nbsp; • more efficient •
        </p>

        <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition">
          Create Event
        </button>
      </div>

      {/* Right Section: Mobile Mockup */}
      <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
        {/* Mockup Image */}
        <img
          src={phoneMockup}
          alt="Mobile App Mockup"
          className="w-[300px] md:w-[340px] drop-shadow-xl rounded-2xl relative z-10"
        />

        {/* Blue Circle Background */}
        <div className="absolute top-2 right-6 bg-blue-900 w-32 h-32 rounded-full -z-10 opacity-20"></div>

        {/* Labels and Arrows (adjusted to align perfectly with image) */}
        <div className="absolute -left-28 top-[70px] text-gray-800 font-medium text-base flex flex-col items-end space-y-16">
          {/* Profile view */}
          <div className="flex flex-col items-end">
            <span>Profile view</span>
            <span className="text-2xl -rotate-[30deg]">↘</span>
          </div>

          {/* Tasks */}
          <div className="flex flex-col items-end">
            <span>Tasks</span>
            <span className="text-2xl -rotate-[30deg]">↘</span>
          </div>

          {/* Events */}
          <div className="flex flex-col items-end">
            <span>Events</span>
            <span className="text-2xl -rotate-[30deg]">↘</span>
          </div>
        </div>
      </div>
    </section>
  );
}
