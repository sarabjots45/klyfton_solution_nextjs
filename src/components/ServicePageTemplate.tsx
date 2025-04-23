
import { ReactNode, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  children: ReactNode;
}

const ServicePageTemplate = ({ title, subtitle, icon, children }: ServicePageTemplateProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} - Klyfton Solutions`;
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-klyfton-blue-light opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-klyfton-teal opacity-10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-8">
            <Link to="/services" className="inline-flex items-center text-klyfton-blue hover:text-klyfton-blue-dark mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Services</span>
            </Link>
            
            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="text-klyfton-blue-light bg-klyfton-blue-light bg-opacity-10 rounded-lg p-5 inline-block">
                  {icon}
                </div>
              </div>
              <h1 className="heading-lg mb-6">{title}</h1>
              <p className="text-klyfton-gray text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>
          </div>
          
          {children}
        </section>
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
