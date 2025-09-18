import React from 'react';
import type { Feature } from './types';
import Card from '@/ui/Card';


const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-8 text-center">
        <div className="bg-light-blue w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
