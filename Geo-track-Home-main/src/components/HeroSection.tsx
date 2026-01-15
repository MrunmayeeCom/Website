import { Button } from "./ui/button";
import { ArrowRight, Play, PhoneCall } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onGetStartedClick: () => void;
  onContactSalesClick?: () => void;
}

export function HeroSection({ onGetStartedClick, onContactSalesClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-white py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Top blue bar with tagline */}
      <div className="absolute top-0 left-0 right-0 bg-primary text-white py-3 animate-fade-in z-10">
        <div className="container mx-auto px-4 text-center text-sm">
          Empowering Businesses with Strength, Backed by Reliability, and Grounded in Stability.
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
              <span className="text-accent">Smarter</span>{" "}
              <span className="text-primary">Field Sales Solutions</span>
              <br />
              <span className="text-primary">for Growing Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Streamline operations, boost productivity, and scale faster with 
              WorkTrack Pro and Tally Integration — trusted by SMEs and enterprises 
              across industries.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button size="lg" onClick={onGetStartedClick} className="gap-2 bg-accent hover:bg-accent/90 hover:scale-105 transition-transform duration-300">
                Get a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              {onContactSalesClick && (
                <Button size="lg" onClick={onContactSalesClick} className="gap-2 bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-300">
                  Contact Sales
                  <PhoneCall className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-20 animate-float" />
            <ImageWithFallback
              src="https://averlonworld.com/wp-content/uploads/2025/12/image-2-1.png"
              alt="Client Management Dashboard"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}