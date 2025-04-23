
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service - Klyfton Solutions";
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
            <h1 className="heading-lg mb-8 text-center">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-klyfton-gray mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">1. Agreement to Terms</h2>
              <p className="mb-6">These Terms of Service constitute a legally binding agreement made between you and Klyfton Solutions ("we," "us," or "our"), concerning your access to and use of our website and services. You agree that by accessing our website and services, you have read, understood, and agree to be bound by all of these Terms of Service.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">2. Services</h2>
              <p className="mb-6">Klyfton Solutions provides IT consulting services including privacy solutions, DevOps solutions, office setup, cloud management, IT infrastructure, and cybersecurity. The services may be modified, updated, or discontinued at our sole discretion without notice at any time.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">3. Intellectual Property Rights</h2>
              <p className="mb-4">Unless otherwise indicated, the website and all its content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Klyfton Solutions, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              <p className="mb-6">You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">4. User Representations</h2>
              <p className="mb-6">By using our services, you represent and warrant that (1) you have the legal capacity to enter into these Terms of Service; (2) you will not use our services for any illegal or unauthorized purpose; and (3) your use of our services will not violate any applicable law or regulation.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">5. Prohibited Activities</h2>
              <p className="mb-4">You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
              <p className="mb-6">As a user of the website, you agree not to engage in activities that could harm, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of the website.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">6. Limitation of Liability</h2>
              <p className="mb-6">In no event will Klyfton Solutions, or its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services or any content thereon.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">7. Governing Law</h2>
              <p className="mb-6">These Terms shall be governed by and defined following the laws of the State of California and yourself irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">8. Changes to Terms</h2>
              <p className="mb-6">We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date. Any changes or modifications will be effective immediately upon posting the updated Terms of Service, and you waive the right to receive specific notice of each such change or modification.</p>
              
              <h2 className="text-2xl font-bold text-klyfton-slate mb-4">9. Contact Us</h2>
              <p className="mb-6">If you have questions or comments about these Terms of Service, please contact us at:</p>
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

export default Terms;
