
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import CustomCursor from "./components/CustomCursor";

// Service Pages
import PrivacySolutions from "./pages/services/PrivacySolutions";
import DevOpsSolutions from "./pages/services/DevOpsSolutions";
import OfficeSetup from "./pages/services/OfficeSetup";
import CloudManagement from "./pages/services/CloudManagement";
import Infrastructure from "./pages/services/Infrastructure";
import Cybersecurity from "./pages/services/Cybersecurity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Routes */}
          <Route path="/services/privacy" element={<PrivacySolutions />} />
          <Route path="/services/devops" element={<DevOpsSolutions />} />
          <Route path="/services/office-setup" element={<OfficeSetup />} />
          <Route path="/services/cloud" element={<CloudManagement />} />
          <Route path="/services/infrastructure" element={<Infrastructure />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<NotFound />} /> {/* Add a route for sitemap */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
