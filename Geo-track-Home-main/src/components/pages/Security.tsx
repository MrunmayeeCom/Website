import { ArrowLeft, Shield, Lock, Database, Eye, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface SecurityProps {
  onBack: () => void;
}

export function Security({ onBack }: SecurityProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-4">Security</h1>
          <p className="text-muted-foreground mb-8">
            At Trackon, we take security seriously. Learn about our security measures and best practices.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl mb-4">Security Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>JWT Authentication</CardTitle>
                    <CardDescription>
                      Secure token-based authentication system with automatic expiration and refresh mechanisms
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Lock className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>End-to-End Encryption</CardTitle>
                    <CardDescription>
                      All data transmissions use HTTPS/TLS encryption to protect information in transit
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Database className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Encrypted Storage</CardTitle>
                    <CardDescription>
                      Sensitive data is encrypted at rest using industry-standard encryption algorithms
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Eye className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle>Access Controls</CardTitle>
                    <CardDescription>
                      Role-based access control ensures users only access authorized data and features
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                We implement multiple layers of security to protect your data:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Database Security:</strong> Regular backups, automated monitoring, and intrusion detection systems
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Password Protection:</strong> Passwords are hashed using bcrypt with salt for maximum security
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Session Management:</strong> Automatic logout after inactivity and secure session handling
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>API Security:</strong> Rate limiting, request validation, and API key management
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Location Data Security</h2>
              <p className="text-muted-foreground mb-3">
                GPS location data requires special protection measures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Location data is transmitted over secure HTTPS connections</li>
                <li>Coordinates are stored with encryption and access logging</li>
                <li>Location history can be automatically purged based on retention policies</li>
                <li>Access to location data is restricted to authorized administrators</li>
                <li>Mobile apps use secure local storage for temporary location caching</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Compliance & Certifications</h2>
              <p className="text-muted-foreground mb-3">
                Trackon complies with industry standards and regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>GDPR compliance for European users</li>
                <li>SOC 2 Type II certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>ISO 27001 information security management practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Security Best Practices</h2>
              <p className="text-muted-foreground mb-3">
                We recommend following these security practices:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use strong, unique passwords for your Trackon account</li>
                <li>Enable two-factor authentication when available</li>
                <li>Regularly review user access permissions</li>
                <li>Log out from shared or public devices</li>
                <li>Keep mobile apps updated to the latest version</li>
                <li>Report suspicious activity immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Incident Response</h2>
              <p className="text-muted-foreground">
                In the event of a security incident, we have established procedures to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-muted-foreground">
                <li>Quickly identify and contain the incident</li>
                <li>Assess the impact and affected data</li>
                <li>Notify affected users within 72 hours as required by law</li>
                <li>Implement corrective measures to prevent recurrence</li>
                <li>Conduct post-incident analysis and reporting</li>
              </ul>
            </section>

            <section className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Report Security Issues</h3>
                  <p className="text-muted-foreground">
                    If you discover a security vulnerability or have concerns about our security practices, 
                    please report it immediately to our security team at <strong>security@trackon.com</strong>. 
                    We take all reports seriously and will respond promptly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Regular Updates</h2>
              <p className="text-muted-foreground">
                We continuously update our security measures to address emerging threats and maintain the highest 
                standards of data protection. Our security documentation is reviewed quarterly and updated as needed.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
