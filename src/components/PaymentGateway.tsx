import { useState } from "react";
import { ArrowLeft, CreditCard, Wallet, Building, Shield, Lock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { toast } from "sonner@2.0.3";

interface PaymentGatewayProps {
  selectedPlan: string;
  billingCycle: 'monthly' | 'quarterly' | 'yearly';
  totalAmount: number;
  billingInfo: any;
  onBack: () => void;
  onPaymentSuccess: () => void;
}

export function PaymentGateway({ 
  selectedPlan, 
  billingCycle, 
  totalAmount, 
  billingInfo,
  onBack,
  onPaymentSuccess 
}: PaymentGatewayProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');
  const [processing, setProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });
  const [upiId, setUpiId] = useState("");
  const [bankName, setBankName] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      toast.success("Payment successful! Welcome to WorkTrack Pro!");
      onPaymentSuccess();
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const getBillingText = () => {
    switch (billingCycle) {
      case 'monthly':
        return 'Monthly';
      case 'quarterly':
        return 'Quarterly';
      case 'yearly':
        return 'Yearly';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Checkout
        </Button>

        <div className="text-center mb-8">
          <h1 className="mb-2">Secure Payment</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="h-4 w-4 text-green-600" />
            <p>Your payment information is secure and encrypted</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>
                  Choose your preferred payment method
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as any)} className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5" />
                      <div className="flex-1">
                        <p>Credit / Debit Card</p>
                        <p className="text-xs text-muted-foreground">Visa, Mastercard, RuPay</p>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Wallet className="h-5 w-5" />
                      <div className="flex-1">
                        <p>UPI</p>
                        <p className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Building className="h-5 w-5" />
                      <div className="flex-1">
                        <p>Net Banking</p>
                        <p className="text-xs text-muted-foreground">All major banks supported</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <form onSubmit={handlePayment} className="space-y-6">
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardDetails.cardNumber}
                          onChange={(e) => {
                            const formatted = formatCardNumber(e.target.value.slice(0, 19));
                            setCardDetails(prev => ({ ...prev, cardNumber: formatted }));
                          }}
                          maxLength={19}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name *</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          value={cardDetails.cardName}
                          onChange={(e) => setCardDetails(prev => ({ ...prev, cardName: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={cardDetails.expiryDate}
                            onChange={(e) => {
                              const formatted = formatExpiryDate(e.target.value);
                              setCardDetails(prev => ({ ...prev, expiryDate: formatted }));
                            }}
                            maxLength={5}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            type="password"
                            placeholder="123"
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value.slice(0, 3) }))}
                            maxLength={3}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upiId">UPI ID *</Label>
                        <Input
                          id="upiId"
                          placeholder="yourname@upi"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          required
                        />
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          You will receive a payment request on your UPI app. Please approve it to complete the transaction.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bankName">Select Your Bank *</Label>
                        <select
                          id="bankName"
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        >
                          <option value="">Choose a bank</option>
                          <option value="sbi">State Bank of India</option>
                          <option value="hdfc">HDFC Bank</option>
                          <option value="icici">ICICI Bank</option>
                          <option value="axis">Axis Bank</option>
                          <option value="pnb">Punjab National Bank</option>
                          <option value="kotak">Kotak Mahindra Bank</option>
                          <option value="other">Other Banks</option>
                        </select>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          You will be redirected to your bank's secure login page to complete the payment.
                        </p>
                      </div>
                    </div>
                  )}

                  <Separator />

                  <div className="flex items-start gap-2 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-green-900 dark:text-green-100 mb-1">
                        Secure Payment
                      </p>
                      <p className="text-green-700 dark:text-green-300 text-xs">
                        All transactions are encrypted and secure. We never store your card details.
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={processing}
                  >
                    {processing ? (
                      <>Processing Payment...</>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Pay ₹{totalAmount.toLocaleString()}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                <Shield className="h-8 w-8 text-green-600" />
                <p className="text-xs">SSL Encrypted</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                <Lock className="h-8 w-8 text-blue-600" />
                <p className="text-xs">PCI Compliant</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                <CheckCircle2 className="h-8 w-8 text-purple-600" />
                <p className="text-xs">Money Back Guarantee</p>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Plan Details</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{selectedPlan}</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                        {getBillingText()}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Billing Information</p>
                  <div className="space-y-1 text-sm">
                    <p>{billingInfo.companyName}</p>
                    <p className="text-muted-foreground">{billingInfo.email}</p>
                    <p className="text-muted-foreground">{billingInfo.phone}</p>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-baseline">
                  <span>Total Amount</span>
                  <span className="text-2xl">₹{totalAmount.toLocaleString()}</span>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg space-y-2">
                  <p className="text-sm">14-Day Free Trial</p>
                  <p className="text-xs text-muted-foreground">
                    You won't be charged until your trial ends. Cancel anytime during the trial period.
                  </p>
                </div>

                <Separator />

                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>✓ Instant access after payment</p>
                  <p>✓ 24/7 customer support</p>
                  <p>✓ Money-back guarantee</p>
                  <p>✓ Free updates & maintenance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}