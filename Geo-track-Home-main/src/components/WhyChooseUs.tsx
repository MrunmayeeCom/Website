import { Card, CardContent } from "./ui/card";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Pincode-Based Intelligence",
      description: "Unique smart filtering that automatically shows only clients in your current pincode area using reverse geocoding technology."
    },
    {
      title: "Seamless Tally Integration",
      description: "Bidirectional sync with Tally ERP, bulk import clients, automatic duplicate detection and removal for clean data."
    },
    {
      title: "Real-Time GPS Tracking",
      description: "Track field sales team location every 5 minutes with 99.9% accuracy, complete history, and activity type detection."
    },
    {
      title: "Android Mobile App",
      description: "Native Kotlin app with background location service, offline support, and real-time data synchronization."
    },
    {
      title: "Scalable Architecture",
      description: "Handle 10,000+ clients efficiently with database indexing, pagination, and optimized queries for fast performance."
    },
    {
      title: "Complete Client Management",
      description: "Full CRUD operations, search, filter, GPS coordinates, notes, status tracking, and comprehensive client profiles."
    }
  ];

  const benefits = [
    "Automatic pincode detection from GPS",
    "Smart duplicate cleanup by name/email/phone/location",
    "Interactive map with client markers",
    "Location history with date range filtering",
    "Tally GUID bidirectional mapping",
    "Secure JWT authentication with bcrypt"
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Why Choose WorkTrack Pro?
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide the most comprehensive, accurate, and intelligent field sales tracking 
            solution with unique pincode-based filtering and seamless Tally integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-accent/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
              <CardContent className="pt-6">
                <h3 className="mb-2 text-primary">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
}