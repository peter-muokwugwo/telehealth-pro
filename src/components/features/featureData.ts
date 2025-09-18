import type { Feature } from "@/components/features/types";
import { Shield, Clock, Users, Star, Monitor, Stethoscope } from "lucide-react";


export const features: Feature[] = [
  {
    icon: Monitor,
    title: "Virtual Consultations",
    description:
      "Face-to-face video calls with certified healthcare professionals from anywhere.",
    color: "bg-blue-500",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Access healthcare when you need it most, any time of day or night.",
    color: "bg-green-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "HIPAA-compliant platform ensuring your medical information stays protected.",
    color: "bg-purple-500",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description:
      "Board-certified physicians with years of experience in their specialties.",
    color: "bg-red-500",
  },
  {
    icon: Users,
    title: "Family Care",
    description:
      "Comprehensive healthcare solutions for you and your entire family.",
    color: "bg-orange-500",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Highest standard of care with personalized treatment plans and follow-ups.",
    color: "bg-teal-500",
  },
];
