
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Users, Award, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Klyfton Solutions";
  }, []);

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-klyfton-blue" />,
      title: "Privacy First",
      description: "We believe that privacy is a fundamental right and integrate this principle into every solution we deliver."
    },
    {
      icon: <Users className="h-12 w-12 text-klyfton-blue" />,
      title: "Client Partnership",
      description: "We work alongside our clients as true partners, understanding their unique needs and challenges."
    },
    {
      icon: <Award className="h-12 w-12 text-klyfton-blue" />,
      title: "Excellence",
      description: "We strive for excellence in all aspects of our work, from technical implementation to customer service."
    },
    {
      icon: <Clock className="h-12 w-12 text-klyfton-blue" />,
      title: "Innovation",
      description: "We continuously explore and implement cutting-edge technologies to provide future-proof solutions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-klyfton-blue-light opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-klyfton-teal opacity-10 rounded-full blur-3xl"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 animate-fade-in">
            <div className="inline-block bg-klyfton-blue bg-opacity-10 rounded-full px-4 py-1 mb-4">
              <p className="text-klyfton-blue-dark font-medium text-sm">About Us</p>
            </div>
            <h1 className="heading-lg mb-4">Our Story</h1>
            <p className="text-klyfton-gray text-lg">
              Klyfton Solutions was founded with a clear mission: to provide privacy-driven IT consulting services that help businesses thrive in the digital age without compromising data security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="animate-fade-in-left">
              <div className="glass-card overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1400&q=80" 
                  alt="Klyfton team" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <h2 className="heading-md">A Team of Experts Dedicated to Your Success</h2>
              <p className="text-lg text-klyfton-gray">
                Our journey began in 2015 when a group of IT security experts recognized a critical gap in the consulting industry: the lack of privacy-first approaches to IT solutions.
              </p>
              <p className="text-lg text-klyfton-gray">
                Since then, we've grown into a comprehensive IT consulting firm with expertise across multiple domains, from privacy solutions to DevOps, cloud management, and office setups.
              </p>
              <p className="text-lg text-klyfton-gray">
                What sets us apart is our unwavering commitment to privacy and security in everything we do. We believe that in today's digital landscape, these aren't optional features—they're fundamental requirements.
              </p>
              <a href="#values" className="inline-flex items-center text-klyfton-blue font-medium hover:underline">
                Discover our values <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        
        <section id="values" className="section bg-gray-50 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 animate-fade-in">
            <div className="inline-block bg-klyfton-blue bg-opacity-10 rounded-full px-4 py-1 mb-4">
              <p className="text-klyfton-blue-dark font-medium text-sm">Our Values</p>
            </div>
            <h2 className="heading-lg mb-4">The Principles That Guide Us</h2>
            <p className="text-klyfton-gray text-lg">
              At Klyfton Solutions, our core values shape every aspect of our work and relationships with clients. These principles are the foundation of our approach to IT consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-klyfton-slate">{value.title}</h3>
                <p className="text-klyfton-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
