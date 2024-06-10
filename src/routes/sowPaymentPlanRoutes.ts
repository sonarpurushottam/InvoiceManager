import { Router } from "express";
import SowPaymentPlanController from "../controllers/sowPaymentPlanController";

const router = Router();

router.post("/", SowPaymentPlanController.createSowPaymentPlan);
router.get(
  "/sow-payment-plans",
  SowPaymentPlanController.getAllSowPaymentPlans
);
router.get(
  "/sow-payment-plans/:id",
  SowPaymentPlanController.getSowPaymentPlanById
);
router.put(
  "/sow-payment-plans/:id",
  SowPaymentPlanController.updateSowPaymentPlan
);
router.delete(
  "/sow-payment-plans/:id",
  SowPaymentPlanController.deleteSowPaymentPlan
);

export default router;
