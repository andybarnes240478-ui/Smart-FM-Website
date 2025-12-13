import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-white text-sm font-semibold tracking-widest uppercase">
            Intelligent Facility Management
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
            Precision in <br/>
            <span className="text-primary">Every Detail</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            We deliver integrated solutions that optimize performance, reduce costs, and enhance the lifecycle of your most valuable assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a Demo
              <ArrowRight size={20} />
            </Button>
            <Button variant="ghost" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
};
