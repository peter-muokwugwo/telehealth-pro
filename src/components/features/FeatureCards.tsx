import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "./featureData";

export default function FeatureCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose TeleHealth Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience healthcare like never before with our cutting-edge
            telemedicine platform designed to put your health and convenience
            first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
