
import { Server } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DevOpsSolutions = () => {
  return (
    <ServicePageTemplate 
      title="DevOps Solutions" 
      subtitle="Streamline your development operations with our expert DevOps implementation and management."
      icon={<Server className="h-12 w-12" />}
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">CI/CD Pipeline Implementation</h2>
              <p className="text-klyfton-gray mb-4">
                We design and implement efficient CI/CD pipelines that accelerate software delivery while maintaining quality and security.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Automated testing frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Continuous integration setup
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Deployment automation
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Release management strategies
                </li>
              </ul>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Infrastructure as Code</h2>
              <p className="text-klyfton-gray mb-4">
                Implement Infrastructure as Code (IaC) to manage and provision infrastructure through code instead of manual processes.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Terraform implementation
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Configuration management
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Version-controlled infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Environment consistency
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">DevOps Culture Transformation</h2>
          <p className="text-klyfton-gray">
            Beyond tools and processes, we help organizations adopt a DevOps culture that promotes collaboration, communication, and shared responsibility between development and operations teams, resulting in faster delivery and higher quality software.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default DevOpsSolutions;
