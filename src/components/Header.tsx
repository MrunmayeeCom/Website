import { Button } from "./ui/button";
import { Menu, LogIn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/geotrack.png";

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * Navigate to home and scroll to section
   * This avoids route re-render flicker completely
   */
  const scrollToSection = (sectionId: string) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    // update URL (SEO-friendly)
    window.history.pushState(null, "", `/${sectionId}`);

    // scroll without re-render
    requestAnimationFrame(() => {
      requestAnimationFrame(doScroll);
    });

    setMobileMenuOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="GeoTrack Logo"
            className="h-16 w-auto cursor-pointer"
            onClick={() => scrollToSection("home")}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-sm hover:text-primary">
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className="text-sm hover:text-primary">
            Features
          </button>
          <button onClick={() => scrollToSection("why-us")} className="text-sm hover:text-primary">
            Why Us
          </button>
          <button onClick={() => scrollToSection("product")} className="text-sm hover:text-primary">
            Product
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm hover:text-primary">
            Pricing
          </button>
          <button onClick={() => scrollToSection("faqs")} className="text-sm hover:text-primary">
            FAQs
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button onClick={onLoginClick} className="hidden md:flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            Login
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <button onClick={() => scrollToSection("home")} className="text-sm text-left hover:text-primary">
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="text-sm text-left hover:text-primary">
              Features
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-sm text-left hover:text-primary">
              Why Us
            </button>
            <button onClick={() => scrollToSection("product")} className="text-sm text-left hover:text-primary">
              Product
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm text-left hover:text-primary">
              Pricing
            </button>
            <button onClick={() => scrollToSection("faqs")} className="text-sm text-left hover:text-primary">
              FAQs
            </button>

            <Button onClick={onLoginClick} className="w-full">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
