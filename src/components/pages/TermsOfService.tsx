import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 6, 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Trackon, you accept and agree to be bound by the terms and provisions of 
                this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">2. Service Description</h2>
              <p className="text-muted-foreground">
                Trackon provides field sales tracking software with features including:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-muted-foreground">
                <li>Real-time GPS location tracking</li>
                <li>Client management with CRUD operations</li>
                <li>Pincode-based client filtering</li>
                <li>Tally ERP integration and synchronization</li>
                <li>Administrative dashboard and reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-3">Users agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of their account credentials</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not attempt to breach security or access unauthorized data</li>
                <li>Obtain necessary consent from employees for location tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">4. Location Tracking Consent</h2>
              <p className="text-muted-foreground">
                By using Trackon's location tracking features, organizations agree to obtain proper consent from 
                field representatives whose locations are being tracked. Organizations are responsible for compliance 
                with local employment and privacy laws regarding employee monitoring.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">5. Data Usage and Ownership</h2>
              <p className="text-muted-foreground">
                All client data, location logs, and business information entered into Trackon remain your property. 
                We claim no ownership rights over your data. You grant us permission to use your data solely to 
                provide and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">6. Service Availability</h2>
              <p className="text-muted-foreground">
                We strive to maintain 99.9% uptime but cannot guarantee uninterrupted access. The service may be 
                temporarily unavailable for maintenance, updates, or due to circumstances beyond our control. 
                We are not liable for any losses resulting from service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">7. Subscription and Payment</h2>
              <p className="text-muted-foreground">
                Trackon operates on a subscription basis. Payment terms, pricing, and refund policies are outlined 
                in your subscription agreement. We reserve the right to modify pricing with 30 days notice to 
                existing subscribers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">8. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate accounts that violate these terms or engage in 
                fraudulent or illegal activities. Upon termination, you may request an export of your data 
                within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">9. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Trackon is provided "as is" without warranties of any kind. We are not liable for indirect, 
                incidental, or consequential damages arising from use of the service. Our total liability 
                shall not exceed the amount paid for the service in the past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may modify these terms at any time. Users will be notified of significant changes via email. 
                Continued use of the service after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">11. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these terms, contact us at legal@trackon.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
