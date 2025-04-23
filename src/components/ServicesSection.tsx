
import { Shield, Server, Monitor, Cpu, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link to={link} className="bg-neutral p-8 hover:bg-white group h-full flex flex-col rounded-xl shadow-lg transition-all duration-300">
      <div className="mb-6 text-accent bg-accent bg-opacity-10 rounded-lg p-4 inline-block group-hover:bg-accent group-hover:text-neutral transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary-dark transition-colors duration-300">{title}</h3>
      <p className="text-secondary-dark flex-grow">{description}</p>
      <div className="mt-6 flex items-center text-accent font-medium">
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Privacy-Driven Solutions",
      description: "Comprehensive privacy solutions that protect your data and maintain compliance with regulations.",
      link: "/services/privacy"
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "DevOps Solutions",
      description: "Streamline your development operations with our expert DevOps implementation and management.",
      link: "/services/devops"
    },
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Office Setup",
      description: "Complete office IT infrastructure setup and management for businesses of all sizes.",
      link: "/services/office-setup"
    },
    {
      icon: <CloudCog className="h-10 w-10" />,
      title: "Cloud Management",
      description: "Secure and efficient cloud solutions for storage, applications, and infrastructure needs.",
      link: "/services/cloud"
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "IT Infrastructure",
      description: "Robust IT infrastructure design, implementation, and management tailored to your needs.",
      link: "/services/infrastructure"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersecurity",
      description: "Advanced cybersecurity measures to protect your business from threats and vulnerabilities.",
      link: "/services/cybersecurity"
    }
  ];

  return (
    <section className="section relative overflow-hidden bg-neutral" id="services">
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] rounded-full bg-accent opacity-5 filter blur-3xl"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-64 w-[500px] h-[500px] rounded-full bg-accent-light opacity-5 filter blur-3xl"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 animate-fade-in">
        <div className="inline-block bg-accent bg-opacity-10 rounded-full px-4 py-1 mb-4">
          <p className="text-accent-dark font-medium text-sm">Our Services</p>
        </div>
        <h2 className="heading-lg mb-4 text-primary">Comprehensive IT Consulting Services</h2>
        <p className="text-secondary-dark text-lg">We provide a wide range of IT services designed to enhance your business operations while maintaining the highest standards of privacy and security.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
