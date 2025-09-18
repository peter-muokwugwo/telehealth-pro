import React from "react";
import { CheckCircle, Star } from "lucide-react";
import Card from "@/ui/Card";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils/urlHelpers";
import type { PricingPlan } from "./types";


interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <Card
      className={`relative group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 fade-in-up ${
        plan.popular ? "ring-2 ring-accent shadow-xl" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-1 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center p-8">
        <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-primary">{plan.price}</span>
          <span className="text-gray-500 ml-2">{plan.duration}</span>
        </div>
        <p className="text-gray-600">{plan.description}</p>
      </div>

      <div className="p-8 pt-0">
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Link to={createPageUrl("Contact")} className="block">
          <button
            className={`w-full py-3 text-lg font-semibold rounded-full transition-all duration-200 ${
              plan.popular
                ? "bg-accent hover:bg-opacity-90 text-white"
                : "bg-primary hover:bg-opacity-90 text-white"
            }`}
          >
            {plan.buttonText}
          </button>
        </Link>
      </div>
    </Card>
  );
}
