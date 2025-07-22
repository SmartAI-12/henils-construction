import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Effective Date: July 22, 2025</p>
        
        <div className="prose max-w-none space-y-8 text-gray-700">
          <p>
            Welcome to Henil Construction! These Terms of Service ("Terms") govern your use of our website located at www.henilconstruction.com (the "Site") operated by Henil Construction ("we", "our", or "us").
          </p>
          <p>
            By accessing or using our Site, you agree to be bound by these Terms. If you do not agree, please do not use our website.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Use the Site in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to the Site or servers</li>
              <li>Introduce any viruses or harmful code</li>
              <li>Use the Site to send spam or fraudulent content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Intellectual Property</h2>
            <p>All content on the Site — including text, graphics, logos, images, and software — is the property of Henil Construction or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
            <p className="mt-2">You may not copy, reproduce, distribute, or create derivative works without our written permission.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Content</h2>
            <p>If you submit or post any content to our Site (e.g., comments, reviews, contact forms), you:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and display that content</li>
              <li>Represent that your content does not violate any rights of others or any laws</li>
            </ul>
            <p className="mt-2">We reserve the right to remove any user content at our discretion.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Links to Other Websites</h2>
            <p>Our Site may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. Use them at your own risk.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Disclaimers</h2>
            <p>The Site is provided on an "as is" and "as available" basis. We do not guarantee that the Site will be uninterrupted, secure, or error-free. We disclaim all warranties, express or implied.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Henil Construction shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Termination</h2>
            <p>We reserve the right to terminate or suspend access to our Site at any time, without notice, for any reason, including violation of these Terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Changes will be posted on this page, and your continued use of the Site after such changes constitutes acceptance of the new Terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. India,Maharashtra</h2>
            <p>These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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

export default TermsOfService;
