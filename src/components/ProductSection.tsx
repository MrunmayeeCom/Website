import { Card, CardContent } from "./ui/card";
import { 
  DollarSign,
  Package,
  ShoppingCart,
  Users2,
  MapPin,
  RefreshCw,
  Shield,
  BarChart3
} from "lucide-react";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export function ProductSection() {
  const productModules = [
    {
      icon: DollarSign,
      title: "Advanced Financial Management",
      description: "Complete accounting, budgeting, and financial reporting for your business",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Package,
      title: "Real-time Inventory & Stock Tracking",
      description: "Monitor stock levels, manage warehouses, and optimize inventory",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: ShoppingCart,
      title: "Sales, CRM & Customer Insights",
      description: "Manage customer relationships and drive sales growth",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: Users2,
      title: "Purchase & Vendor Automation",
      description: "Streamline procurement and vendor management processes",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "GPS Field Force Tracking",
      description: "Real-time location tracking for field sales teams",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600"
    },
    {
      icon: RefreshCw,
      title: "Tally ERP Integration",
      description: "Seamless bidirectional sync with Tally ERP software",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with role-based access control",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Powerful dashboards and customizable reports",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section id="product" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            The globally trusted{" "}
            <span className="text-accent">field sales software</span>
            <br />
            for growing enterprises
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={index} 
                className={`${module.bgColor} ${module.borderColor} border-2 hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className={`mb-6 p-6 rounded-2xl ${module.bgColor} border ${module.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-16 w-16 ${module.iconColor}`} />
                  </div>
                  <h3 className="text-lg mb-3 text-primary min-h-[3.5rem] flex items-center">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}