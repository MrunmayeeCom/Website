import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  onNavigate: (page: 'privacy' | 'terms' | 'cookies' | 'security') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-gray-300 border-t border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-center animate-fade-in">&copy; 2025 Trackon. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a 
              href="/faqs" 
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              FAQs
            </a>
            <button 
              onClick={() => onNavigate('privacy')} 
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms')} 
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onNavigate('cookies')} 
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              Cookie Policy
            </button>
            <button 
              onClick={() => onNavigate('security')} 
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}