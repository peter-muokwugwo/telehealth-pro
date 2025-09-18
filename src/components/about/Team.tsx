import React from 'react'
import { Linkedin, Twitter, Mail } from "lucide-react";
import Card from '@/ui/Card';


interface TeamProps extends React.HTMLAttributes<HTMLDivElement> {

}


const Team: React.FC<TeamProps> = () => {

    const teamMembers = [
        {
            name: "Dr. Emily Parker",
            role: "Chief Medical Officer",
            specialty: "Internal Medicine",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
            bio: "15+ years of clinical experience, passionate about accessible healthcare",
            social: { linkedin: "#", twitter: "#", email: "emily@telehealthpro.com" }
        },
        {
            name: "Michael Chen",
            role: "Chief Technology Officer",
            specialty: "Healthcare Technology",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Former healthcare IT executive, expert in HIPAA-compliant systems",
            social: { linkedin: "#", twitter: "#", email: "michael@telehealthpro.com" }
        },
        {
            name: "Dr. Sarah Rodriguez",
            role: "Head of Patient Experience",
            specialty: "Family Medicine",
            image: "https://images.unsplash.com/photo-1494790108755-2616b2e7976a?w=300&h=300&fit=crop&crop=face",
            bio: "Dedicated to creating compassionate, patient-centered care experiences",
            social: { linkedin: "#", twitter: "#", email: "sarah@telehealthpro.com" }
        },
        {
            name: "David Thompson",
            role: "Chief Operations Officer",
            specialty: "Healthcare Operations",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
            bio: "Operations expert focused on scaling quality healthcare delivery",
            social: { linkedin: "#", twitter: "#", email: "david@telehealthpro.com" }
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Meet Our Leadership Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our experienced team combines medical expertise with technology innovation
                        to deliver exceptional healthcare experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="p-6 text-center">
                                <div className="relative mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform duration-200"
                                    />
                                    <div className="absolute inset-0 bg-accent bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                </div>

                                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-accent font-medium mb-1">{member.role}</p>
                                <p className="text-gray-500 text-sm mb-4">{member.specialty}</p>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {member.bio}
                                </p>

                                <div className="flex justify-center space-x-3">
                                    <a
                                        href={member.social.linkedin}
                                        className="p-2 bg-gray-100 rounded-lg hover:bg-accent hover:text-white transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="p-2 bg-gray-100 rounded-lg hover:bg-accent hover:text-white transition-colors"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={`mailto:${member.social.email}`}
                                        className="p-2 bg-gray-100 rounded-lg hover:bg-accent hover:text-white transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team