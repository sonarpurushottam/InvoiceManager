import { Router } from "express";
import SowController from "../controllers/sowController";

const router = Router();

router.post("/", SowController.createSow);
router.get("/sows", SowController.getAllSows);
router.get("/sows/:id", SowController.getSowById);
router.put("/sows/:id", SowController.updateSow);
router.delete("/sows/:id", SowController.deleteSow);

export default router;
