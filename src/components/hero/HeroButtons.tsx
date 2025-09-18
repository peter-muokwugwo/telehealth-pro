import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { createPageUrl } from "@/utils/urlHelpers";


export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <Link to={createPageUrl("Contact")}>
        <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center">
          Start Your Journey
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </Link>

      <button className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200 flex items-center">
        <Play className="mr-2 w-5 h-5" />
        See How It Works
      </button>
    </div>
  );
}
