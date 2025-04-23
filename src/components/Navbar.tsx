
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Initial animation when component mounts
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(logoRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.6,
      delay: 0.2,
      ease: "back.out(1.7)"
    });

    if (linksRef.current && linksRef.current.children) {
      gsap.from(linksRef.current.children, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out"
      });
    }
  }, []);

  // Animation for the mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white bg-opacity-80 backdrop-blur-lg shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" ref={logoRef} className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/2f1b365d-c75e-43b7-a6aa-042297f454e5.png" 
              alt="Klyfton Solutions Logo" 
              className="h-12" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="mobile-menu md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/contact" className="btn-primary text-center" onClick={() => setIsOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
