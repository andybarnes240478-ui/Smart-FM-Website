import React from 'react';
import { Database, ClipboardCheck, BarChart3, LineChart, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

const detailedServices = [
  {
    icon: Database,
    title: "Asset Collection & Validation",
    tagline: "The Foundation of Truth",
    poweredBy: "Delivered using Smartech Inspection and Evidence.",
    description: "We establish a pristine data baseline by physically verifying and tagging every maintainable asset in your portfolio. This eliminates 'ghost assets' and ensures your facility management strategy is built on 100% accurate data.",
    benefits: [
      "Regulatory compliance assurance",
      "Accurate depreciation schedules",
      "Foundation for CAFM/CMMS systems",
      "Reduced procurement waste"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Asset Condition Surveys",
    tagline: "Proactive Risk Mitigation",
    poweredBy: "Delivered using Smartech Inspection. Output available in your own instance.",
    description: "Our technical experts conduct deep-dive assessments of your MEPH (Mechanical, Electrical, Plumbing) fabric. We grade equipment based on physical condition and operational risk to identify issues before they become critical failures.",
    benefits: [
      "Identify critical failure points",
      "Reduce reactive maintenance costs",
      "Prioritize health & safety risks",
      "Extend asset operational lifespan"
    ]
  },
  {
    icon: BarChart3,
    title: "Asset Lifecycle Reporting",
    tagline: "Predictive Intelligence",
    poweredBy: "Delivered using Smartech Lifecycle. Data yours to keep.",
    description: "We move beyond simple maintenance to predictive lifecycle modeling. By analyzing degradation curves and usage patterns, we forecast exactly when assets will require refurbishment or replacement, optimizing your Total Cost of Ownership.",
    benefits: [
      "Data-driven decision making",
      "Optimized replacement timing",
      "Transparent ROI analysis",
      "Lower Total Cost of Ownership (TCO)"
    ]
  },
  {
    icon: LineChart,
    title: "Capital Planning (CapEx)",
    tagline: "Strategic Financial Forecasting",
    poweredBy: "Delivered using Smartech Lifecycle. Scenario modelling included.",
    description: "Align your asset needs with your financial reality. We provide detailed 5, 10, and 15-year expenditure plans that allow you to smooth out budget spikes and justify investment requests with irrefutable engineering data.",
    benefits: [
      "Eliminate budget shocks",
      "Strategic investment alignment",
      "Defensible funding requests",
      "Long-term fiscal stability"
    ]
  }
];

interface ServicesPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      <section className="bg-charcoal text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-charcoal to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block border border-primary/50 bg-primary/10 backdrop-blur-sm px-4 py-2 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Smartech-Delivered Services
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-8">
              Strategic Asset <br/><span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              We don't just build the tools — we use them. Every service we deliver is powered by Smartech software, so you see the value before you commit to the platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightgray">
        <div className="container mx-auto px-6 space-y-12">
          
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white shadow-xl flex flex-col lg:flex-row items-stretch overflow-hidden group">
              
              <div className="lg:w-2/3 p-10 lg:p-14 relative">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-lightgray text-primary">
                        <service.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{service.tagline}</h3>
                    </div>

                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">{service.title}</h2>
                    
                    <p className="text-primary text-sm font-semibold mb-6 italic">
                      {service.poweredBy}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-8 mt-4">
                    <h4 className="text-xs font-bold text-charcoal uppercase tracking-widest mb-6">Key Business Benefits</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 bg-charcoal text-white p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between group-hover:bg-darkblue transition-colors duration-500">
                 <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
                 
                 <div className="relative z-10">
                   <span className="block text-7xl font-heading font-bold text-white/10 mb-8">0{index + 1}</span>
                   <h3 className="text-xl font-bold mb-4">Why this matters</h3>
                   <p className="text-gray-400 text-sm leading-relaxed border-l border-primary/30 pl-4">
                     In an era of tightening budgets and higher compliance standards, {service.title.toLowerCase()} provides the evidentiary basis for every pound spent on your estate.
                   </p>
                 </div>

                 <div className="relative z-10 pt-8 flex justify-end">
                   <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/50 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                   </div>
                 </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">Ready to see the tools in action?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Schedule a consultation to discuss your requirements — or let us deliver a pilot project so you can experience the platform firsthand.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => onNavigate('home', 'contact')}>
              Request a Demo
            </Button>
            <Button variant="outline" onClick={() => onNavigate('home', 'contact')}>
              Discuss a Pilot Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};