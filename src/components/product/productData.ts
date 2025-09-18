import { Shield, Clock, Monitor, CheckCircle, Phone, Heart } from 'lucide-react';
import type { Feature } from './types'; 

export const features: Feature[] = [
  {
    icon: Monitor,
    title: 'HD Video Consultations',
    description: 'Crystal clear video quality for detailed medical examinations and consultations.',
  },
  {
    icon: Clock,
    title: 'Same-Day Appointments',
    description: 'Get the care you need when you need it with flexible scheduling options.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Your medical information is secure with our fully compliant platform.',
  },
  {
    icon: CheckCircle,
    title: 'Electronic Prescriptions',
    description: 'Prescriptions sent directly to your preferred pharmacy for convenience.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock technical and medical support when you need assistance.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Tailored treatment plans designed specifically for your health needs.',
  },
];
