import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";
import UserModel from "./User";
import InterestModel from "./Interest";

const UserInterestModel = conectDB.define("userInterest", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  interestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: InterestModel,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

export default UserInterestModel;
