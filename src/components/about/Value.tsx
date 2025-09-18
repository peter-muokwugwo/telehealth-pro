import React from 'react'
import { Shield, Heart, Users, Lightbulb, Award, Clock } from "lucide-react";
import Card from '@/ui/Card';


interface ValueProps extends React.HTMLAttributes<HTMLDivElement> {

}


const Value: React.FC<ValueProps> = () => {
    const values = [
        {
            icon: Heart,
            title: "Compassionate Care",
            description: "Every interaction is guided by empathy, understanding, and genuine concern for patient wellbeing.",
            color: "bg-red-500"
        },
        {
            icon: Shield,
            title: "Trust & Security",
            description: "We maintain the highest standards of privacy and security, ensuring patient data is always protected.",
            color: "bg-blue-500"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We strive for excellence in everything we do, from medical care to customer service.",
            color: "bg-purple-500"
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Continuously improving our platform with cutting-edge technology to serve patients better.",
            color: "bg-yellow-500"
        },
        {
            icon: Users,
            title: "Accessibility",
            description: "Healthcare should be available to everyone, regardless of location, time, or circumstances.",
            color: "bg-green-500"
        },
        {
            icon: Clock,
            title: "Reliability",
            description: "Consistent, dependable service that patients can count on when they need us most.",
            color: "bg-indigo-500"
        }
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        These principles guide every decision we make and every service we provide,
                        ensuring our patients receive the best possible care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="p-8 text-center">
                                <div className={`${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Value