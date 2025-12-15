import React from 'react';
import { Cpu, TrendingDown, Eye, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center relative">
          
          <div className="w-full lg:w-1/2">
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Transformation in FM" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 bg-charcoal text-white p-6 md:p-8 max-w-sm backdrop-blur-md bg-opacity-95">
                <p className="font-heading font-bold text-xl mb-2">"Built by FM professionals."</p>
                <p className="text-gray-400 text-sm">The tools we wished we'd had — now yours.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-6">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary"></span>
              About Smartech
            </h4>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-8 leading-tight">
              FM Software That <br/>
              <span className="text-gray-400">Actually Works.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Smartech FM was founded on a simple frustration: too much FM software is built by people who've never run an FM operation. The result? Bloated platforms, enterprise pricing, and tools that don't fit how real teams actually work.
              </p>
              <p>
                We're different. Smartech was built from inside the industry — by people who've managed facilities, led contracts, and delivered services across complex estates. <span className="text-charcoal font-semibold">We built the tools we wished we'd had.</span>
              </p>
              <p>
                Today, Smartech is a small team by design. That means fast decisions, direct access, and products shaped by people who understand the pressures you're under — not a sales team reading from a script.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <TrendingDown size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Practical Pricing</h4>
                  <p className="text-sm text-gray-500">Enterprise capability without the enterprise cost.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Compliance Built-In</h4>
                  <p className="text-sm text-gray-500">Evidence, audits, and the golden thread — sorted.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Modular by Design</h4>
                  <p className="text-sm text-gray-500">Start with what you need, expand when ready.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Delivery Optional</h4>
                  <p className="text-sm text-gray-500">Use our tools yourself, or let us deliver for you.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 italic">
                FM software built by FM professionals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};