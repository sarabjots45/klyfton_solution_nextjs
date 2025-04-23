
import { Shield } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const Cybersecurity = () => {
  return (
    <ServicePageTemplate 
      title="Cybersecurity" 
      subtitle="Advanced cybersecurity measures to protect your business from threats and vulnerabilities."
      icon={<Shield className="h-12 w-12" />}
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Threat Detection and Response</h2>
              <p className="text-klyfton-gray mb-4">
                Proactive monitoring and rapid response capabilities to identify and neutralize security threats before they cause damage.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  24/7 security monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Threat intelligence integration
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Incident response planning
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Security operations center
                </li>
              </ul>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Security Assessment</h2>
              <p className="text-klyfton-gray mb-4">
                Comprehensive security assessments to identify vulnerabilities and develop mitigation strategies.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Vulnerability assessments
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Penetration testing
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Security architecture review
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Risk assessment and management
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Cybersecurity Training</h2>
          <p className="text-klyfton-gray">
            We provide comprehensive security awareness training programs that transform your employees from potential security vulnerabilities into your first line of defense against cyber threats. Our training covers phishing recognition, password security, social engineering, and secure remote work practices.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default Cybersecurity;
