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
  <div className="bg-charcoal p-8 flex flex-col h-full">
    <Icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
    <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
    <div className="h-1 w-12 bg-primary mb-4"></div>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      {description}
    </p>
  </div>
);

interface ServicesProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Left intro panel - spans 1 column, 2 rows on large screens */}
        <div className="bg-lightgray p-12 md:p-16 flex flex-col justify-center lg:row-span-2">
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
        
        {/* Service cards - 3 columns, 2 rows */}
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};