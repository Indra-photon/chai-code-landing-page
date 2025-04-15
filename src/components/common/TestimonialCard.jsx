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
    <Card className={`flex flex-col h-full ${className} group`}>
      <div className="flex items-start mb-4">
        <div className="mr-4 flex-shrink-0">
          {avatar ? (
            <img 
              src={avatar} 
              alt={`${name}'s avatar`} 
              className="w-12 h-12 rounded-full object-cover border border-cyan-500/30"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-semibold border border-cyan-500/30">
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
      
      <div className="absolute inset-x-0 bottom-0">
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
    </Card>
  );
};

export default TestimonialCard;