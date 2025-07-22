import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Effective Date: July 22, 2025</p>
        
        <div className="prose max-w-none space-y-8 text-gray-700">
          <p>
            We at Henil Construction ("we", "our", or "us") value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.henilconstruction.com.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, etc., when you submit forms or contact us.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and similar analytics.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> To improve user experience and analyze website performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We may use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Respond to your inquiries and communicate with you</li>
              <li>Improve website functionality and user experience</li>
              <li>Send you updates or promotional materials (if you opt-in)</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Service providers who help us operate the website (e.g., hosting, analytics)</li>
              <li>Legal authorities, if required by law or to protect our rights</li>
              <li>Third parties, only with your consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Cookies and Tracking</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Remember your preferences</li>
              <li>Analyze website traffic</li>
              <li>Improve website performance</li>
            </ul>
            <p className="mt-2">You can modify your browser settings to disable cookies.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p>We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Third-Party Links</h2>
            <p>Our website may contain links to other websites. We are not responsible for their content or privacy practices. Please review their privacy policies separately.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access, update, or delete your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">To exercise your rights, please contact us at <a href="mailto:sanjay@henilconstruction.com" className="text-primary hover:underline">sanjay@henilconstruction.com</a>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
            <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>📧 Email: <a href="mailto:sanjay@henilconstruction.com" className="text-primary hover:underline">sanjay@henilconstruction.com</a></li>
              <li>🌐 Website: <a href="https://www.henilconstruction.com" className="text-primary hover:underline">www.henilconstruction.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
