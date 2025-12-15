import React from 'react';

interface TermsOfServiceProps {
  onNavigate: (page: string, section?: string) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24">
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-gray-400 mt-4">Last updated: December 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            
            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Smartech FM website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">2. Description of Services</h2>
              <p>
                Smartech FM provides facility management software solutions and related services, including but not limited to field services management, inspection tools, compliance evidence management, quoting systems, and asset lifecycle planning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">3. User Accounts</h2>
              <p className="mb-4">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorised use of your account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">4. Acceptable Use</h2>
              <p className="mb-4">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any malicious code or interfere with the operation of our services</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Use our services for any unlawful or fraudulent purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our website and services — including but not limited to text, graphics, logos, icons, images, software, and the overall design — are owned by Smartech FM and are protected by UK and international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">6. Subscription and Payment</h2>
              <p className="mb-4">For paid services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to modify pricing with 30 days' notice</li>
                <li>Failure to pay may result in suspension or termination of services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Smartech FM shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">8. Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">12. Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
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