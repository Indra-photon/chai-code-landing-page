import React from 'react';

const NavLink = ({ href, children, isActive = false, className = '' }) => {
  return (
    <a
      href={href}
      className={`text-base font-medium transition-colors duration-200 ease-in-out px-3 py-2 
      ${isActive 
        ? 'text-cyan-300' 
        : 'text-white hover:text-cyan-300'} 
      ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;