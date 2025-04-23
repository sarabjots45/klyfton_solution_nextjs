
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - Klyfton Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-klyfton-blue-light opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-klyfton-teal opacity-10 rounded-full blur-3xl"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 animate-fade-in">
            <div className="inline-block bg-klyfton-blue bg-opacity-10 rounded-full px-4 py-1 mb-4">
              <p className="text-klyfton-blue-dark font-medium text-sm">Our Services</p>
            </div>
            <h1 className="heading-lg mb-6">Comprehensive IT Consulting Services</h1>
            <p className="text-klyfton-gray text-lg max-w-2xl mx-auto">
              At Klyfton Solutions, we provide a wide range of IT services designed to enhance your business operations while maintaining the highest standards of privacy and security.
            </p>
          </div>
        </section>
        
        <ServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
