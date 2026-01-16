import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface CookiePolicyProps {
  onBack: () => void;
}

export function CookiePolicy({ onBack }: CookiePolicyProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 6, 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl mb-3">1. What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website or use our 
                application. They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">2. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-3">
                Trackon uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Authentication:</strong> To keep you logged in and maintain your session</li>
                <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                <li><strong>Security:</strong> To protect against fraudulent activity and enhance security</li>
                <li><strong>Analytics:</strong> To understand how users interact with our service</li>
                <li><strong>Performance:</strong> To optimize application performance and load times</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">3. Types of Cookies We Use</h2>
              
              <div className="space-y-4 mt-3">
                <div>
                  <h3 className="text-lg mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    Required for the service to function properly. These include authentication tokens, session 
                    identifiers, and security cookies. These cookies cannot be disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground">
                    Enable enhanced functionality such as remembering your map view preferences, dashboard layout, 
                    and language settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    Help us understand how users interact with Trackon by collecting information about pages visited, 
                    features used, and time spent on the platform. This data is aggregated and anonymous.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground">
                    Allow us to optimize the application's performance by measuring load times, caching preferences, 
                    and identifying technical issues.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-3">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                We may use third-party services that set cookies, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-muted-foreground">
                <li>Google Analytics for usage analytics</li>
                <li>Map service providers for location visualization</li>
                <li>Cloud infrastructure providers for service delivery</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                These third parties have their own privacy and cookie policies, which we encourage you to review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">5. Managing Cookies</h2>
              <p className="text-muted-foreground mb-3">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>Opt-out tools: You can opt-out of analytics cookies through your account settings</li>
                <li>Do Not Track: We respect Do Not Track browser settings where applicable</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Note that disabling certain cookies may affect the functionality of Trackon and limit your ability 
                to use some features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">6. Cookie Duration</h2>
              <p className="text-muted-foreground">
                Cookies set by Trackon have varying lifespans:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-muted-foreground">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain for a set period (typically 30-365 days) or until manually deleted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">7. Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
                or our business practices. We will notify users of significant changes through our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us at cookies@trackon.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
