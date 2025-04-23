
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Klyfton Solutions - Privacy-Driven IT Consulting Services";
    
    // More dramatic entrance animation for sections
    if (sectionsRef.current.length > 0) {
      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          { 
            y: 100,
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2 // Stagger the animations
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToSectionsRef = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main ref={mainRef} className="flex-grow">
        <Hero />
        <div ref={addToSectionsRef}>
          <ServicesSection />
        </div>
        <div ref={addToSectionsRef}>
          <AboutSection />
        </div>
        <div ref={addToSectionsRef}>
          <TestimonialsSection />
        </div>
        <div ref={addToSectionsRef}>
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
