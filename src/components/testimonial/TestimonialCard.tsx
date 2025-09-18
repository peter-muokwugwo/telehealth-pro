import React from "react";
import { Star, Quote } from "lucide-react";
import Card from "@/ui/Card";
import type { Testimonial } from "./types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <Card
      className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="p-8">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        <div className="relative mb-6">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent opacity-20" />
          <p className="text-gray-600 italic leading-relaxed pl-6">
            "{testimonial.content}"
          </p>
        </div>

        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-primary">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
