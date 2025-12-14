import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Built Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
            Inspection → Evidence → Quote → Work Orders
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
            Turn Inspections into <br />
            <span className="text-primary">Delivered Work</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Smartech is a facilities management platform that connects inspections, compliance evidence,
            defect control, quoting, and work delivery — so nothing gets missed and every issue gets closed.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            {['Inspect', 'Evidence', 'Defects', 'Approve', 'Deliver', 'Close'].map(step => (
              <span
                key={step}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5"
              >
                {step}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a Demo
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="ghost"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
