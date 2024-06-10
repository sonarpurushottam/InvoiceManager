import { DataTypes, Model } from "sequelize";
import sequelize from "../config/pgConfig";

import Customer from "./customerModel";

interface SowAttributes {
  id: string;
  invoiceEmailAddresses: string[];
  customerId: string;
  customerPONumber: string;
  title: string;
  customerSONumber: string;
  validFrom: Date;
  validUpto: Date;
  totalValue: number;
  currency: string;
}

class Sow extends Model<SowAttributes> implements SowAttributes {
  public id!: string;
  public invoiceEmailAddresses!: string[];
  public customerId!: string;
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validFrom!: Date;
  public validUpto!: Date;
  public totalValue!: number;
  public currency!: string;
  static totalValue: number;
}

Sow.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    invoiceEmailAddresses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Customer,
        key: "id",
      },
    },
    customerPONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerSONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    validUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Sow",
    tableName: "sows",
    timestamps: false,
  }
);

Sow.belongsTo(Customer, { foreignKey: "customerId" });

export default Sow;
