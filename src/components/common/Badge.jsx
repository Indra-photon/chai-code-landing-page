import React from 'react';

const Badge = ({ text, className = '' }) => {
  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber text-black ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;