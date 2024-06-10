import Invoice from "../models/invoiceModel";

import SowPaymentPlan from "../models/sowPaymentPlanModel";
import { Op } from "sequelize";

const createInvoice = async (data: any): Promise<Invoice> => {
  return Invoice.create(data);
};

const getAllInvoices = async (): Promise<Invoice[]> => {
  return Invoice.findAll();
};

const getInvoiceById = async (id: string): Promise<Invoice | null> => {
  return Invoice.findByPk(id);
};

const updateInvoice = async (
  id: string,
  data: any
): Promise<Invoice | null> => {
  const invoice = await Invoice.findByPk(id);
  if (invoice) {
    return invoice.update(data);
  }
  return null;
};

const deleteInvoice = async (id: string): Promise<boolean> => {
  const invoice = await Invoice.findByPk(id);
  if (invoice) {
    await invoice.destroy();
    return true;
  }
  return false;
};

const generateInvoices = async (): Promise<void> => {
  const today = new Date();
  const duePayments = await SowPaymentPlan.findAll({
    where: {
      plannedInvoiceDate: {
        [Op.lte]: today,
      },
    },
  });

  for (const payment of duePayments) {
    await Invoice.create({
      id: `INV_${Date.now()}`,

      sowId: payment.sowId,
      customerId: payment.customerId,
      paymentPlanId: payment.id,
      invoiceDate: today,
      invoiceAmount: payment.totalActualAmount,
      status: "Drafted",
      invoiceVersionNumber: 1,
    });
  }
};

export default {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
  generateInvoices,
};
