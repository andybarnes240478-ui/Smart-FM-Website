import React from 'react';
import { Button } from './Button';

const services = [
  {
    title: "Integrated Management",
    description: "Holistic oversight of building operations and tenant services.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Technical Maintenance",
    description: "Proactive electrical, mechanical, and structural engineering.",
    image: "https://images.unsplash.com/photo-1581094794329-cd56b5095bb4?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Security Solutions",
    description: "Advanced surveillance and access control for total peace of mind.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Energy Efficiency",
    description: "Smart auditing and optimization to reduce carbon footprint.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Cleaning Services",
    description: "High-standard hygiene maintenance for corporate environments.",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => (
  <div className="group relative h-full min-h-[20rem] overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent transition-opacity duration-500"></div>
    </div>
    
    <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
      <h3 className="text-2xl font-heading font-bold mb-3">{title}</h3>
      <div className="h-1 w-12 bg-primary mb-3"></div>
      <p className="text-gray-200 text-sm font-medium leading-relaxed max-w-xs">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-lightgray p-12 md:p-16 flex flex-col justify-center min-h-[20rem]">
          <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">
            Our Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            From technical maintenance to soft services, we provide a complete suite of facility management solutions tailored to the unique demands of your infrastructure.
          </p>
          <Button 
            variant="outline" 
            className="self-start text-charcoal border-charcoal hover:bg-charcoal hover:text-white"
            onClick={() => onNavigate('services')}
          >
            View All Services
          </Button>
        </div>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
