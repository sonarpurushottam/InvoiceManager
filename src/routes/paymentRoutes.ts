import { Router } from "express";
import PaymentController from "../controllers/paymentController";

const router = Router();

router.post("/", PaymentController.createPayment);
router.get("/:invoiceId", PaymentController.getPaymentsByInvoice);

export default router;
