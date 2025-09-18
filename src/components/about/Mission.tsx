import React from 'react'
import { Target, Eye, Heart } from "lucide-react";

interface MissionProps extends React.HTMLAttributes<HTMLDivElement> {

}


const Mission: React.FC<MissionProps> = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story & Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020 by a team of healthcare professionals and technology experts, 
              TeleHealth Pro emerged from a simple yet powerful vision: to make quality 
              healthcare accessible to everyone, regardless of location or circumstances.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We witnessed firsthand the barriers that prevent people from receiving timely 
              medical care—distance, mobility issues, busy schedules, and limited access to 
              specialists. Our platform was designed to eliminate these obstacles while 
              maintaining the highest standards of medical care.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize healthcare by providing convenient, high-quality medical 
                    services through innovative telemedicine technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where every person has instant access to exceptional healthcare, 
                    creating healthier communities and improved quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-ce1b2e84fdd3?w=600&h=400&fit=crop" 
                alt="Healthcare team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Trusted by 10,000+</p>
                    <p className="text-gray-600 text-sm">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission