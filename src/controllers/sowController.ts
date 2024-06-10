import { Request, Response } from "express";
import SowService from "../services/sowService";

const createSow = async (req: Request, res: Response) => {
  try {
    const sow = await SowService.createSow(req.body);
    res.status(201).json(sow);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSows = async (req: Request, res: Response) => {
  try {
    const sows = await SowService.getAllSows();
    res.status(200).json(sows);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getSowById = async (req: Request, res: Response) => {
  try {
    const sow = await SowService.getSowById(req.params.id);
    if (sow) {
      res.status(200).json(sow);
    } else {
      res.status(404).json({ message: "SOW not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateSow = async (req: Request, res: Response) => {
  try {
    const sow = await SowService.updateSow(req.params.id, req.body);
    if (sow) {
      res.status(200).json(sow);
    } else {
      res.status(404).json({ message: "SOW not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSow = async (req: Request, res: Response) => {
  try {
    const success = await SowService.deleteSow(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "SOW not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createSow,
  getAllSows,
  getSowById,
  updateSow,
  deleteSow,
};
