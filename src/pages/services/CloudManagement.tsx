
import { CloudCog } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CloudManagement = () => {
  return (
    <ServicePageTemplate 
      title="Cloud Management" 
      subtitle="Secure and efficient cloud solutions for storage, applications, and infrastructure needs."
      icon={<CloudCog className="h-12 w-12" />}
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Cloud Migration</h2>
              <p className="text-klyfton-gray mb-4">
                Seamless migration of your existing infrastructure, applications, and data to cloud platforms with minimal disruption.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Migration assessment and planning
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Phased implementation strategies
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Legacy system integration
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Post-migration optimization
                </li>
              </ul>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Multi-Cloud Strategy</h2>
              <p className="text-klyfton-gray mb-4">
                Develop and implement multi-cloud strategies that leverage the strengths of different cloud providers for optimal performance and cost efficiency.
              </p>
              <ul className="space-y-2 text-klyfton-gray">
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Cloud provider selection
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Workload distribution planning
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Inter-cloud connectivity
                </li>
                <li className="flex items-start">
                  <span className="text-klyfton-blue mr-2">•</span>
                  Unified management solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-klyfton-slate">Cloud Cost Optimization</h2>
          <p className="text-klyfton-gray">
            Our cloud management experts continuously monitor and optimize your cloud resources to ensure you're getting maximum value while minimizing costs. We implement right-sizing, auto-scaling, and resource scheduling to achieve significant cost savings without compromising performance.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default CloudManagement;
