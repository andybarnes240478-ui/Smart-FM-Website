import React from 'react';
import { Building, Truck, Activity, Server, Landmark, ShoppingBag, Coffee, Briefcase } from 'lucide-react';

const sectors = [
  {
    icon: Building,
    title: "Commercial Real Estate",
    description: "Optimizing asset value and tenant experience in high-performance office environments."
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Enhancing customer environments and maintaining uptime for high-footfall retail destinations."
  },
  {
    icon: Coffee,
    title: "Leisure",
    description: "Supporting hospitality and leisure facilities with immaculate presentation and operational reliability."
  },
  {
    icon: Briefcase,
    title: "Financial Services",
    description: "Secure, high-availability facility management for banking institutions and corporate headquarters."
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Ensuring 24/7 operational continuity for critical supply chain and distribution infrastructure."
  },
  {
    icon: Activity,
    title: "Healthcare",
    description: "Maintaining sterile, compliant, and critical-power environments for patient care facilities."
  },
  {
    icon: Server,
    title: "Tech & Data Centres",
    description: "Zero-downtime maintenance strategies for mission-critical digital infrastructure and server farms."
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description: "Delivering value for money, transparency, and statutory compliance across government estates."
  }
];

export const Sectors: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-charcoal">
       <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-charcoal/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal"></div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 skew-x-12 hidden lg:block z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Industries</h4>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              Specialized Solutions <br/>for Every Sector.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed border-l-2 border-primary pl-6">
            Our tools and services are built to handle the regulatory, operational, and commercial demands of your industry — wherever you operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {sectors.map((sector, idx) => (
            <div 
              key={idx} 
              className="group relative bg-charcoal/40 backdrop-blur-sm p-8 hover:bg-primary/90 transition-all duration-300 cursor-default flex flex-col h-full overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}>
              </div>

              <div className="mb-auto relative z-10">
                <sector.icon className="w-10 h-10 text-gray-500 group-hover:text-white mb-8 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold mb-4">{sector.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 opacity-80 group-hover:opacity-100 group-hover:text-white/90 transition-all">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};