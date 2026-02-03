import { Button } from "./ui/button";
import { Menu, LogIn, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "../assets/geotrack.png";

interface HeaderProps {
  onLoginClick: () => void;
  onNavigateHome: () => void;
  onNavigateToPartners: () => void;
  currentPage: "home" | "partners" | "become-partner";
}

export function Header({
  onLoginClick,
  onNavigateHome,
  onNavigateToPartners,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasActiveLicense, setHasActiveLicense] = useState(false);
  const [hasAnyPlan, setHasAnyPlan] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLoginStatus();
    
    // Listen for login status changes
    const handleLoginStatusChange = () => {
      checkLoginStatus();
    };
    
    window.addEventListener('userLoginStatusChanged', handleLoginStatusChange);
    window.addEventListener('storage', handleLoginStatusChange);
    
    return () => {
      window.removeEventListener('userLoginStatusChanged', handleLoginStatusChange);
      window.removeEventListener('storage', handleLoginStatusChange);
    };
  }, []);

  // Scroll to section when URL changes
  useEffect(() => {
    const sectionMap: { [key: string]: string } = {
      '/pricing': 'pricing',
      '/features': 'features',
      '/product': 'product',
      '/why-us': 'why-us',
      '/faqs': 'faqs',
    };

    const sectionId = sectionMap[location.pathname];
    
    if (sectionId) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else if (location.pathname === '/') {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const checkLoginStatus = async () => {
    const userStr = localStorage.getItem("user");
    
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserEmail(user.email);
        setUserName(user.name || user.email.split("@")[0]);
        setIsLoggedIn(true);
        
        // Check for active license
        await checkActiveLicense(user.email);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
      setHasActiveLicense(false);
      setHasAnyPlan(false);
    }
  };

  const checkActiveLicense = async (email: string) => {
    try {
      console.log('[Navbar] Checking active license for:', email);
      const response = await fetch(
        `https://lisence-system.onrender.com/api/external/actve-license/${email}?productId=69589d3ba7306459dd47fd87`,
        {
          headers: {
            "x-api-key": "my-secret-key-123",
          },
        }
      );

      console.log('[Navbar] License check response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('[Navbar] License check response data:', data);
        
        // Check if activeLicense exists and status is 'active'
        const hasLicense = data.activeLicense && data.activeLicense.status === 'active';
        console.log('[Navbar] Has active license:', hasLicense);
        setHasActiveLicense(hasLicense);
        
        // Check if user has any plan (active or not)
        // This could be any status: active, expired, cancelled, etc.
        const hasPlan = !!data.activeLicense;
        console.log('[Navbar] Has any plan:', hasPlan);
        setHasAnyPlan(hasPlan);
      } else {
        console.log('[Navbar] License check failed - response not ok');
        setHasActiveLicense(false);
        setHasAnyPlan(false);
      }
    } catch (error) {
      console.error("[Navbar] Error checking active license:", error);
      setHasActiveLicense(false);
      setHasAnyPlan(false);
    }
  };

  /**
   * Navigate to section by changing URL
   * This creates proper permalinks like /pricing, /features, etc.
   */
  const navigateToSection = (sectionPath: string) => {
    navigate(sectionPath);
    setMobileMenuOpen(false);
  };

  const handlePartnersClick = () => {
    navigate("/partners");
    setMobileMenuOpen(false);
  };

  const handleLoginButtonClick = () => {
    if (!isLoggedIn) {
      // Not logged in - open login modal
      onLoginClick();
    } else if (hasActiveLicense) {
      // Logged in with active license - go to dashboard
      window.open("https://geo-track-em3s.onrender.com/dashboard", "_blank");
    } else {
      // Logged in without license - go to pricing
      navigateToSection("/pricing");
    }
    setMobileMenuOpen(false);
  };

  const handleDownloadAPK = () => {
    // Replace with your actual APK download URL
    const apkUrl = "https://intranet.rajlaxmiworld.com/~t5XLr";
    window.open(apkUrl, "_blank");
    setMobileMenuOpen(false);
  };

  const getLoginButtonText = () => {
    if (!isLoggedIn) {
      return "Login";
    } else if (hasActiveLicense) {
      return "Dashboard";
    } else if (hasAnyPlan) {
      // User has a plan but it's not active (expired/cancelled)
      return "Upgrade";
    } else {
      // User is logged in but has never had a plan
      return "Get Started";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setHasActiveLicense(false);
    setHasAnyPlan(false);
    setUserEmail("");
    setUserName("");
    window.dispatchEvent(new Event('userLoginStatusChanged'));
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
            onClick={() => navigateToSection("/")}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => navigateToSection("/")} className="text-sm hover:text-primary">
            Home
          </button>
          <button onClick={() => navigateToSection("/features")} className="text-sm hover:text-primary">
            Features
          </button>
          <button onClick={() => navigateToSection("/why-us")} className="text-sm hover:text-primary">
            Why Us
          </button>
          <button onClick={() => navigateToSection("/product")} className="text-sm hover:text-primary">
            Product
          </button>
          <button onClick={() => navigateToSection("/pricing")} className="text-sm hover:text-primary">
            Pricing
          </button>
          <button onClick={() => navigateToSection("/faqs")} className="text-sm hover:text-primary">
            FAQs
          </button>
          <button
            onClick={handlePartnersClick}
            className="text-sm hover:text-primary"
          >
            Partners
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {isLoggedIn && (
            <span className="hidden md:inline text-sm text-muted-foreground mr-2">
              {userName}
            </span>
          )}
          
          {/* Download APK Button - Show for all users */}
          <Button
            onClick={handleDownloadAPK}
            variant="outline"
            className="hidden md:flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download APK
          </Button>

          <Button
            onClick={handleLoginButtonClick}
            className="hidden md:flex items-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            {getLoginButtonText()}
          </Button>

          {isLoggedIn && (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="hidden md:flex"
            >
              Logout
            </Button>
          )}

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
            <button onClick={() => navigateToSection("/")} className="text-sm text-left hover:text-primary">
              Home
            </button>
            <button onClick={() => navigateToSection("/features")} className="text-sm text-left hover:text-primary">
              Features
            </button>
            <button onClick={() => navigateToSection("/why-us")} className="text-sm text-left hover:text-primary">
              Why Us
            </button>
            <button onClick={() => navigateToSection("/product")} className="text-sm text-left hover:text-primary">
              Product
            </button>
            <button onClick={() => navigateToSection("/pricing")} className="text-sm text-left hover:text-primary">
              Pricing
            </button>
            <button onClick={() => navigateToSection("/faqs")} className="text-sm text-left hover:text-primary">
              FAQs
            </button>
            <button onClick={handlePartnersClick} className="text-sm text-left hover:text-primary">
              Partners
            </button>

            {isLoggedIn && (
              <div className="text-sm text-muted-foreground py-2">
                Logged in as: {userName}
              </div>
            )}

            {/* Download APK Button for Mobile - Show for all users */}
            <Button onClick={handleDownloadAPK} variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download APK
            </Button>

            <Button onClick={handleLoginButtonClick} className="w-full">
              <LogIn className="h-4 w-4 mr-2" />
              {getLoginButtonText()}
            </Button>

            {isLoggedIn && (
              <Button onClick={handleLogout} variant="outline" className="w-full">
                Logout
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}