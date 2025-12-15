import React from 'react';

interface LogoProps {
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ lightMode = false }) => {
  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Green square with white squares inside */}
      <div className="relative w-10 h-10 bg-primary flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-3 bg-white"></div>
          <div className="w-3 h-3 bg-white/70"></div>
          <div className="w-3 h-3 bg-white/40"></div>
          <div className="w-3 h-3 bg-white"></div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className={`font-heading font-bold text-xl leading-none tracking-tight uppercase transition-colors duration-300 ${
          lightMode ? 'text-white' : 'text-charcoal'
        }`}>
          Smartech FM
        </span>
        <span className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
          lightMode ? 'text-white/60' : 'text-primary'
        }`}>
          Intelligent Solutions
        </span>
      </div>
    </div>
  );
};