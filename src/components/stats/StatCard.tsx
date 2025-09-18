import React from "react";
import type { Stat } from "./types";

interface StatCardProps {
  stat: Stat;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  return (
    <div
      className="text-center fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div
        className={`${stat.color} mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg`}
      >
        <stat.icon className="w-8 h-8" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {stat.number}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </div>
  );
}
