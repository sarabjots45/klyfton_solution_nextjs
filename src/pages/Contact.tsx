
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Klyfton Solutions";
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
              <p className="text-klyfton-blue-dark font-medium text-sm">Get in Touch</p>
            </div>
            <h1 className="heading-lg mb-4">Contact Us</h1>
            <p className="text-klyfton-gray text-lg">
              Have questions about our services or ready to start a project? Reach out to our team and we'll get back to you promptly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="animate-fade-in-left">
              <ContactForm />
            </div>
            
            <div className="space-y-8 animate-fade-in-right">
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6 text-klyfton-slate">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-klyfton-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-klyfton-slate mb-1">Our Office</h4>
                      <p className="text-klyfton-gray">
                        123 Privacy Lane, <br />
                        Tech District, <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-klyfton-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-klyfton-slate mb-1">Phone</h4>
                      <p className="text-klyfton-gray">
                        <a href="tel:+14155551234" className="hover:text-klyfton-blue transition-colors duration-300">
                          +1 (415) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-klyfton-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-klyfton-slate mb-1">Email</h4>
                      <p className="text-klyfton-gray">
                        <a href="mailto:info@klyfton.com" className="hover:text-klyfton-blue transition-colors duration-300">
                          info@klyfton.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-klyfton-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-klyfton-slate mb-1">Hours of Operation</h4>
                      <p className="text-klyfton-gray">
                        Monday - Friday: 9:00 AM - 6:00 PM <br />
                        Saturday: 10:00 AM - 2:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6 text-klyfton-slate">Our Location</h3>
                <div className="h-80 rounded-lg overflow-hidden">
                  <iframe 
                    title="Klyfton Solutions Office Location"
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.05277121112!2d-122.4726193698079!3d37.77493958510669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1716141387168!5m2!1sen!2sus" 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
