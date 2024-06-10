import { DataTypes, Model } from "sequelize";
import sequelize from "../config/pgConfig";
import Invoice from "./invoiceModel";

interface PaymentAttributes {
  id: string;
  paymentDate: Date;
  forExAmount: number;
  currency: string;
  indianAmount: number;
  invoiceId: string;
  isFullPayment: boolean;
  bankPaymentDetails: string;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
  public id!: string;
  public paymentDate!: Date;
  public forExAmount!: number;
  public currency!: string;
  public indianAmount!: number;
  public invoiceId!: string;
  public isFullPayment!: boolean;
  public bankPaymentDetails!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Payment.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    forExAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    indianAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Invoice,
        key: "id",
      },
    },
    isFullPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bankPaymentDetails: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Payment",
    tableName: "payments",
    timestamps: true,
  }
);

Payment.belongsTo(Invoice, { foreignKey: "invoiceId" });

export default Payment;
