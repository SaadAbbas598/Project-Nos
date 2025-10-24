import React from "react";
import { ArrowRight } from "lucide-react";

export default function PlatformSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden">
      {/* Floating circles background */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-700 rounded-full"></div>
      <div className="absolute top-20 left-24 w-8 h-8 border-2 border-blue-700 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-blue-700 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 border-2 border-blue-700 rounded-full"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          A smart transaction management <br className="hidden md:block" />
          platform for everything
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Defend is the most sophisticated fraud detection and prevention
          platform with deepfake intelligence and hundreds of other risk
          signals. By digitizing every customer interaction, your business can
          be protected against fraud and forgery, at scale, across every
          department.
        </p>

        {/* Status Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { title: "Completed", color: "bg-white" },
            { title: "Canceled", color: "bg-white" },
            { title: "Pending", color: "bg-white" },
            { title: "Upcoming", color: "bg-[#0C1E5B] text-white" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-44 h-24 rounded-2xl shadow-sm border border-gray-200 ${item.color}`}
            >
              <div className="flex items-center gap-2">
                <ArrowRight className={`w-4 h-4 ${item.title === "Upcoming" ? "text-white" : "text-gray-700"}`} />
                <h3
                  className={`font-semibold text-sm ${
                    item.title === "Upcoming" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={`text-xs mt-1 ${
                  item.title === "Upcoming" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                86 Task
              </p>
            </div>
          ))}
        </div>

        {/* Event Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {/* Date & Sidebar */}
          <div className="md:col-span-1 bg-white rounded-2xl shadow-md p-8">
            <div className="text-5xl font-bold text-[#0C1E5B] mb-2">28</div>
            <p className="text-gray-500 mb-6">November, 2024</p>
            <h4 className="font-semibold text-gray-900 mb-4">
              Upcoming Online Events
            </h4>
            <button className="flex items-center gap-1 text-sm font-medium text-[#0C1E5B] hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Event Cards */}
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Christian in Chicago",
                time: "Nov 28 | 15:00",
                price: "Free",
                img: "https://images.unsplash.com/photo-1590608897129-79da98d1596d?auto=format&fit=crop&w=600&q=60",
              },
              {
                title: "Motivational Podcast",
                time: "Nov 28 | 17:00",
                price: "$15.00",
                img: "https://images.unsplash.com/photo-1600880292089-90e24a8a9a3a?auto=format&fit=crop&w=600&q=60",
              },
              {
                title: "Sunday Online Meditation",
                time: "Nov 28 | 8:30",
                price: "$23.00",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=60",
              },
              {
                title: "Morning Stretching & Exercise",
                time: "Nov 28 | 10:00",
                price: "$12.00",
                img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=60",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">
                    {event.time} • Online event
                  </p>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    {event.title}
                  </h5>
                  <p className="text-sm font-medium text-blue-700">
                    {event.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
