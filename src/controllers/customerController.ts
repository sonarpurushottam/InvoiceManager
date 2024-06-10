import { Request, Response } from "express";
import { customerService } from "../services/customerService";

const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getCustomers();
    res.status(200).json(customers);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getCustomerById = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.getCustomerById(
      Number(req.params.id)
    );
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const updateCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.updateCustomer(
      Number(req.params.id),
      req.body
    );
    res.status(200).json(customer);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCustomer = async (req: Request, res: Response) => {
  try {
    await customerService.deleteCustomer(Number(req.params.id));
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const customerController = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
