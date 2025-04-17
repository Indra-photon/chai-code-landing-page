// import React from 'react';

// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   className = '',
//   onClick,
//   type = 'button',
//   disabled = false,
//   ...props 
// }) => {
//   const baseClasses = 'inline-flex items-center justify-center px-8 py-2 font-semibold rounded-3xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
//   const variantClasses = {
//     primary: 'bg-amber text-black hover:brightness-110 hover:scale-105 focus:ring-amber',
//     secondary: 'text-white bg-slate-700 hover:bg-amber/10 px-8 hover:text-cyan-300',
//     outline: 'border border-subtle text-white hover:border-amber hover:text-amber focus:ring-amber',
//   };

//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variantClasses[variant]} ${className}`}
//       onClick={onClick}
//       disabled={disabled}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-2 font-semibold rounded-3xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-amber text-black hover:brightness-110 hover:scale-105 focus:ring-amber',
    secondary: 'px-8 py-3 bg-gradient-to-r from-cyan-200 to-cyan-600 hover:bg-cyan-500/100 text-black font-semibold rounded-full transition',
    outline: 'border border-subtle text-white hover:border-cyan-500 hover:text-cyan-300 focus:ring-cyan-500',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;