import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";

import { Model } from "sequelize";

export interface Company extends Model {
  id: number;
  name_company: string;
  email: string;
  password: string;
  location: string;
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;
}

const CompanyModel = conectDB.define<Company>("companies", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name_company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    // Añade el campo password
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default CompanyModel;
