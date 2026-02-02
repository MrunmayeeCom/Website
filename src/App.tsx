import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ProductSection } from "./components/ProductSection";
import { FAQSection } from "./components/FAQSection";
import { PricingSection } from "./components/PricingSection";
import { CheckoutPage } from "./components/CheckoutPage";
import { PaymentSuccess } from "./components/PaymentSuccess";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";

import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { TermsOfService } from "./components/pages/TermsOfService";
import { CookiePolicy } from "./components/pages/CookiePolicy";
import { Security } from "./components/pages/Security";
import { PartnerPage } from "./components/pages/PartnerPage";
import { BecomePartnerPage } from "./components/pages/BecomePartnerPage";

import { Toaster } from "./components/ui/sonner";
import TutorialPage from "./components/TutorialPage";

type BillingCycle = "monthly" | "quarterly" | "half-yearly" | "yearly";

/* ---------------- SCROLL REDIRECT ---------------- */

function SectionRedirect({ sectionId }: { sectionId: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });

    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }, [navigate, sectionId]);

  return null;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const hideHeader =
    location.pathname === "/tutorials" ||
    location.pathname.startsWith("/checkout");

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>("monthly");
  const [pendingCheckout, setPendingCheckout] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  /* ---------------- SCROLL TO PRICING ---------------- */
  const scrollToPricing = () => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const el = document.getElementById("pricing");
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const el = document.getElementById("pricing");
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  /* ---------------- LOGIN FLOW ---------------- */

  const handleAdminLogin = () => {
    if (!pendingCheckout) return;

    const planSlug = selectedPlan.toLowerCase().replace(/\s+/g, "-");
    navigate(`/checkout/${planSlug}`);
    setPendingCheckout(false);
  };

  const handlePlanSelect = (plan: string, cycle: BillingCycle) => {
    setSelectedPlan(plan);
    setBillingCycle(cycle);
    setPendingCheckout(true);
    setLoginModalOpen(true);
  };

  const handleGetStartedClick = () => {
    setSelectedPlan("Starter");
    setBillingCycle("monthly");
    setPendingCheckout(true);
    setLoginModalOpen(true);
  };

  const handleProceedToPayment = (cycle: BillingCycle) => {
    setBillingCycle(cycle);
    navigate("/payment-success");
  };

  const handleFooterNavigate = (
    page: "privacy" | "terms" | "cookies" | "security"
  ) => {
    navigate(`/${page}`);
  };

  /* ---------------- HOME PAGE ---------------- */

  const HomePage = () => (
    <>
      <main>
        <section id="home">
          <HeroSection onGetStartedClick={handleGetStartedClick} />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="product">
          <ProductSection />
        </section>

        <section id="why-us">
          <WhyChooseUs />
        </section>

        <section id="pricing">
          <PricingSection onPlanSelect={handlePlanSelect} />
        </section>

        <section id="faqs">
          <FAQSection />
        </section>
      </main>

      <Footer onNavigate={handleFooterNavigate} />
    </>
  );

  /* ---------------- CURRENT PAGE DETECTOR ---------------- */

  const currentPage =
    location.pathname.startsWith("/partners")
      ? "partners"
      : location.pathname.startsWith("/become-partner")
      ? "become-partner"
      : "home";

  return (
    <div className="min-h-screen bg-background">
      {!hideHeader && (
        <Header
          onLoginClick={() => setLoginModalOpen(true)}
          onNavigateHome={() => navigate("/")}
          onNavigateToPartners={() => navigate("/partners")}
          currentPage={currentPage}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* SEO virtual routes */}
        <Route path="/pricing" element={<SectionRedirect sectionId="pricing" />} />
        <Route path="/faqs" element={<SectionRedirect sectionId="faqs" />} />
        <Route path="/features" element={<SectionRedirect sectionId="features" />} />
        <Route path="/product" element={<SectionRedirect sectionId="product" />} />
        <Route path="/why-us" element={<SectionRedirect sectionId="why-us" />} />

        <Route path="/tutorials" element={<TutorialPage />} />

        <Route
          path="/checkout/:planName?"
          element={
            <CheckoutPage
              selectedPlan={selectedPlan}
              initialBillingCycle={billingCycle}
              onBack={() => navigate("/")}
              onProceedToPayment={handleProceedToPayment}
            />
          }
        />

        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route path="/privacy" element={<PrivacyPolicy onBack={() => navigate("/")} />} />
        <Route path="/terms" element={<TermsOfService onBack={() => navigate("/")} />} />
        <Route path="/cookies" element={<CookiePolicy onBack={() => navigate("/")} />} />
        <Route path="/security" element={<Security onBack={() => navigate("/")} />} />

        <Route
          path="/partners"
          element={
            <>
              <PartnerPage onBecomePartnerClick={() => navigate("/become-partner")} />
              <Footer onNavigate={handleFooterNavigate} />
            </>
          }
        />

        <Route
          path="/become-partner"
          element={
            <>
              <BecomePartnerPage onBackToDirectory={() => navigate("/partners")} />
              <Footer onNavigate={handleFooterNavigate} />
            </>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <LoginModal
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        onAdminLogin={() => handleAdminLogin()}
        onLoginSuccess={() => setLoginModalOpen(false)}
        onNavigateToPricing={scrollToPricing}
      />

      <Toaster />
    </div>
  );
}