import { DataTypes, Model } from "sequelize";
import sequelize from "../config/pgConfig";
import Customer from "./customerModel";
import Sow from "./sowModel";
import SowPaymentPlan from "./sowPaymentPlanModel";

interface InvoiceAttributes {
  id: string;

  sowId: string;
  customerId: string;
  paymentPlanId: string;
  invoiceDate: Date;
  invoiceAmount: number;
  status: string;
  invoiceSentOn?: Date;
  paymentReceivedOn?: Date;
  invoiceVersionNumber: number;
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
  public id!: string;

  public sowId!: string;
  public customerId!: string;
  public paymentPlanId!: string;
  public invoiceDate!: Date;
  public invoiceAmount!: number;
  public status!: string;
  public invoiceSentOn?: Date;
  public paymentReceivedOn?: Date;
  public invoiceVersionNumber!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Sow,
        key: "id",
      },
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Customer,
        key: "id",
      },
    },
    paymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SowPaymentPlan,
        key: "id",
      },
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    invoiceAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    paymentReceivedOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoiceVersionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Invoice",
    tableName: "invoices",
  }
);

Invoice.belongsTo(Customer, { foreignKey: "customerId" });
Invoice.belongsTo(Sow, { foreignKey: "sowId" });
Invoice.belongsTo(SowPaymentPlan, { foreignKey: "paymentPlanId" });

export default Invoice;
