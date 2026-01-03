import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 6, 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                Trackon collects information necessary to provide field sales tracking services. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-muted-foreground">
                <li>Account information (name, email, phone number)</li>
                <li>GPS location data from field sales representatives</li>
                <li>Client information and visit logs</li>
                <li>Device information and usage data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-muted-foreground">
                <li>Provide real-time GPS tracking and location services</li>
                <li>Manage client databases and visit history</li>
                <li>Synchronize data with Tally ERP systems</li>
                <li>Generate reports and analytics</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">3. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures including JWT authentication, encrypted data storage, 
                and secure API communications. Location data is transmitted over secure HTTPS connections and stored 
                in compliance with data protection regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">4. Data Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell or share your personal information with third parties except as necessary to provide 
                our services (e.g., Tally ERP integration) or as required by law. All third-party integrations 
                comply with our strict data protection standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, modify, or delete your personal information at any time. You can also 
                request a copy of your data or opt-out of certain data collection practices. Contact us at 
                privacy@trackon.com for data-related requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">6. Location Data</h2>
              <p className="text-muted-foreground">
                GPS location tracking is a core feature of Trackon. Location data is collected every 5 minutes 
                when the mobile app is active. Users can disable location tracking through the app settings, 
                but this will limit functionality. Location history is retained for reporting purposes and can 
                be deleted upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@trackon.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
