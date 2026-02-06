import { Button } from "./ui/button";
import { Menu, LogIn, Download, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasActiveLicense, setHasActiveLicense] = useState(false);
  const [hasAnyPlan, setHasAnyPlan] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else if (location.pathname === '/') {
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
        
        const hasLicense = data.activeLicense && data.activeLicense.status === 'active';
        console.log('[Navbar] Has active license:', hasLicense);
        setHasActiveLicense(hasLicense);
        
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

  const navigateToSection = (sectionPath: string) => {
    navigate(sectionPath);
    setMobileMenuOpen(false);
  };

  const handlePartnersClick = () => {
    navigate("/partners");
    setMobileMenuOpen(false);
  };

  const handleDownloadAPK = () => {
    const apkUrl = "http://bit.ly/4r3d9ZB";
    window.open(apkUrl, "_blank");
    setMobileMenuOpen(false);
  };

  const handleDashboardClick = () => {
    // Open dashboard in new tab - User stays on website
    window.open("https://geo-track-em3s.onrender.com/dashboard", "_blank");
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setHasActiveLicense(false);
    setHasAnyPlan(false);
    setUserEmail("");
    setUserName("");
    setDropdownOpen(false);
    window.dispatchEvent(new Event('userLoginStatusChanged'));
    setMobileMenuOpen(false);
  };

  const getLoginButtonText = () => {
    if (hasActiveLicense) {
      return "Dashboard";
    } else if (hasAnyPlan) {
      return "Upgrade";
    } else {
      return "Get Started";
    }
  };

  const handleLoginOrActionButton = () => {
    if (hasActiveLicense) {
      handleDashboardClick();
    } else {
      navigateToSection("/pricing");
    }
    setMobileMenuOpen(false);
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!userName) return "U";
    return userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Conditional Rendering Based on Login Status */}
          {!isLoggedIn ? (
            // Not logged in - Show Download APK and Login Button
            <>
              <Button
                onClick={handleDownloadAPK}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download APK
              </Button>
              <Button
                onClick={onLoginClick}
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </>
          ) : (
            // Logged in - Show User Dropdown only
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-8 h-8 rounded bg-primary text-primary-foreground font-semibold text-sm hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-3 flex items-center justify-center"
                aria-label="User menu"
              >
                {getUserInitials()}
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 overflow-hidden" style={{ borderRadius: '20px' }}
                  >
                    {/* User Info Section */}
                    <div className="px-4 py-4 border-b border-gray-100" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {userName}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                      {/* Dashboard Option - Only show if user has active license */}
                      {hasActiveLicense && (
                        <button
                          onClick={handleDashboardClick}
                          className="w-full px-3 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-900 rounded-lg"
                        >
                          <LayoutDashboard className="h-4 w-4" />
                          <span className="text-sm font-medium">Dashboard</span>
                        </button>
                      )}

                      {/* Download APK Option - Always show for logged in users */}
                      <button
                        onClick={() => {
                          handleDownloadAPK();
                          setDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-900 rounded-lg"
                      >
                        <Download className="h-4 w-4" />
                        <span className="text-sm font-medium">Download APK</span>
                      </button>

                      {/* Logout Option - Always show */}
                      <button
                        onClick={handleLogout}
                        className="w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-red-50 transition-colors text-red-600 hover:text-red-700 rounded-lg"
                      >
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm font-medium">Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
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
                <div className="pt-3 pb-2 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {getUserInitials()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">
                        {userName}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {userEmail}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {!isLoggedIn ? (
                <>
                  {/* Download APK Button for Mobile - Not logged in */}
                  <Button onClick={handleDownloadAPK} variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download APK
                  </Button>

                  <Button onClick={() => { onLoginClick(); setMobileMenuOpen(false); }} className="w-full">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </>
              ) : (
                <>
                  {/* Mobile Dashboard Button - Only if active license */}
                  {hasActiveLicense && (
                    <Button
                      onClick={handleDashboardClick}
                      className="w-full"
                    >
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  )}

                  {/* Download APK Button for Mobile - Logged in */}
                  <Button onClick={handleDownloadAPK} variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download APK
                  </Button>

                  <Button onClick={handleLogout} variant="outline" className="w-full text-red-600 hover:text-red-700">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}