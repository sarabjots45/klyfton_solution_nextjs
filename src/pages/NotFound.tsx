
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found - Klyfton Solutions";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-10 animate-fade-in">
            <h1 className="text-9xl font-bold text-klyfton-blue mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6 text-klyfton-slate">Page Not Found</h2>
            <p className="text-xl text-klyfton-gray mb-8">
              We're sorry, but the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary flex items-center gap-2">
                <Home className="h-5 w-5" /> Go to Homepage
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="btn-secondary flex items-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" /> Go Back
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
