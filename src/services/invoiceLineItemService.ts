import Invoice from "../models/invoiceModel";
import InvoiceLineItem from "../models/invoiceLineItemModel";
import SowPaymentPlanLineItem from "../models/sowPaymentPlanLineItemModel";
import { v4 as uuidv4 } from "uuid";

class InvoiceLineItemService {
  static async generateInvoiceLineItems(invoiceId: string) {
    const invoice = await Invoice.findByPk(invoiceId);

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    console.log(`Invoice found: ${JSON.stringify(invoice)}`);
    console.log(`Using paymentPlanId: ${invoice.paymentPlanId}`);

    const sowPaymentPlanLineItems = await SowPaymentPlanLineItem.findAll({
      where: {
        sowPaymentPlanId: invoice.paymentPlanId,
      },
    });

    console.log(
      `SowPaymentPlanLineItems: ${JSON.stringify(sowPaymentPlanLineItems)}`
    );

    if (sowPaymentPlanLineItems.length === 0) {
      console.log(
        "No SOW Payment Plan Line Items found for the given payment plan ID."
      );
      return [];
    }

    const invoiceLineItems = await Promise.all(
      sowPaymentPlanLineItems.map(async (item) => {
        const invoiceLineItem = await InvoiceLineItem.create({
          id: uuidv4(),
          invoiceId: invoice.id,
          orderId: item.orderId,
          particular: item.particular,
          rate: item.rate,
          unit: item.unit,
          total: item.total,
        });

        console.log(
          `Created InvoiceLineItem: ${JSON.stringify(invoiceLineItem)}`
        );
        return invoiceLineItem;
      })
    );

    return invoiceLineItems;
  }
}

export default InvoiceLineItemService;
