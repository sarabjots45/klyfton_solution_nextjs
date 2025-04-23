
import { Shield } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const PrivacySolutions = () => {
  return (
    <ServicePageTemplate 
      title="Privacy-Driven Solutions" 
      subtitle="Comprehensive privacy solutions that protect your data and maintain compliance with regulations."
      icon={<Shield className="h-12 w-12" />}
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Data Protection Framework</h2>
              <p className="text-klyfton-gray mb-4">
                We design and implement comprehensive data protection frameworks that safeguard your sensitive information while ensuring operational efficiency.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Data classification and mapping
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Privacy impact assessments
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Data minimization strategies
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Privacy by design implementation
                </li>
              </ul>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Regulatory Compliance</h2>
              <p className="text-klyfton-gray mb-4">
                Stay compliant with evolving privacy regulations including GDPR, CCPA, HIPAA, and other industry-specific requirements.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Compliance gap analysis
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Policy development and implementation
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Ongoing compliance monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Staff training and awareness
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Our Privacy-First Approach</h2>
          <p className="text-klyfton-gray">
            At Klyfton Solutions, we believe privacy is not just a compliance requirement but a competitive advantage. Our privacy-driven solutions are designed to protect your sensitive data while building customer trust and enhancing your reputation.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default PrivacySolutions;
