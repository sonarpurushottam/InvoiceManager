import { DataTypes, Model } from "sequelize";
import sequelize from "../config/pgConfig";
import Sow from "./sowModel";
import Customer from "./customerModel";

interface SowPaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

class SowPaymentPlan
  extends Model<SowPaymentPlanAttributes>
  implements SowPaymentPlanAttributes
{
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;
  sowPaymentPlanLineItems: any;
}

SowPaymentPlan.init(
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
    plannedInvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SowPaymentPlan",
    tableName: "sowPaymentPlans",
    timestamps: false,
  }
);

SowPaymentPlan.belongsTo(Sow, { foreignKey: "sowId" });
SowPaymentPlan.belongsTo(Customer, { foreignKey: "customerId" });

export default SowPaymentPlan;
