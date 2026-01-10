import { useState, useEffect, useRef } from "react";
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
import { UseCasesSection } from "./components/UseCasesSection";
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

import { Toaster } from "./components/ui/sonner";
import TutorialPage from './components/TutorialPage';

type BillingCycle = "monthly" | "quarterly" | "yearly";

/* ---------------- SCROLL HANDLER ---------------- */

function SectionRedirect({ sectionId }: { sectionId: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home", { replace: true });

    requestAnimationFrame(() => {
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
    });
  }, [navigate, sectionId]);

  return null;
}


export default function App() {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ REQUIRED

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
    page: 'privacy' | 'terms' | 'cookies' | 'security'
  ) => {
    navigate(`/${page}`);
  };

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

        <section id="use-cases">
          <UseCasesSection onGetStartedClick={handleGetStartedClick} />
        </section>
      </main>

      <Footer onNavigate={handleFooterNavigate} />
    </>
  );

      return (
        <div className="min-h-screen bg-background">
          {!hideHeader && (
  <Header onLoginClick={() => setLoginModalOpen(true)} />
)}


      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Main page */}
        <Route path="/home" element={<HomePage />} />

        {/* 🔥 SEO-friendly virtual routes */}
        <Route path="/pricing" element={<SectionRedirect sectionId="pricing" />} />
        <Route path="/faqs" element={<SectionRedirect sectionId="faqs" />} />
        <Route path="/features" element={<SectionRedirect sectionId="features" />} />
        <Route path="/product" element={<SectionRedirect sectionId="product" />} />
        <Route path="/why-us" element={<SectionRedirect sectionId="why-us" />} />

        <Route path="/tutorials" element={<TutorialPage />} />

        {/* Real pages */}
        <Route
          path="/checkout/:planName?"
          element={
            <CheckoutPage
              selectedPlan={selectedPlan}
              initialBillingCycle={billingCycle}
              onBack={() => navigate("/home")}
              onProceedToPayment={handleProceedToPayment}
            />
          }
        />

        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />

        <Route path="/privacy" element={<PrivacyPolicy onBack={() => navigate("/home")} />} />
        <Route path="/terms" element={<TermsOfService onBack={() => navigate("/home")} />} />
        <Route path="/cookies" element={<CookiePolicy onBack={() => navigate("/home")} />} />
        <Route path="/security" element={<Security onBack={() => navigate("/home")} />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>


      <LoginModal
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        onAdminLogin={handleAdminLogin}
      />

      <Toaster />
    </div>
  );
}
