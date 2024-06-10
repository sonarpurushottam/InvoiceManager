import { Request, Response } from "express";
import SowPaymentPlanService from "../services/sowPaymentPlanService";

const createSowPaymentPlan = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlan = await SowPaymentPlanService.createSowPaymentPlan(
      req.body
    );
    res.status(201).json(sowPaymentPlan);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSowPaymentPlans = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlans = await SowPaymentPlanService.getAllSowPaymentPlans();
    res.status(200).json(sowPaymentPlans);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getSowPaymentPlanById = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlan = await SowPaymentPlanService.getSowPaymentPlanById(
      req.params.id
    );
    if (sowPaymentPlan) {
      res.status(200).json(sowPaymentPlan);
    } else {
      res.status(404).json({ message: "SOW Payment Plan not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateSowPaymentPlan = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlan = await SowPaymentPlanService.updateSowPaymentPlan(
      req.params.id,
      req.body
    );
    if (sowPaymentPlan) {
      res.status(200).json(sowPaymentPlan);
    } else {
      res.status(404).json({ message: "SOW Payment Plan not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSowPaymentPlan = async (req: Request, res: Response) => {
  try {
    const success = await SowPaymentPlanService.deleteSowPaymentPlan(
      req.params.id
    );
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "SOW Payment Plan not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createSowPaymentPlan,
  getAllSowPaymentPlans,
  getSowPaymentPlanById,
  updateSowPaymentPlan,
  deleteSowPaymentPlan,
};
