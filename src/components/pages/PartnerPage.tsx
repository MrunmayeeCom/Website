import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { 
  Users, 
  Award, 
  Building2, 
  MapPin,
  Search,
  CheckCircle2,
  TrendingUp,
  Globe,
  Handshake
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PartnerPageProps {
  onNavigateHome: () => void;
  onNavigateToBecomePartner: () => void;
}



interface Partner {
  id: number;
  name: string;
  tier: 'GOLD' | 'SILVER' | 'PLATINUM';
  location: string;
  description: string;
  specialties: string[];
}

const mockPartners: Partner[] = [
  {
    id: 1,
    name: "TechVision Solutions Private Limited",
    tier: "GOLD",
    location: "MUMBAI, DELHI, BANGALORE, IN",
    description: "An award-winning WorkTrack Pro Gold Partner with over 10 years of expertise in field sales consultation, customization, API integration, and mobile apps integration to enhance your digital experience.",
    specialties: ["API Integration", "Custom Development", "Training"]
  },
  {
    id: 2,
    name: "Digital Transform Consulting",
    tier: "GOLD",
    location: "DELHI, MUMBAI, BANGALORE, GUJRAT, HYDERABAD, IN",
    description: "Proficient IT consulting firm empowering organizations with expert guidance and customized WorkTrack Pro solutions, driving efficient digital transformations to achieve their business goals.",
    specialties: ["Consulting", "Implementation", "Support"]
  },
  {
    id: 3,
    name: "SmartBiz Solutions Private Limited",
    tier: "GOLD",
    location: "MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN",
    description: "Leading WorkTrack Pro implementation partner specializing in field sales automation, GPS tracking solutions, and Tally ERP integration for businesses across India.",
    specialties: ["ERP Integration", "GPS Solutions", "Automation"]
  },
  {
    id: 4,
    name: "Enterprise Solutions Group",
    tier: "SILVER",
    location: "JAIPUR, CHENNAI, DUBAI, SHARJAH, ABU DHABI, IN, DUBAI",
    description: "Comprehensive business solutions provider with expertise in WorkTrack Pro deployment, sales team management, and real-time tracking implementations.",
    specialties: ["Deployment", "Team Management", "Analytics"]
  }
];

export function PartnerPage({ onNavigateHome, onNavigateToBecomePartner }: PartnerPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<'directory' | 'become-partner'>('directory');
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

    [heroRef, benefitsRef, partnersRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const filteredPartners = mockPartners.filter(partner =>
    partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="bg-gradient-to-br from-primary via-primary to-accent text-white py-20 opacity-0"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find a WorkTrack Pro Partner in your area!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Connect with certified partners who can help you implement and optimize WorkTrack Pro
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 -mb-px">
            <button
              onClick={() => navigate("/become-partner")}
              className="px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
            >
              Become a partner
            </button>
            <button
              onClick={() => setSelectedTab('directory')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'directory'
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:border-primary hover:text-primary'
              }`}
            >
              Partner directory
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Benefits Section */}
          <div ref={benefitsRef} className="mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              WorkTrack Pro Partners can help you create and manage your field sales!
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              Our partners are there to make your WorkTrack Pro experience more pleasant and productive – from choosing a subscription plan to implementation, customization, and employee training. Browse our Partner Directory to find a WorkTrack Pro partner in your area and contact them directly or use the form below to get a price estimate for your implementation project.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Certified Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  All partners are certified and trained in WorkTrack Pro implementation
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Proven Success</h3>
                <p className="text-sm text-muted-foreground">
                  Track record of successful implementations across industries
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Local Presence</h3>
                <p className="text-sm text-muted-foreground">
                  Partners located across major cities for on-site support
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Full Support</h3>
                <p className="text-sm text-muted-foreground">
                  End-to-end support from consultation to training and beyond
                </p>
              </Card>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search partners by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Partners Directory */}
          <div ref={partnersRef} className="opacity-0">
            <div className="grid gap-6">
              {filteredPartners.map((partner) => (
                <Card key={partner.id} className="p-6 hover:shadow-lg transition-all hover:scale-[1.01]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-4 h-4 text-amber-500" />
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              partner.tier === 'GOLD' 
                                ? 'bg-amber-100 text-amber-800'
                                : partner.tier === 'PLATINUM'
                                ? 'bg-slate-100 text-slate-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {partner.tier}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{partner.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {partner.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {partner.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 md:min-w-[150px]">
                      <Button className="w-full">
                        Contact Partner
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No partners found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to become a partner?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our network of certified partners and help businesses transform their field sales operations
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={onNavigateToBecomePartner}
            className="bg-white text-primary hover:bg-white/90"
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </div>
  );
}