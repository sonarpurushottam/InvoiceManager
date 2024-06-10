import { Request, Response } from "express";
import sowPaymentPlanLineItemService from "../services/sowPaymentPlanLineItemServices";

const createSowPaymentPlanLineItem = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlanLineItem =
      await sowPaymentPlanLineItemService.createSowPaymentPlanLineItem(
        req.body
      );
    res.json(sowPaymentPlanLineItem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSowPaymentPlanLineItems = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlanLineItems =
      await sowPaymentPlanLineItemService.getAllSowPaymentPlanLineItems();
    res.json(sowPaymentPlanLineItems);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getSowPaymentPlanLineItemById = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlanLineItem =
      await sowPaymentPlanLineItemService.getSowPaymentPlanLineItemById(
        req.params.id
      );
    if (sowPaymentPlanLineItem) {
      res.json(sowPaymentPlanLineItem);
    } else {
      res.status(404).json({ error: "SowPaymentPlanLineItem not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateSowPaymentPlanLineItem = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlanLineItem =
      await sowPaymentPlanLineItemService.updateSowPaymentPlanLineItem(
        req.params.id,
        req.body
      );
    if (sowPaymentPlanLineItem) {
      res.json(sowPaymentPlanLineItem);
    } else {
      res.status(404).json({ error: "SowPaymentPlanLineItem not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSowPaymentPlanLineItem = async (req: Request, res: Response) => {
  try {
    const success =
      await sowPaymentPlanLineItemService.deleteSowPaymentPlanLineItem(
        req.params.id
      );
    if (success) {
      res.json({ message: "SowPaymentPlanLineItem deleted successfully" });
    } else {
      res.status(404).json({ error: "SowPaymentPlanLineItem not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createSowPaymentPlanLineItem,
  getAllSowPaymentPlanLineItems,
  getSowPaymentPlanLineItemById,
  updateSowPaymentPlanLineItem,
  deleteSowPaymentPlanLineItem,
};
