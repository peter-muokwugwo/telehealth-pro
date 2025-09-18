import { 
  Heart, Brain, Baby, Eye, Stethoscope, 
  Users, Activity, Shield 
} from "lucide-react";
import type { ServiceCategory } from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive family medicine, routine check-ups, preventive care, and health screenings.",
    features: ["Annual physicals", "Chronic disease management", "Health screenings", "Vaccinations"],
    color: "bg-blue-500"
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Heart health consultations, blood pressure management, and cardiovascular risk assessment.",
    features: ["Heart disease prevention", "Hypertension management", "Cholesterol monitoring", "EKG interpretation"],
    color: "bg-red-500"
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Mental wellness support, therapy sessions, and psychiatric consultations.",
    features: ["Anxiety & depression", "Stress management", "Therapy sessions", "Medication management"],
    color: "bg-purple-500"
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized care for children from infancy through adolescence.",
    features: ["Well-child visits", "Growth monitoring", "Behavioral concerns", "Parent guidance"],
    color: "bg-green-500"
  },
  {
    icon: Eye,
    title: "Dermatology",
    description: "Skin health consultations, rash diagnosis, and dermatological assessments.",
    features: ["Skin condition diagnosis", "Acne treatment", "Rash evaluation", "Mole monitoring"],
    color: "bg-orange-500"
  },
  {
    icon: Users,
    title: "Women's Health",
    description: "Comprehensive women's healthcare including reproductive health and wellness.",
    features: ["Reproductive health", "Hormonal concerns", "Pregnancy support", "Wellness screenings"],
    color: "bg-pink-500"
  },
  {
    icon: Activity,
    title: "Urgent Care",
    description: "Non-emergency medical care for common illnesses and minor injuries.",
    features: ["Cold & flu treatment", "Minor injuries", "Infections", "Symptom evaluation"],
    color: "bg-yellow-500"
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive healthcare to prevent illness and maintain optimal health.",
    features: ["Health risk assessment", "Lifestyle counseling", "Nutrition guidance", "Exercise planning"],
    color: "bg-teal-500"
  }
];
