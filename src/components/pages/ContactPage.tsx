import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, HeadphonesIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface ContactPageProps {
  onBack: () => void;
  initialType?: 'support' | 'sales';
}

export function ContactPage({ onBack, initialType = 'support' }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    type: initialType
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 text-white hover:text-accent hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl mb-2">Contact Us</h1>
          <p className="text-white/90 text-lg">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2 hover:border-accent/30 transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Sales Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:sales@geotrack.com" className="text-sm text-muted-foreground hover:text-accent">
                      sales@geotrack.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+911234567890" className="text-sm text-muted-foreground hover:text-accent">
                      +91 12345 67890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Customer Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:support@geotrack.com" className="text-sm text-muted-foreground hover:text-primary">
                      support@geotrack.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+911234567899" className="text-sm text-muted-foreground hover:text-primary">
                      +91 12345 67899
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">24/7 Support Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Office Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  123 Business Park,<br />
                  Tech Hub, Bangalore,<br />
                  Karnataka - 560001,<br />
                  India
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium">
                      Inquiry Type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="support">Customer Support</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 bg-accent hover:bg-accent/90"
                    >
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      size="lg" 
                      variant="outline"
                      onClick={onBack}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border-2 border-accent/20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-lg mb-2 text-primary">Looking for Quick Answers?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check out our FAQ section for instant answers to common questions.
              </p>
              <Button variant="outline" onClick={onBack} className="border-accent text-accent hover:bg-accent hover:text-white">
                Visit FAQ Section
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
