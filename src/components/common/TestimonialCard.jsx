import React from 'react';
import Card from './Card';

const TestimonialCard = ({ 
  name, 
  avatar, 
  text, 
  role,
  className = '' 
}) => {
  return (
    <Card className={`flex flex-col h-full ${className}`}>
      <div className="flex items-start mb-4">
        <div className="mr-4 flex-shrink-0">
          {avatar ? (
            <img 
              src={avatar} 
              alt={`${name}'s avatar`} 
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-accent flex items-center justify-center text-white font-semibold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          {role && <p className="text-text-secondary text-sm">{role}</p>}
        </div>
      </div>
      
      <div className="flex-grow">
        <blockquote className="text-white">
          <p className="italic text-text-secondary">"{text}"</p>
        </blockquote>
      </div>
    </Card>
  );
};

export default TestimonialCard;