import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-charcoal text-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-gray-400 leading-relaxed">
                Discuss your facility management needs with our team of experts. We provide tailored audits and proposal within 48 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-medium">+44 (0) 20 7123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-medium">hello@smartechfm.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Headquarters</p>
                  <p className="text-lg font-medium">One Canada Square, Canary Wharf<br/>London, E14 5AB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white text-charcoal p-10 lg:p-12 shadow-float">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                  <input type="email" className="w-full border-b-2 border-gray-200 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="Your Email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Company</label>
                <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="Company Name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea rows={4} className="w-full border-b-2 border-gray-200 py-3 focus:border-primary focus:outline-none transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>

              <div className="pt-4">
                <Button className="w-full md:w-auto">Submit Inquiry</Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
