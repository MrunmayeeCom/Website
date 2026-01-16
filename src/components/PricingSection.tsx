import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check, Zap, Crown, Star, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useState } from "react";

interface PricingSectionProps {
  onPlanSelect: (
    plan: string,
    billingCycle: "monthly" | "quarterly" | "half-yearly" | "yearly"
  ) => void;
}

type BillingCycle = "monthly" | "quarterly" | "half-yearly" | "yearly";

interface Plan {
  licenseType: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: "monthly" | "quarterly" | "half-yearly" | "yearly";
  features: {
    featureSlug: string;
    uiLabel: string;
  }[];
  popular: boolean;
  isFree: boolean;
  isEnterprise: boolean;
  icon: any;
}

/* ---------------- CONSTANTS ---------------- */

const PLAN_ORDER: Record<string, number> = {
  starter: 1,
  professional: 2,
  business: 3,
  enterprise: 4,
};

const PLAN_UI_META: Record<string, { icon: any; popular?: boolean }> = {
  free: { icon: Star },
  basic: { icon: Zap },
  pro: { icon: Sparkles, popular: true },
  enterprise: { icon: Crown },
};

export function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>("monthly");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- HELPERS ---------------- */

  const getPrice = (plan: Plan) => {
    if (plan.isFree) return 0;

    if (billingCycle === "monthly") return plan.price;
    if (billingCycle === "quarterly") return (plan.price * 3 * 0.95); // 5% discount
    if (billingCycle === "half-yearly") return (plan.price * 6 * 0.90); // 10% discount
    return (plan.price * 12 * 0.80); // 20% discount
  };

  const getBillingText = () => {
    if (billingCycle === "monthly") return "/month";
    if (billingCycle === "quarterly") return "/quarter";
    if (billingCycle === "half-yearly") return "/6 months";
    return "/year";
  };

  const getDiscountText = () => {
    if (billingCycle === "quarterly") return "Save 5%";
    if (billingCycle === "half-yearly") return "Save 10%";
    if (billingCycle === "yearly") return "Save 20%";
    return "";
  };

  /* ---------------- DATA LOAD ---------------- */

  useEffect(() => {
    const loadGeoTrackPlans = async () => {
      try {
        const res = await fetch(
          "https://lisence-system.onrender.com/api/license/licenses-by-product/69589d3ba7306459dd47fd87",
          {
            headers: { "x-api-key": "my-secret-key-123" },
          }
        );

        const data = await res.json();

        const mapped: Plan[] = data.licenses.map((lic: any) => {
          const lt = lic.licenseType;
          const key = lt.name.toLowerCase();
          const meta = PLAN_UI_META[key] || {};

          return {
            licenseType: lt._id,
            name: lt.name,
            description: lt.description ?? `Best for ${lt.name} users`,
            price: lt.price.amount,
            billingPeriod: lt.price.billingPeriod,
            features: lt.features || [],
            popular: meta.popular ?? false,
            isFree: lt.price.amount === 0,
            isEnterprise: lt.name.toLowerCase() === "enterprise",
            icon: meta.icon || Star,
          };
        });

        setPlans(mapped);
      } catch (err) {
        console.error("Failed to load GeoTrack plans", err);
      } finally {
        setLoading(false);
      }
    };

    loadGeoTrackPlans();
  }, []);

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-white to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="mb-4 text-primary">
            <span className="text-accent">Pricing</span>
          </h2>

          <div className="mt-8 flex justify-center">
            <Tabs
              value={billingCycle}
              onValueChange={(value: string) =>
                setBillingCycle(value as BillingCycle)
              }
              className="inline-block"
            >
              <TabsList className="inline-flex h-auto p-1">
                <TabsTrigger value="monthly" className="px-4 py-2">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="quarterly" className="px-4 py-2">
                  Quarterly{" "}
                  <span className="ml-1 text-xs text-green-600 font-medium">-5%</span>
                </TabsTrigger>
                <TabsTrigger value="half-yearly" className="px-4 py-2">
                  Half-Yearly{" "}
                  <span className="ml-1 text-xs text-green-600 font-medium">-10%</span>
                </TabsTrigger>
                <TabsTrigger value="yearly" className="px-4 py-2">
                  Yearly{" "}
                  <span className="ml-1 text-xs text-green-600 font-medium">-20%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.licenseType}
                className={`relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? "border-accent shadow-xl lg:scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>{plan.name}</CardTitle>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>

                  <div className="pt-4">
                    <div className="flex items-baseline gap-2">
                      {plan.isFree ? (
                        <span className="text-4xl">Free</span>
                      ) : (
                        <>
                          <span className="text-4xl">
                            ₹{getPrice(plan).toLocaleString('en-IN')}
                          </span>
                          <span className="text-muted-foreground">
                            {getBillingText()}
                          </span>
                        </>
                      )}
                    </div>

                    {!plan.isFree && getDiscountText() && (
                      <p className="text-sm text-green-600 mt-1">
                        {getDiscountText()}
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className="w-full"
                    variant={
                      plan.isEnterprise
                        ? "secondary"
                        : plan.popular
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      onPlanSelect(plan.licenseType, billingCycle)
                    }
                  >
                    {plan.isFree
                      ? "Get Started Free"
                      : plan.isEnterprise
                      ? "Contact Sales"
                      : "Buy Now"}
                  </Button>

                  <div className="space-y-3">
                    <p className="text-sm">Includes:</p>
                    {plan.features.map((feature) => (
                      <div
                        key={feature.featureSlug}
                        className="flex items-start gap-2"
                      >
                        <Check className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature.uiLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Need a custom plan?{" "}
            <a href="/contact" className="text-accent hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}