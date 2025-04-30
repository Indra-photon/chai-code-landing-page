import React from 'react';

const Card = ({ children, className = '', onClick, hover = true }) => {
  return (
    <div 
      className={`bg-slate-800 border border-slate-700 rounded-xl p-1
      ${hover ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-lg relative overflow-hidden' : ''}
      ${onClick ? 'cursor-pointer' : ''}
      ${className}`}
      onClick={onClick}
    >
      {hover && (
        <div className="absolute inset-x-0 bottom-0">
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;