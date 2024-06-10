import { Request, Response } from "express";
import PaymentService from "../services/paymentService";

class PaymentController {
  static async createPayment(req: Request, res: Response) {
    try {
      const paymentData = req.body;
      const payment = await PaymentService.createPayment(paymentData);
      res.status(201).json(payment);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  }

  static async getPaymentsByInvoice(req: Request, res: Response) {
    try {
      const { invoiceId } = req.params;
      const payments = await PaymentService.getPaymentsByInvoice(invoiceId);
      if (payments.length === 0) {
        return res
          .status(404)
          .json({ message: "No payments found for this invoice" });
      }
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default PaymentController;
