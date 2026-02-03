import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { 
  Users,
  TrendingUp,
  DollarSign,
  Award,
  Target,
  BookOpen,
  Handshake,
  Lightbulb,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin
} from "lucide-react";
import { toast } from "sonner";
import { submitPartnerApplication } from "../../api/partnerProgram";

interface BecomePartnerPageProps {
  onNavigateHome: () => void;
  onNavigateToPartnerDirectory: () => void;
  onContactClick: () => void;
}

export function BecomePartnerPage({ onNavigateHome, onNavigateToPartnerDirectory, onContactClick }: BecomePartnerPageProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    website: "",
    companySize: "",
    partnerType: "",
    experience: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    [heroRef, benefitsRef, programRef, formRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Mapping functions to match API requirements
  const mapPartnerType = (type: string) => {
    if (type === "distributor") {
      return "distributor";
    }
    // All other types (reseller, implementation, technology, referral) are channel partners
    return "channel_partner";
  };

  const mapExperience = (exp: string) => {
    switch (exp) {
      case "0-1":
        return "0-1";
      case "1-3":
        return "1-3";
      case "3-5":
        return "3-5";
      case "5-10":
        return "5-10";
      case "10+":
        return "10+";
      default:
        return "0-1";
    }
  };

  const mapBusinessType = (partnerType: string) => {
    switch (partnerType) {
      case "technology":
        return "Technology";
      case "reseller":
        return "Reseller";
      case "implementation":
        return "Consulting";
      case "referral":
        return "Other";
      default:
        return "Other";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.companyName || !formData.contactName || !formData.email || 
        !formData.phone || !formData.country || !formData.city || 
        !formData.companySize || !formData.partnerType || !formData.experience) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        contactInformation: {
          fullName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
        },

        companyInformation: {
          companyName: formData.companyName,
          website: formData.website || "",
          country: formData.country,
          city: formData.city,
        },

        businessDetails: {
          businessType: mapBusinessType(formData.partnerType),
          yearsInBusiness: mapExperience(formData.experience),
          numberOfEmployees: formData.companySize,
          existingClients: 0,
        },

        partnershipDetails: {
          joinAs: mapPartnerType(formData.partnerType),
          motivation: formData.message || "No additional information provided",
        },

        source: "geotrack",
      };

      console.log("Submitting partner application:", payload);

      await submitPartnerApplication(payload);

      toast.success("Thank you for your interest! We'll review your application and get back to you within 48 hours.");
      
      // Reset form
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        website: "",
        companySize: "",
        partnerType: "",
        experience: "",
        message: ""
      });

    } catch (error: any) {
      console.error("Partner application failed:", error);
      console.error("Error response:", error.response?.data);
      
      const errorMessage = error.response?.data?.message 
        || error.message 
        || "Something went wrong. Please try again.";
      
      toast.error(`Submission failed: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="bg-gradient-to-br from-primary via-primary to-accent text-white py-20 opacity-0"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Become a WorkTrack Pro Partner
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Join our growing network of certified partners and help businesses transform their field sales operations
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Joint Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div ref={benefitsRef} className="py-16 opacity-0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Partner with WorkTrack Pro?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Build your business with industry-leading field sales tracking software
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue Growth</h3>
              <p className="text-muted-foreground">
                Expand your service offerings and increase revenue with our high-demand solutions
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification Program</h3>
              <p className="text-muted-foreground">
                Comprehensive training and certification to ensure expertise and credibility
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
              <p className="text-muted-foreground">
                Access qualified leads and opportunities through our partner portal
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing Support</h3>
              <p className="text-muted-foreground">
                Co-marketing opportunities and access to marketing materials and resources
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Priority technical support and dedicated partner success manager
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Access</h3>
              <p className="text-muted-foreground">
                Early access to new features and products before public release
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Partner Program Tiers */}
      <div ref={programRef} className="py-16 bg-gray-50 opacity-0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Partner Program Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Silver Partner</h3>
                <p className="text-muted-foreground">Entry-level partnership</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Basic certification training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Partner portal access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Marketing materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Standard support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-primary hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Gold Partner</h3>
                <p className="text-muted-foreground">Advanced partnership</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">All Silver benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Advanced certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Priority lead routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Co-marketing opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Platinum Partner</h3>
                <p className="text-muted-foreground">Elite partnership</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">All Gold benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Master certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Exclusive territory rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Partner success manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Early access to features</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div ref={formRef} className="py-16 opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Partner Application Form
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to start your journey as a WorkTrack Pro partner
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your country"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Company Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Company Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Partner Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select type</option>
                      <option value="reseller">Reseller Partner</option>
                      <option value="distributor">Distributor</option>
                      <option value="implementation">Implementation Partner</option>
                      <option value="technology">Technology Partner</option>
                      <option value="referral">Referral Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us why you want to become a partner and what makes your company unique..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    By submitting this form, you agree to our terms and conditions
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our partner team is here to help you understand the program and benefits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onNavigateToPartnerDirectory}
              className="bg-white text-primary hover:bg-white/90"
            >
              View Partner Directory
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onContactClick}
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Contact Partner Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}