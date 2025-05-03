import React from 'react';

const Card = ({ children, className = '', onClick, hover = true }) => {
  return (
    <div 
      className={`bg-slate-800 border border-slate-700 rounded-xl p-6 
      relative overflow-hidden
      ${hover ? 'transition-all duration-300 group' : ''}
      ${hover ? 'hover:shadow-lg' : ''}
      ${onClick ? 'cursor-pointer' : ''}
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-cyan-500/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300
      ${className}`}
      onClick={onClick}
    >
      <div className="relative z-10">
        {children}
      </div>

      {hover && (
        <div className="absolute inset-x-0 bottom-0">
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </div>
      )}
    </div>
  );
};

export default Card;