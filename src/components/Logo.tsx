import React from 'react';

interface LogoProps {
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ lightMode = false }) => {
  return (
    <div className="flex items-center gap-3 select-none group">
      <div className={`relative w-10 h-10 flex items-center justify-center transition-all duration-300 ${lightMode ? 'bg-white' : 'bg-primary'}`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-6 h-6 ${lightMode ? 'text-charcoal' : 'text-white'}`}
        >
          <path d="M4 4H12V12H4V4Z" fill="currentColor" />
          <path d="M14 4H20V10H14V4Z" fill="currentColor" fillOpacity="0.7" />
          <path d="M14 12H20V20H14V12Z" fill="currentColor" />
          <path d="M4 14H12V20H4V14Z" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className={`font-heading font-bold text-xl leading-none tracking-tight uppercase ${lightMode ? 'text-white' : 'text-charcoal'}`}>
          Smartech FM
        </span>
        <span className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase ${lightMode ? 'text-gray-300' : 'text-primary'}`}>
          Intelligent Solutions
        </span>
      </div>
    </div>
  );
};
