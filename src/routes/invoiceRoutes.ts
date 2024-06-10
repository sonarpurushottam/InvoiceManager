import { Router } from "express";
import invoiceController from "../controllers/invoiceController";

const router = Router();

router.post("/", invoiceController.createInvoice);
router.get("/", invoiceController.getAllInvoices);
router.get("/:id", invoiceController.getInvoiceById);
router.put("/:id", invoiceController.updateInvoice);
router.delete("/:id", invoiceController.deleteInvoice);

router.post("/generate", invoiceController.generateInvoices);

export default router;
