import express from "express";
import bodyParser from "body-parser";
import cron from "node-cron";
import { organizationRouter } from "./routes/organizationRoutes";
import { customerRouter } from "./routes/customerRoutes";
import sowRoutes from "./routes/sowRoutes";
import sowPaymentPlanRoutes from "./routes/sowPaymentPlanRoutes";
import sowPaymentPlanLineItemRoutes from "./routes/sowPaymentPlanLineItemRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";
import invoiceService from "./services/invoiceService";
import invoiceLineItemRoutes from "./routes/invoiceLineItemRoutes";
import paymentRoutes from "./routes/paymentRoutes";

const app = express();

app.use(bodyParser.json());

app.use("/organizations", organizationRouter);
app.use("/customers", customerRouter);
app.use("/sows", sowRoutes);
app.use("/sowspaymentplan", sowPaymentPlanRoutes);
app.use("/sowPaymentPlanLineItems", sowPaymentPlanLineItemRoutes);
app.use("/invoices", invoiceRoutes);
app.use("/invoicelineitems", invoiceLineItemRoutes);
app.use("/payments", paymentRoutes);

const PORT = process.env.PORT ?? 3000;

cron.schedule("0 0 * * *", async () => {
  console.log("Running invoice generation job");
  try {
    await invoiceService.generateInvoices();
    console.log("Invoice generation job completed successfully");
  } catch (error) {
    console.error("Error during invoice generation job:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
