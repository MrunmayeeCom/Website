import { 
  MapPin,
  Map,
  Users,
  RefreshCw,
  Globe,
  Database,
  Shield,
  BarChart3
} from "lucide-react";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description: "Track your field sales team's location in real-time with automatic GPS logging every 5 minutes.",
      color: "blue"
    },
    {
      icon: Map,
      title: "Pincode-Based Filtering",
      description: "Automatically filter and show only clients in the sales rep's current pincode area.",
      color: "green"
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Complete CRUD operations for client data including contact details and GPS coordinates.",
      color: "orange"
    },
    {
      icon: RefreshCw,
      title: "Tally ERP Integration",
      description: "Seamless bidirectional sync with Tally ERP and automatic duplicate detection.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string }> = {
      blue: { 
        bg: "bg-blue-50/80", 
        border: "border-blue-200/60", 
        icon: "text-blue-600" 
      },
      green: { 
        bg: "bg-green-50/80", 
        border: "border-green-200/60", 
        icon: "text-green-600" 
      },
      orange: { 
        bg: "bg-orange-50/80", 
        border: "border-orange-200/60", 
        icon: "text-orange-600" 
      },
      purple: { 
        bg: "bg-purple-50/80", 
        border: "border-purple-200/60", 
        icon: "text-purple-600" 
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            End-to-End Features{" "}
            <span className="text-accent">to Run Your Business Smoothly</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From field tracking to operations, our solutions are built to streamline every 
            core function of your business. Whether you're using <span className="font-semibold">WorkTrack Pro</span> or 
            our flexible platform, we've got you covered with everything you need — and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = getColorClasses(feature.color);
            return (
              <div 
                key={index} 
                className={`${colors.bg} ${colors.border} border-2 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                  <Icon className={`h-16 w-16 ${colors.icon}`} />
                </div>
                <h3 className="text-lg mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="bg-white rounded-2xl border-2 border-border p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl mb-6 text-primary">Key Capabilities:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">Secure Authentication</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">Sales & Customer Management</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">Duplicate Prevention</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">Field Team Tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">Location History</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">Enterprise-Grade Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}