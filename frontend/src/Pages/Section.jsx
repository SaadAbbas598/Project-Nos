import React from "react";
import { MessageSquare, Video, FileText } from "lucide-react";

export default function Section() {
  return (
    <section className="bg-[#0C1E5B] text-white py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        The Notarize Network never sleeps
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12">
        The largest network of online notaries performing notarizations and
        checking IDs. It’s the internet’s trust agent.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="w-40 h-40 flex flex-col items-center justify-center border border-gray-400 rounded-xl hover:bg-[#1B2B6B] transition-all">
          <MessageSquare className="w-8 h-8 mb-2 text-gray-300" />
          <span className="text-sm text-gray-200">Messenger</span>
        </div>

        {/* Card 2 (Active Center) */}
        <div className="w-40 h-40 flex flex-col items-center justify-center bg-white text-[#0C1E5B] shadow-lg rounded-xl scale-105 transition-all">
          <Video className="w-8 h-8 mb-2" />
          <span className="text-sm font-semibold">Video Conference</span>
        </div>

        {/* Card 3 */}
        <div className="w-40 h-40 flex flex-col items-center justify-center border border-gray-400 rounded-xl hover:bg-[#1B2B6B] transition-all">
          <FileText className="w-8 h-8 mb-2 text-gray-300" />
          <span className="text-sm text-gray-200">Document</span>
        </div>
      </div>
    </section>
  );
}
