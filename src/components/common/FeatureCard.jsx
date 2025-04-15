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
    <Card className={`flex flex-col h-full ${fullWidth ? 'col-span-full' : ''} ${className} group`}>
      <div className="mb-4">
        {Icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-cyan-500/10 text-cyan-300 mb-4">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-cyan-300">{title}</h3>
      </div>
      <p className="text-text-secondary flex-grow">{description}</p>
      <div className="absolute inset-x-0 bottom-0">
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
    </Card>
  );
};

export default FeatureCard;