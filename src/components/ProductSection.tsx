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
  title: "Expense Logging",
  description: "Track expenses and maintain accurate financial records.",
  bgColor: "bg-blue-50",
  borderColor: "border-blue-200",
  iconColor: "text-blue-600"
},
{
  icon: MapPin,
  title: "Real-Time GPS Tracking",
  description: "Live tracking of field staff locations for better visibility.",
  bgColor: "bg-cyan-50",
  borderColor: "border-cyan-200",
  iconColor: "text-cyan-600"
},
{
  icon: Users2,
  title: "Client & Lead Management",
  description: "Manage client details, leads, and activity status efficiently.",
  bgColor: "bg-purple-50",
  borderColor: "border-purple-200",
  iconColor: "text-purple-600"
},
{
  icon: BarChart3,
  title: "Analytics & Reporting",
  description: "Visual dashboards and reports for data-driven decisions.",
  bgColor: "bg-emerald-50",
  borderColor: "border-emerald-200",
  iconColor: "text-emerald-600"
},
{
  icon: Package,
  title: "Data Records Management",
  description: "Organize, store, and manage system records securely.",
  bgColor: "bg-green-50",
  borderColor: "border-green-200",
  iconColor: "text-green-600"
},
{
  icon: ShoppingCart,
  title: "Bulk Data Operations",
  description: "Perform bulk actions like import, update, and export of data.",
  bgColor: "bg-orange-50",
  borderColor: "border-orange-200",
  iconColor: "text-orange-600"
},
{
  icon: RefreshCw,
  title: "Data Sync & Updates",
  description: "Ensure data consistency with real-time updates and syncing.",
  bgColor: "bg-pink-50",
  borderColor: "border-pink-200",
  iconColor: "text-pink-600"
},
{
  icon: Shield,
  title: "Role-Based Access Control",
  description: "Secure user access with permission-based controls.",
  bgColor: "bg-indigo-50",
  borderColor: "border-indigo-200",
  iconColor: "text-indigo-600"
}

  ];

  return (
    <section id="product" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            The globally trusted{" "}
            <span className="text-accent">field sales software</span>
            

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