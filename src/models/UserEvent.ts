import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";
import UserModel from "./User";
import EventModel from "./Event";

const UserEventModel = conectDB.define("userEvent", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: EventModel,
      key: "id",
    },
  },
  attended: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  pointsEarned: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default UserEventModel;
