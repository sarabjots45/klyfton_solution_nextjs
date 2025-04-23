
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial state setup
    gsap.set([textRef.current?.children], { y: 50, opacity: 0 });
    gsap.set(imageRef.current, { x: 100, opacity: 0 });
    gsap.set(statsRef.current?.children, { y: 30, opacity: 0 });

    // Hero Section Animation Timeline
    tl.fromTo(textRef.current?.children,
      { y: 50, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      }
    )
    .fromTo(imageRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
      },
      "-=0.8"
    )
    .fromTo(statsRef.current?.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
      },
      "-=0.4"
    );

    // Add floating animation to the image
    gsap.to(imageRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] -right-32 w-[500px] h-[500px] rounded-full bg-accent opacity-10 filter blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-[10%] -left-32 w-[400px] h-[400px] rounded-full bg-accent-light opacity-10 filter blur-3xl animate-pulse-gentle"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-8">
            <div className="inline-block bg-accent bg-opacity-10 rounded-full px-4 py-1 mb-2">
              <p className="text-neutral font-medium text-sm">Confidential IT, Futuristic Solutions</p>
            </div>
            <h1 className="heading-xl text-neutral">
              Privacy-Driven 
              <span className="text-accent-light"> IT Solutions </span> 
              for Your Business
            </h1>
            <p className="text-xl text-secondary-light max-w-xl">
              Klyfton Solutions provides comprehensive IT consulting services with a focus on privacy, security, and efficiency for modern businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-accent hover:bg-accent-dark text-neutral px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2">
                Get Started <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="bg-transparent border border-neutral text-neutral hover:bg-accent hover:border-accent px-6 py-3 rounded-md font-medium transition-all duration-300">
                Explore Services
              </Link>
            </div>

            <div ref={statsRef} className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-accent-light">100+</h4>
                <p className="text-sm text-secondary-light">Clients</p>
              </div>
              <div className="h-10 w-px bg-secondary-dark/30"></div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-accent-light">300+</h4>
                <p className="text-sm text-secondary-light">Projects</p>
              </div>
              <div className="h-10 w-px bg-secondary-dark/30"></div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-accent-light">98%</h4>
                <p className="text-sm text-secondary-light">Satisfaction</p>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary-light to-transparent opacity-10 rounded-full blur-2xl"></div>
            <div className="relative p-4">
              <div className="glass-card overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=5760&q=80" 
                  alt="IT Consulting" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-10 -left-10 glass-card p-6 max-w-xs animate-float">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary text-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Privacy First</h3>
                    <p className="text-sm text-secondary-dark">End-to-end security solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
