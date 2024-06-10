import SowPaymentPlanLineItem from "../models/sowPaymentPlanLineItemModel";

const createSowPaymentPlanLineItem = async (data: any) =>
  SowPaymentPlanLineItem.create(data);

const getAllSowPaymentPlanLineItems = async () =>
  SowPaymentPlanLineItem.findAll();

const getSowPaymentPlanLineItemById = async (id: string) =>
  SowPaymentPlanLineItem.findByPk(id);

const updateSowPaymentPlanLineItem = async (id: string, data: any) => {
  const sowPaymentPlanLineItem = await SowPaymentPlanLineItem.findByPk(id);
  if (sowPaymentPlanLineItem) {
    return sowPaymentPlanLineItem.update(data);
  }
  return null;
};

const deleteSowPaymentPlanLineItem = async (id: string) => {
  const sowPaymentPlanLineItem = await SowPaymentPlanLineItem.findByPk(id);
  if (sowPaymentPlanLineItem) {
    await sowPaymentPlanLineItem.destroy();
    return true;
  }
  return false;
};

export default {
  createSowPaymentPlanLineItem,
  getAllSowPaymentPlanLineItems,
  getSowPaymentPlanLineItemById,
  updateSowPaymentPlanLineItem,
  deleteSowPaymentPlanLineItem,
};
