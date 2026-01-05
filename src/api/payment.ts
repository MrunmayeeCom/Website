import axios from "axios";

import API from "./AxiosInstance";

type BillingCycle = "monthly" | "quarterly" | "yearly";

export const createOrder = async ({
  userId,
  licenseId,
  billingCycle,
}: {
  userId: string;
  licenseId: string;
  billingCycle: BillingCycle;
}) => {
  const res = await API.post(`/api/payment/create-order`, {
    userId,
    licenseId,
    billingCycle, 
  });
  return res.data;
};

// Verify payment after Razorpay returns handler response
export const verifyPayment = async (details: any) => {
  const res = await API.post(`/api/payment/verify-payment`, details);
  return res.data;
};

export const getTransactionDetails = async (transactionId: string) => {
  const res = await API.get(`/api/payment/transaction/${transactionId}`);
  return res.data;
};