
import { Cpu } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const Infrastructure = () => {
  return (
    <ServicePageTemplate 
      title="IT Infrastructure" 
      subtitle="Robust IT infrastructure design, implementation, and management tailored to your needs."
      icon={<Cpu className="h-12 w-12" />}
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Infrastructure Architecture</h2>
              <p className="text-klyfton-gray mb-4">
                Design and implementation of scalable, resilient infrastructure architectures that support your business objectives.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Needs assessment and planning
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Scalable architecture design
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Redundancy and high availability
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Disaster recovery planning
                </li>
              </ul>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Network Infrastructure</h2>
              <p className="text-klyfton-gray mb-4">
                Comprehensive network solutions that provide secure, reliable connectivity for your organization.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Network design and implementation
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Secure wireless solutions
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  VPN and remote access
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Network monitoring and management
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Infrastructure Modernization</h2>
          <p className="text-klyfton-gray">
            We help organizations transform legacy infrastructure into modern, agile environments that support innovation and growth. Our infrastructure modernization approach focuses on incremental improvements that minimize disruption while maximizing business value.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default Infrastructure;
