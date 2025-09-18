import React from "react";
import { Heart, Monitor } from "lucide-react";

export default function HeroTrustIndicators() {
  return (
    <div className="flex flex-wrap items-center gap-8 text-blue-200">
      <div className="flex items-center space-x-2">
        <Heart className="w-5 h-5 text-red-400" />
        <span className="font-medium">10,000+ Happy Patients</span>
      </div>
      <div className="flex items-center space-x-2">
        <Monitor className="w-5 h-5 text-green-400" />
        <span className="font-medium">24/7 Available</span>
      </div>
    </div>
  );
}
