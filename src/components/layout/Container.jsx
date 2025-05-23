import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto px-4 sm:px-6 md:px-8 max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;