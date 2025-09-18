import type { LucideIcon } from "lucide-react";

export interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}
