import { Request, Response } from "express";
import invoiceService from "../services/invoiceService";

const createInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await invoiceService.createInvoice(req.body);
    res.json(invoice);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAllInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await invoiceService.getAllInvoices();
    res.json(invoices);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getInvoiceById = async (req: Request, res: Response) => {
  try {
    const invoice = await invoiceService.getInvoiceById(req.params.id);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: "Invoice not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await invoiceService.updateInvoice(req.params.id, req.body);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: "Invoice not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const success = await invoiceService.deleteInvoice(req.params.id);
    if (success) {
      res.json({ message: "Invoice deleted successfully" });
    } else {
      res.status(404).json({ error: "Invoice not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const generateInvoices = async (req: Request, res: Response) => {
  try {
    await invoiceService.generateInvoices();
    res.json({ message: "Invoices generated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
  generateInvoices,
};
