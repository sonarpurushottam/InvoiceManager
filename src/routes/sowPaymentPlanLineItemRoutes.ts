import express from "express";
import sowPaymentPlanLineItemController from "../controllers/sowPaymentPlanLineItemController";

const router = express.Router();

router.post("/", sowPaymentPlanLineItemController.createSowPaymentPlanLineItem);
router.get("/", sowPaymentPlanLineItemController.getAllSowPaymentPlanLineItems);
router.get(
  "/:id",
  sowPaymentPlanLineItemController.getSowPaymentPlanLineItemById
);
router.put(
  "/:id",
  sowPaymentPlanLineItemController.updateSowPaymentPlanLineItem
);
router.delete(
  "/:id",
  sowPaymentPlanLineItemController.deleteSowPaymentPlanLineItem
);

export default router;
