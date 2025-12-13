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
                <p className="font-heading font-bold text-xl mb-2">"We are here to disrupt the normal."</p>
                <p className="text-gray-400 text-sm">Providing transparency and accountability to all aspects of FM.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-6">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary"></span>
              Industry Evolution
            </h4>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-8 leading-tight">
              Automation is Leading the Way. <br/>
              <span className="text-gray-400">Are you keeping up?</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                The facility management industry is changing rapidly. With budgets tighter than ever and technology advancing at breakneck speed, the traditional "fix-it-when-it-breaks" model is obsolete.
              </p>
              <p>
                Our approach is driven by <strong>automation and AI</strong>. We deliver optimized solutions designed to drastically minimize your Operating Expenditure (OpEx) while providing the data-driven foresight needed to plan for risk and Capital Expenditure (CapEx). <span className="text-charcoal font-semibold">We ensure no surprises arise.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <TrendingDown size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Minimize OpEx</h4>
                  <p className="text-sm text-gray-500">Streamlined workflows that reduce waste.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Risk Planning</h4>
                  <p className="text-sm text-gray-500">Predictive modeling for capital assets.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">AI-Led Strategy</h4>
                  <p className="text-sm text-gray-500">Data, not guesswork, drives decisions.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-lightgray p-3 text-primary">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Total Transparency</h4>
                  <p className="text-sm text-gray-500">Full accountability in everyday tasks.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 mb-6 italic">
                "We are industry experts with over 40 years of experience working for private, public, and global players. We don't just manage facilities; we revolutionize them."
              </p>
              <div className="flex items-center gap-12">
                <div>
                  <span className="block text-5xl font-bold text-primary mb-1">40+</span>
                  <span className="text-xs text-charcoal font-bold uppercase tracking-wider">Years Experience</span>
                </div>
                <div>
                  <span className="block text-5xl font-bold text-primary mb-1">Global</span>
                  <span className="text-xs text-charcoal font-bold uppercase tracking-wider">Reach & Impact</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
