import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";

const InterestModel = conectDB.define("interest", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tag: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

export default InterestModel;
