import React from "react";
import Card from "@/ui/Card";
import type { ServiceCategory } from "./types";


interface ServiceCardProps {
  service: ServiceCategory;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div
          className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
        >
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-1">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-500 flex items-center">
              <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
