import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";
import EventModel from "./Event";
import InterestModel from "./Interest";

const EventsInterestModel = conectDB.define("eventsInterest", {
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: EventModel,
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

export default EventsInterestModel;
