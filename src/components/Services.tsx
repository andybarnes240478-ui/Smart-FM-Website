import React from 'react';
import { Button } from './Button';
import { Wrench, ClipboardCheck, ShieldCheck, Calculator, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Field Operations",
    description: "Work order management, mobile tech enablement, and SLA tracking — powered by Smartech Field Services."
  },
  {
    icon: ClipboardCheck,
    title: "Planned Maintenance",
    description: "Inspection scheduling, PPM workflows, and defect capture — powered by Smartech Inspection."
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Evidence",
    description: "Certificate tracking, audit trails, and statutory documentation — powered by Smartech Evidence."
  },
  {
    icon: Calculator,
    title: "Quoting & Proposals",
    description: "Rate card management, margin analysis, and professional proposal generation — powered by Smartech Quoter."
  },
  {
    icon: TrendingUp,
    title: "Asset Intelligence",
    description: "Condition grading, lifecycle forecasting, and capital planning — powered by Smartech Lifecycle."
  },
  {
    icon: Users,
    title: "Delivered Outcomes",
    description: "Need hands-on support? We deliver surveys, audits, and data collection using our own tools — so you see the value before you buy."
  },
];

interface ServiceCardProps {
  icon: React.FC<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group relative h-full min-h-[20rem] overflow-hidden bg-charcoal">
    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/95 to-charcoal/80 transition-opacity duration-500"></div>
    
    <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
      <Icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
      <h3 className="text-2xl font-heading font-bold mb-3">{title}</h3>
      <div className="h-1 w-12 bg-primary mb-3"></div>
      <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  </div>
);

interface ServicesProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="bg-lightgray p-12 md:p-16 flex flex-col justify-center min-h-[20rem]">
          <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">
            Our Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We don't just build FM tools — we use them. Our products power real-world delivery, from asset surveys to compliance audits.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you need software to run your own operations, or want us to deliver the outcomes directly, we've got you covered.
          </p>
          <Button 
            variant="outline" 
            className="self-start text-charcoal border-charcoal hover:bg-charcoal hover:text-white"
            onClick={() => onNavigate('products')}
          >
            View All Products
          </Button>
        </div>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};