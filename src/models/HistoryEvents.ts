import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";
import UserModel from "./User";
import EventModel from "./Event";

const HistoryEventsModel = conectDB.define("historyEvents", {
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
    onDelete: "CASCADE",
  },
  attendanceDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default HistoryEventsModel;
