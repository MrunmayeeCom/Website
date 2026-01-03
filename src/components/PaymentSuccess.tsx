import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, Download, Mail, ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface PaymentSuccessProps {
  selectedPlan: string;
  billingCycle: string;
}

export function PaymentSuccess({ selectedPlan, billingCycle }: PaymentSuccessProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://geo-track-em3s.onrender.com/dashboard";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-background py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card className="border-green-200 dark:border-green-800">
          <CardContent className="pt-12 pb-8 text-center space-y-8">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-6">
                <CheckCircle2 className="h-20 w-20 text-green-600 dark:text-green-400" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl">Payment Successful!</h1>
              <p className="text-lg text-muted-foreground">
                Welcome to WorkTrack Pro
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg text-left space-y-3">
              <h3 className="text-lg">Order Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan:</span>
                  <span>{selectedPlan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Billing Cycle:</span>
                  <span>{billingCycle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trial Period:</span>
                  <span>14 Days Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-600 dark:text-green-400">Active</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-left p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="mb-1">Confirmation email sent</p>
                  <p className="text-muted-foreground text-xs">
                    Check your inbox for setup instructions and login credentials for the mobile app.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <Download className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="mb-1">Download Mobile App</p>
                  <p className="text-muted-foreground text-xs">
                    Get the WorkTrack Pro Android app from Google Play Store to start tracking your field team.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="space-y-3 pt-4">
              <Button size="lg" className="w-full" onClick={onGoToDashboard}>
                Go to Dashboard
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Need help getting started?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Contact our support team
                </a>
              </p>
            </div> */}

            <div className="pt-6 border-t">
              <p className="text-xs text-muted-foreground">
                Transaction ID: TXN{Date.now().toString().slice(-10)} • {new Date().toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Questions? Email us at <a href="mailto:support@trackon.com" className="text-blue-600 hover:underline">support@trackon.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
