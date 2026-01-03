import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

interface FAQSectionProps {
  onContactClick?: (type: 'support' | 'sales') => void;
}

export function FAQSection({ onContactClick }: FAQSectionProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqCategories: FAQCategory[] = [
    {
      category: "General",
      faqs: [
        {
          question: "What is WorkTrack Pro?",
          answer: "WorkTrack Pro is a comprehensive field sales tracking application that provides real-time GPS location tracking, pincode-based client filtering, and seamless Tally ERP integration. It helps businesses manage their field sales teams efficiently with automatic location logging, client management, and interactive map views."
        },
        {
          question: "What platforms are supported?",
          answer: "WorkTrack Pro includes a web-based admin panel accessible from any browser and a native Android mobile app for field executives. The Android app is built with Kotlin and supports offline mode with automatic data synchronization when internet connection is restored."
        },
        {
          question: "Is there a free trial available?",
          answer: "Yes! We offer a 14-day free trial for all paid plans with no credit card required. You can test all features including GPS tracking, client management, Tally integration, and analytics. The Starter plan is also completely free for teams with up to 5 field executives."
        }
      ]
    },
    {
      category: "Technical",
      faqs: [
        {
          question: "How does the GPS tracking work?",
          answer: "Our Android mobile app uses foreground service to automatically log GPS coordinates every 5 minutes (or 3 minutes for Professional plans). The location data includes accuracy metrics, activity type detection (walking, driving), and complete history with timestamps. All tracking happens in the background without affecting phone battery significantly."
        },
        {
          question: "What is pincode-based filtering?",
          answer: "This unique feature automatically filters and displays only clients located in the sales representative's current pincode area using reverse geocoding technology. When a field executive's location changes, the system automatically updates the client list to show only relevant clients in that area, making visits more efficient."
        },
        {
          question: "Can I integrate with Tally ERP?",
          answer: "Yes! WorkTrack Pro offers seamless bidirectional synchronization with Tally ERP. You can bulk import clients from Tally, maintain GUID mapping for accurate data sync, automatically detect and remove duplicates, and track complete sync history. The integration ensures your client data stays consistent across both platforms."
        }
      ]
    },
    {
      category: "Security & Privacy",
      faqs: [
        {
          question: "How secure is my data?",
          answer: "We take security seriously. All data is protected with JWT token-based authentication, bcrypt password hashing, and encrypted storage. API endpoints are protected and user sessions expire after 7 days. We also maintain regular backups and use industry-standard security practices to keep your data safe."
        },
        {
          question: "Do you comply with data protection regulations?",
          answer: "Yes, we comply with all major data protection regulations including GDPR and local privacy laws. Your data is stored securely, and we provide tools for data export and deletion upon request. We never share your data with third parties without your explicit consent."
        }
      ]
    },
    {
      category: "Plans & Pricing",
      faqs: [
        {
          question: "How many field executives can I track?",
          answer: "It depends on your plan: Starter (Free) supports up to 5 executives, Professional supports up to 25, Business supports up to 100, and Enterprise offers unlimited field executives. All plans include the same core features with differences in user limits and advanced capabilities."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes! You can upgrade or downgrade your plan at any time from the admin dashboard. When upgrading, you'll be charged a prorated amount for the remainder of your billing cycle. When downgrading, the change will take effect at the end of your current billing period."
        },
        {
          question: "Can I customize the platform for my business?",
          answer: "Yes! Professional and Business plans include custom fields for client data, while Enterprise plan offers complete customization including white-label options, API access for custom integrations, dedicated account manager, and custom training sessions tailored to your business needs."
        }
      ]
    },
    {
      category: "Features & Functionality",
      faqs: [
        {
          question: "What kind of reports can I generate?",
          answer: "The platform provides comprehensive analytics including visit patterns, client distribution by pincode, team performance metrics, location accuracy reports, and activity logs. You can filter reports by date range, export data to CSV/Excel, and view detailed histories for each field executive."
        },
        {
          question: "Does the app work offline?",
          answer: "Yes! The Android mobile app has offline capabilities. Location data and client information are cached locally on the device and automatically synchronized with the server when an internet connection is restored. This ensures your field team can work seamlessly even in areas with poor connectivity."
        }
      ]
    }
  ];

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
      setOpenQuestion(null);
    } else {
      setOpenCategory(category);
      setOpenQuestion(null);
    }
  };

  const toggleQuestion = (questionKey: string) => {
    if (openQuestion === questionKey) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(questionKey);
    }
  };

  return (
    <section
      id="faqs"
      className="py-20 bg-gradient-to-b from-white to-secondary/30 min-h-[600px]"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent mb-4">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about WorkTrack Pro
          </p>
        </div>

        <div className="space-y-4">
          {faqCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white border-2 border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors"
              >
                <h3 className="text-lg text-primary">
                  {category.category}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-primary transition-transform duration-300 ${
                    openCategory === category.category ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Questions */}
              {openCategory === category.category && (
                <div className="border-t border-border">
                  {category.faqs.map((faq, faqIndex) => {
                    const questionKey = `${categoryIndex}-${faqIndex}`;
                    return (
                      <div key={faqIndex} className="border-b border-border last:border-b-0">
                        {/* Question */}
                        <button
                          onClick={() => toggleQuestion(questionKey)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                        >
                          <span className="pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown 
                            className={`h-4 w-4 text-accent flex-shrink-0 transition-transform duration-200 ${
                              openQuestion === questionKey ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Answer */}
                        {openQuestion === questionKey && (
                          <div className="px-6 pb-4 pt-2">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-accent to-primary text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl mb-2">Still Have Questions?</h3>
          <p className="mb-6 text-white/90">
            Can't find the answer you're looking for? Our support team is here to help you.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 shadow-md"
            onClick={() => onContactClick?.('support')}
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}