
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to a backend
      console.log('Form submitted:', formData);
      setFormStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <div className="glass-card p-8 text-center animate-scale-in">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-6">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
        <p className="text-klyfton-gray mb-6">
          Thank you for reaching out to Klyfton Solutions. Our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setFormStatus('idle')}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-klyfton-slate font-medium mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-klyfton-blue focus:border-transparent transition-all duration-300"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-klyfton-slate font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-klyfton-blue focus:border-transparent transition-all duration-300"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-klyfton-slate font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-klyfton-blue focus:border-transparent transition-all duration-300"
            placeholder="+1 (123) 456-7890"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-klyfton-slate font-medium mb-2">Service Interest</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-klyfton-blue focus:border-transparent transition-all duration-300"
          >
            <option value="" disabled>Select a service</option>
            <option value="privacy">Privacy Solutions</option>
            <option value="devops">DevOps Solutions</option>
            <option value="office">Office Setup</option>
            <option value="cloud">Cloud Management</option>
            <option value="infrastructure">IT Infrastructure</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-klyfton-slate font-medium mb-2">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-klyfton-blue focus:border-transparent transition-all duration-300"
          placeholder="Tell us about your project or inquiry..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center"
        disabled={formStatus === 'submitting'}
      >
        {formStatus === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </>
        ) : (
          <>
            Send Message <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
