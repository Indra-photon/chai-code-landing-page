import React from 'react';

const Card = ({ children, className = '', onClick, hover = true }) => {
  return (
    <div 
      className={`bg-navy-light border border-subtle rounded-lg p-6 
      ${hover ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-lg' : ''}
      ${onClick ? 'cursor-pointer' : ''}
      ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;