import React from 'react';

interface PrivacyPolicyProps {
  onNavigate: (page: string, section?: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24">
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-400 mt-4">Last updated: December 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            
            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">1. Introduction</h2>
              <p>
                Smartech Facilities Management Ltd ("Smartech FM", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
              <p className="mb-2"><strong className="text-charcoal">Personal Data:</strong> Name, email address, phone number, company name, and other contact details you provide when filling out forms on our website or contacting us directly.</p>
              <p className="mb-2"><strong className="text-charcoal">Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</p>
              <p><strong className="text-charcoal">Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website. See our Cookie Policy for more details.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To respond to your enquiries and provide customer support</li>
                <li>To send you marketing and promotional communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-charcoal">Service Providers:</strong> With third-party vendors who assist us in operating our website and conducting our business</li>
                <li><strong className="text-charcoal">Legal Requirements:</strong> If required by law or in response to valid requests by public authorities</li>
                <li><strong className="text-charcoal">Business Transfers:</strong> In connection with any merger, sale, or acquisition of all or part of our business</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organisational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">6. Your Rights</h2>
              <p className="mb-4">Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure ("right to be forgotten")</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us using the details below.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">9. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <p><strong className="text-charcoal">Smartech Facilities Management Ltd</strong></p>
              <p>Email: hello@smartechfm.com</p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-primary font-medium hover:underline"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};