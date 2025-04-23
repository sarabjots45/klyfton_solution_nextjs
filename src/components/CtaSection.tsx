
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-blue opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="glass-card p-8 md:p-12 lg:p-16 max-w-5xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-klyfton-gray max-w-3xl mx-auto mb-8">
            Take the first step toward privacy-driven, efficient IT solutions tailored to your business needs. Our experts are ready to help you navigate the complex world of modern technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
