import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  
  return (
    <footer className="bg-primary pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/e-uploads/2f1b365d-c75e-43b7-a6aa-042297f454e5.png" 
                alt="Klyfton Solutions Logo" 
                className="h-14" 
              />
            </Link>
            <p className="text-secondary-light">
              Confidential IT, Futuristic Solutions. We provide privacy-driven IT consulting services for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-accent bg-opacity-10 text-accent-light hover:bg-accent hover:text-neutral transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent bg-opacity-10 text-accent-light hover:bg-accent hover:text-neutral transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent bg-opacity-10 text-accent-light hover:bg-accent hover:text-neutral transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent bg-opacity-10 text-accent-light hover:bg-accent hover:text-neutral transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-neutral">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/privacy" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Privacy Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/devops" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> DevOps Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/office-setup" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Office Setup
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Cloud Management
                </Link>
              </li>
              <li>
                <Link to="/services/infrastructure" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> IT Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-neutral">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary-light hover:text-accent-light transition-colors duration-300 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-neutral">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-light mr-3 mt-1" />
                <span className="text-secondary-light">
                  123 Privacy Lane, <br />
                  Tech District, <br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-light mr-3" />
                <a href="tel:+14155551234" className="text-secondary-light hover:text-accent-light transition-colors duration-300">
                  +1 (415) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-light mr-3" />
                <a href="mailto:info@klyfton.com" className="text-secondary-light hover:text-accent-light transition-colors duration-300">
                  info@klyfton.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-secondary-dark/20 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Klyfton Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-secondary-light hover:text-accent-light transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-secondary-light hover:text-accent-light transition-colors duration-300">
              Terms of Service
            </Link>
            <a href="#" className="text-sm text-secondary-light hover:text-accent-light transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
