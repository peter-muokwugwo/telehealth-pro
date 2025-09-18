import { Heart, Users, Clock, Award } from "lucide-react";
import type { Stat } from "./types";

export const stats: Stat[] = [
  { icon: Users, number: "10,000+", label: "Happy Patients", color: "text-blue-500" },
  { icon: Heart, number: "50+", label: "Expert Doctors", color: "text-red-500" },
  { icon: Clock, number: "24/7", label: "Available Support", color: "text-green-500" },
  { icon: Award, number: "99%", label: "Satisfaction Rate", color: "text-purple-500" },
];
