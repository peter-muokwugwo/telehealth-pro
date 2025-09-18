import React from "react";
import { Heart, Monitor } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative fade-in-up" style={{ animationDelay: "0.3s" }}>
      <div className="relative">
        <div className="glass-effect rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Dr. Sarah Johnson</h3>
              <p className="text-gray-600">Family Medicine</p>
            </div>
            <div className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Available Now
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-600">Next Available:</p>
              <p className="font-semibold text-gray-800">Today, 2:30 PM</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-gray-600">Consultation Type:</p>
              <p className="font-semibold text-gray-800">Video Call</p>
            </div>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg floating-animation">
          <Monitor className="w-6 h-6 text-accent" />
        </div>
        <div
          className="absolute -bottom-4 -left-4 bg-accent rounded-full p-3 shadow-lg floating-animation"
          style={{ animationDelay: "1.5s" }}
        >
          <Heart className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
