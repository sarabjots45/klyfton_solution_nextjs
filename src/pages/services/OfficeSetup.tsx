
import { Monitor } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const OfficeSetup = () => {
  return (
    <ServicePageTemplate 
      title="Office Setup" 
      subtitle="Complete office IT infrastructure setup and management for businesses of all sizes."
      icon={<Monitor className="h-12 w-12" />}
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Workspace Technology Planning</h2>
              <p className="text-klyfton-gray mb-4">
                Comprehensive planning and implementation of office technology infrastructure tailored to your specific business needs.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Workplace technology assessment
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Hardware procurement and setup
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Network design and implementation
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Workspace optimization
                </li>
              </ul>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Collaboration Tools</h2>
              <p className="text-klyfton-gray mb-4">
                Implementation of secure, efficient collaboration tools that enhance productivity while maintaining data privacy.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Communication systems setup
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Project management tools
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Document sharing and collaboration
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Virtual meeting solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Hybrid Work Enablement</h2>
          <p className="text-klyfton-gray">
            Our office setup solutions are designed for the modern workplace, supporting both in-office and remote work with seamless integration, secure access controls, and productivity-enhancing technologies that work anywhere.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default OfficeSetup;
