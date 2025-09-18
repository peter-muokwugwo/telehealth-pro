import React from "react";
import { serviceCategories } from "./serviceData";
import ServiceCard from "./ServiceCard";


export default function ServiceCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Medical Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access expert care across a wide range of medical specialties, all
            from the convenience of your home or office.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
