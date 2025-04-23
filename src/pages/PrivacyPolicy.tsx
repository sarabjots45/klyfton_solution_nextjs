
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - Klyfton Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center text-klyfton-blue hover:text-klyfton-blue-dark mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg mb-8 text-center">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-klyfton-gray mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">1. Introduction</h2>
              <p className="mb-6">At Klyfton Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect via the website includes:</p>
              <h3 className="text-xl font-bold text-klyfton-slate mb-3">Personal Data</h3>
              <p className="mb-4">Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you choose to participate in various activities related to the website, such as online chat, submission of contact forms, or posting messages in comment sections.</p>
              <h3 className="text-xl font-bold text-klyfton-slate mb-3">Derivative Data</h3>
              <p className="mb-6">Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">3. Use of Your Information</h2>
              <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Create and manage your account.</li>
                <li className="mb-2">Email you regarding your account or services.</li>
                <li className="mb-2">Fulfill and manage purchases and other transactions related to the website and our services.</li>
                <li className="mb-2">Process payments and refunds.</li>
                <li className="mb-2">Respond to your inquiries and customer service requests.</li>
                <li className="mb-2">Send you technical notices, updates, security alerts, and support messages.</li>
                <li className="mb-2">Assist law enforcement when we have a good-faith belief that it is reasonably necessary to do so.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">4. Disclosure of Your Information</h2>
              <p className="mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              <h3 className="text-xl font-bold text-klyfton-slate mb-3">By Law or to Protect Rights</h3>
              <p className="mb-6">If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">5. Security of Your Information</h2>
              <p className="mb-6">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">6. Contact Us</h2>
              <p className="mb-6">If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <address className="mb-6 not-italic">
                Klyfton Solutions<br />
                123 Privacy Lane<br />
                Tech District<br />
                San Francisco, CA 94105<br />
                <a href="tel:+14155551234" className="text-klyfton-blue">+1 (415) 555-1234</a><br />
                <a href="mailto:info@klyfton.com" className="text-klyfton-blue">info@klyfton.com</a>
              </address>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
