import { Request, Response } from "express";
import { organizationService } from "../services/organizationService";

const createOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await organizationService.createOrganization(req.body);
    res.status(201).json(organization);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await organizationService.getOrganizations();
    res.status(200).json(organizations);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getOrganizationById = async (req: Request, res: Response) => {
  try {
    const organization = await organizationService.getOrganizationById(
      Number(req.params.id)
    );
    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ error: "Organization not found" });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await organizationService.updateOrganization(
      Number(req.params.id),
      req.body
    );
    res.status(200).json(organization);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrganization = async (req: Request, res: Response) => {
  try {
    await organizationService.deleteOrganization(Number(req.params.id));
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const organizationController = {
  createOrganization,
  getOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
};
