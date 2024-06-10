import { Router } from "express";
import { customerController } from "../controllers/customerController";

const router = Router();

router.post("/", customerController.createCustomer);
router.get("/", customerController.getCustomers);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export const customerRouter = router;
