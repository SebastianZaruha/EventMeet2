import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";
import UserModel from "./User";

const FriendshipModel = conectDB.define(
  "friendship",
  {
    userId1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    userId2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
      onDelete: "CASCADE",
      validate: {
        isDifferent(value: number) {
          if (this.userId1 === value) {
            throw new Error("userId1 and userId2 must be different");
          }
        },
      },
    },
  },
  {
    validate: {
      userIdsDifferent() {
        if (this.userId1 === this.userId2) {
          throw new Error("userId1 and userId2 must be different");
        }
      },
    },
  }
);

export default FriendshipModel;
