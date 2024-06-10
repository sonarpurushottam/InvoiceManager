import { DataTypes, Model } from "sequelize";
import sequelize from "../config/pgConfig";
import SowPaymentPlan from "./sowPaymentPlanModel";
import Sow from "./sowModel";

interface SowPaymentPlanLineItemAttributes {
  id: string;
  sowPaymentPlanId: string;
  sowId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class SowPaymentPlanLineItem
  extends Model<SowPaymentPlanLineItemAttributes>
  implements SowPaymentPlanLineItemAttributes
{
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

SowPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SowPaymentPlan,
        key: "id",
      },
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Sow,
        key: "id",
      },
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SowPaymentPlanLineItem",
    tableName: "sow_payment_plan_line_items",
    timestamps: false,
  }
);

SowPaymentPlanLineItem.belongsTo(SowPaymentPlan, {
  foreignKey: "sowPaymentPlanId",
});
SowPaymentPlanLineItem.belongsTo(Sow, { foreignKey: "sowId" });

export default SowPaymentPlanLineItem;
