
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    "Privacy-focused approach to all solutions",
    "Expert team with certified professionals",
    "Cutting-edge technology implementation",
    "Tailored solutions for each client",
    "24/7 technical support and monitoring",
    "Continuous improvement methodology"
  ];

  return (
    <section className="section bg-gray-50 relative overflow-hidden" id="about">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-block bg-klyfton-blue bg-opacity-10 rounded-full px-4 py-1 mb-2">
              <p className="text-klyfton-blue-dark font-medium text-sm">About Us</p>
            </div>
            <h2 className="heading-lg text-klyfton-slate">We're Redefining IT Consulting with Privacy at the Core</h2>
            <p className="text-lg text-klyfton-gray">
              Klyfton Solutions was founded on the principle that privacy should be the foundation of all IT services. In an increasingly connected world, we believe that protecting your data is as important as optimizing your systems.
            </p>
            <p className="text-lg text-klyfton-gray">
              Our team of dedicated professionals brings together expertise in privacy law, cutting-edge technology, and business strategy to deliver solutions that protect your data while driving your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-klyfton-blue h-5 w-5 flex-shrink-0" />
                  <span className="text-klyfton-slate">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-4 bg-gradient-blue opacity-10 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <div className="glass-card p-2 overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=6000&q=80" 
                  alt="Team collaborating" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 glass-card p-6 max-w-xs animate-float">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-klyfton-teal text-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Team</h3>
                    <p className="text-sm text-klyfton-gray">Certified IT professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
