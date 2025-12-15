import React from 'react';

interface CookiePolicyProps {
  onNavigate: (page: string, section?: string) => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24">
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="text-gray-400 mt-4">Last updated: December 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            
            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">Smartech FM uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-charcoal">Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
                <li><strong className="text-charcoal">Analytics Cookies:</strong> Help us understand how visitors interact with our website, allowing us to improve our services.</li>
                <li><strong className="text-charcoal">Functional Cookies:</strong> Remember your preferences and settings to enhance your experience.</li>
                <li><strong className="text-charcoal">Marketing Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">3. Types of Cookies We Use</h2>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-lightgray">
                      <th className="border border-gray-200 px-4 py-3 text-left text-charcoal font-bold">Cookie Name</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-charcoal font-bold">Purpose</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-charcoal font-bold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">_ga</td>
                      <td className="border border-gray-200 px-4 py-3">Google Analytics - distinguishes users</td>
                      <td className="border border-gray-200 px-4 py-3">2 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">_gid</td>
                      <td className="border border-gray-200 px-4 py-3">Google Analytics - distinguishes users</td>
                      <td className="border border-gray-200 px-4 py-3">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">cookie_consent</td>
                      <td className="border border-gray-200 px-4 py-3">Stores your cookie preferences</td>
                      <td className="border border-gray-200 px-4 py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">4. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We do not control the use of these cookies. Third parties that may set cookies include Google Analytics, LinkedIn, and other marketing platforms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">5. Managing Cookies</h2>
              <p className="mb-4">You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-charcoal">Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings. Check your browser's help section for instructions.</li>
                <li><strong className="text-charcoal">Our Cookie Banner:</strong> When you first visit our website, you can choose which types of cookies to accept.</li>
                <li><strong className="text-charcoal">Opt-Out Links:</strong> For Google Analytics, you can install the Google Analytics Opt-out Browser Add-on.</li>
              </ul>
              <p className="mt-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">6. Your Consent</h2>
              <p>
                By continuing to use our website, you consent to the use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or using our cookie management tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. Please check this page periodically for updates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">8. Contact Us</h2>
              <p className="mb-4">If you have any questions about our use of cookies, please contact us:</p>
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