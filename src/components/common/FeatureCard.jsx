import React from 'react';
import Card from './Card';

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className = '',
  fullWidth = false
}) => {
  return (
    <Card className={`flex flex-col h-full ${fullWidth ? 'col-span-full' : ''} ${className}`}>
      <div className="mb-4">
        {Icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-amber/10 text-amber mb-4">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-amber">{title}</h3>
      </div>
      <p className="text-text-secondary flex-grow">{description}</p>
    </Card>
  );
};

export default FeatureCard;