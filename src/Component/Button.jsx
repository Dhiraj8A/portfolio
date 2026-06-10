import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  className = '', 
  href,
  download
}) => {
  // Base styling for consistency across all buttons
  const baseStyles = "px-5 py-2.5 rounded font-mono text-sm tracking-wide transition-all duration-200 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-400/50";
  
  // Style configurations
  const variants = {
    primary: "bg-emerald-400 text-slate-900 font-bold hover:bg-emerald-500 shadow-md shadow-emerald-400/10",
    outline: "border border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-400/10",
    secondary: "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // If href is passed, render as an anchor link instead of a button
  if (href) {
    return (
      <a 
        href={href} 
        download={download}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;