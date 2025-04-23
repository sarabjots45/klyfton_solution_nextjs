
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Klyfton Solutions transformed our IT infrastructure while significantly enhancing our data privacy measures. Their team's expertise and dedication to security gave us peace of mind in an era of increasing cyber threats.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "NexaHealth",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      content: "The DevOps solutions provided by Klyfton dramatically improved our development pipeline efficiency. Their privacy-first approach ensured our sensitive data remained protected throughout the implementation process.",
      author: "Michael Chen",
      position: "Director of Engineering",
      company: "TechVista Inc.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      content: "Setting up our new office was seamless with Klyfton Solutions. They handled everything from network infrastructure to workstation deployment with exceptional attention to security details.",
      author: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Elevate Marketing",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block bg-klyfton-blue bg-opacity-10 rounded-full px-4 py-1 mb-4">
            <p className="text-klyfton-blue-dark font-medium text-sm">Testimonials</p>
          </div>
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-klyfton-gray text-lg">Discover how our privacy-driven IT solutions have helped businesses across various industries secure their data while optimizing their operations.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-klyfton-slate font-medium mb-8 italic">"{testimonials[activeIndex].content}"</p>
            
            <div className="flex items-center">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].author} 
                className="h-14 w-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-klyfton-slate">{testimonials[activeIndex].author}</h4>
                <p className="text-klyfton-gray">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial} 
              className="p-3 rounded-full bg-white border border-gray-200 text-klyfton-blue hover:bg-klyfton-blue hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="p-3 rounded-full bg-white border border-gray-200 text-klyfton-blue hover:bg-klyfton-blue hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-klyfton-blue w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
