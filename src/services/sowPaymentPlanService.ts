import SowPaymentPlan from "../models/sowPaymentPlanModel";
import Sow from "../models/sowModel";
import Customer from "../models/customerModel";

const createSowPaymentPlan = async (data: any) => {
  const sow = await Sow.findByPk(data.sowId);
  const customer = await Customer.findByPk(data.customerId);

  if (!sow) {
    throw new Error("Referenced Sow record not found");
  }

  if (!customer) {
    throw new Error("Referenced Customer record not found");
  }

  return SowPaymentPlan.create(data);
};

const getAllSowPaymentPlans = async () => {
  return SowPaymentPlan.findAll();
};

const getSowPaymentPlanById = async (id: string) => {
  return SowPaymentPlan.findByPk(id);
};

const updateSowPaymentPlan = async (id: string, data: any) => {
  const sowPaymentPlan = await SowPaymentPlan.findByPk(id);
  if (sowPaymentPlan) {
    if (data.sowId) {
      const sow = await Sow.findByPk(data.sowId);
      if (!sow) {
        throw new Error("Referenced Sow record not found");
      }
    }

    if (data.customerId) {
      const customer = await Customer.findByPk(data.customerId);
      if (!customer) {
        throw new Error("Referenced Customer record not found");
      }
    }

    return sowPaymentPlan.update(data);
  }
  throw new Error(`SowPaymentPlan with ID ${id} not found`);
};

const deleteSowPaymentPlan = async (id: string) => {
  const sowPaymentPlan = await SowPaymentPlan.findByPk(id);
  if (sowPaymentPlan) {
    await sowPaymentPlan.destroy();
    return true;
  }
  throw new Error(`SowPaymentPlan with ID ${id} not found`);
};

export default {
  createSowPaymentPlan,
  getAllSowPaymentPlans,
  getSowPaymentPlanById,
  updateSowPaymentPlan,
  deleteSowPaymentPlan,
};
