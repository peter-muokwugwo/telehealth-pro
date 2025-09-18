import type { PricingPlan } from "./types";


export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Consultation",
    price: "$49",
    duration: "per visit",
    description: "Perfect for routine check-ups and minor health concerns",
    features: [
      "15-minute video consultation",
      "Basic health assessment",
      "Electronic prescription",
      "Follow-up message support",
      "Medical record access"
    ],
    popular: false,
    buttonText: "Book Now"
  },
  {
    name: "Premium Care",
    price: "$99",
    duration: "per visit",
    description: "Comprehensive care with extended consultation time",
    features: [
      "30-minute video consultation",
      "Detailed health assessment",
      "Electronic prescription",
      "Priority scheduling",
      "Specialist referrals",
      "Care plan development",
      "24/7 message support"
    ],
    popular: true,
    buttonText: "Most Popular"
  },
  {
    name: "Family Plan",
    price: "$199",
    duration: "per month",
    description: "Unlimited consultations for your entire family",
    features: [
      "Unlimited consultations",
      "Family health dashboard",
      "Preventive care reminders",
      "Specialist consultations included",
      "Emergency consultation access",
      "Health tracking tools",
      "Dedicated family coordinator"
    ],
    popular: false,
    buttonText: "Get Started"
  }
];
