import { Router } from "express";
import InvoiceLineItemController from "../controllers/invoiceLineItemController";

const router = Router();

router.post("/:invoiceId", InvoiceLineItemController.generateInvoiceLineItems);

export default router;
