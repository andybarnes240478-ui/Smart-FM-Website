import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-bold transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary border border-transparent shadow-sm hover:shadow-md",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
    white: "bg-white text-charcoal hover:bg-gray-50 border border-transparent shadow-sm",
    ghost: "bg-transparent text-white border border-white hover:bg-white hover:text-charcoal",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
