import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Building2, Pill, ShoppingBasket, Wrench, Users, Briefcase, CheckCircle2 } from "lucide-react";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

interface UseCasesSectionProps {
  onGetStartedClick: () => void;
}

export function UseCasesSection({ onGetStartedClick }: UseCasesSectionProps) {
  const useCases = [
    {
      icon: Building2,
      title: "Enterprise Sales Teams",
      description: "Manage large field sales teams across multiple regions with centralized client database and location tracking.",
      color: "blue",
      features: [
        "Multi-region pincode filtering",
        "10,000+ client capacity",
        "Team performance analytics",
        "Tally ERP bulk sync"
      ]
    },
    {
      icon: ShoppingBasket,
      title: "FMCG & Distribution",
      description: "Track field executives visiting retailers and distributors with GPS verification and client visit logs.",
      color: "purple",
      features: [
        "Real-time location tracking",
        "Retailer database management",
        "Visit frequency monitoring",
        "Route optimization insights"
      ]
    },
    {
      icon: Pill,
      title: "Pharma & Healthcare",
      description: "Manage doctor visits, hospital contacts, and medical representative routes efficiently.",
      color: "green",
      features: [
        "Doctor/hospital client profiles",
        "Visit history tracking",
        "Sample distribution logs",
        "Territory-based filtering"
      ]
    },
    {
      icon: Wrench,
      title: "Service & Maintenance",
      description: "Track field technicians visiting client sites for service, repairs, and maintenance work.",
      color: "orange",
      features: [
        "Client site GPS verification",
        "Service history tracking",
        "Technician location monitoring",
        "Job completion logs"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string }> = {
      blue: { bg: "bg-blue-100 dark:bg-blue-900", icon: "text-blue-600 dark:text-blue-400" },
      purple: { bg: "bg-purple-100 dark:bg-purple-900", icon: "text-purple-600 dark:text-purple-400" },
      green: { bg: "bg-green-100 dark:bg-green-900", icon: "text-green-600 dark:text-green-400" },
      orange: { bg: "bg-orange-100 dark:bg-orange-900", icon: "text-orange-600 dark:text-orange-400" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent mb-4">
            Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Perfect for Every Field Sales Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're managing pharmaceutical reps, FMCG distributors, or service teams, 
            WorkTrack Pro adapts to your unique field sales and client management needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const colors = getColorClasses(useCase.color);
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 hover:border-accent/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <CardTitle className="text-primary">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}