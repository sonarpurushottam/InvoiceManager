import Payment from "../models/paymentModel";
import Invoice from "../models/invoiceModel";
import { v4 as uuidv4 } from "uuid";

class PaymentService {
  static async createPayment(paymentData: {
    paymentDate: Date;
    forExAmount: number;
    currency: string;
    indianAmount: number;
    invoiceId: string;
    isFullPayment: boolean;
    bankPaymentDetails: string;
  }) {
    console.log("Payment data received:", paymentData);

    const requiredFields: (keyof typeof paymentData)[] = [
      "paymentDate",
      "forExAmount",
      "currency",
      "indianAmount",
      "invoiceId",
      "isFullPayment",
      "bankPaymentDetails",
    ];

    for (const field of requiredFields) {
      if (paymentData[field] === undefined || paymentData[field] === null) {
        throw new Error(`${field} is required`);
      }
    }

    const payment = await Payment.create({
      id: uuidv4(),
      ...paymentData,
    });

    const invoice = await Invoice.findByPk(payment.invoiceId);

    if (!invoice) {
      throw new Error(`Invoice with id ${payment.invoiceId} not found`);
    }

    if (payment.isFullPayment) {
      invoice.status = "Paid";
      invoice.paymentReceivedOn = payment.paymentDate;
    }

    if (invoice.invoiceSentOn === null) {
      invoice.invoiceSentOn = new Date();
    }

    await invoice.save();

    return payment;
  }

  static async getPaymentsByInvoice(invoiceId: string) {
    const payments = await Payment.findAll({ where: { invoiceId } });
    return payments;
  }
}

export default PaymentService;
