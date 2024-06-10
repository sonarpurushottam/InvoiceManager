import { Request, Response } from "express";
import InvoiceLineItemService from "../services/invoiceLineItemService";

class InvoiceLineItemController {
  static async generateInvoiceLineItems(req: Request, res: Response) {
    const { invoiceId } = req.params;

    try {
      const invoiceLineItems =
        await InvoiceLineItemService.generateInvoiceLineItems(invoiceId);
      res.status(201).json(invoiceLineItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default InvoiceLineItemController;
