import { DataTypes } from "sequelize";
import connectDB from "../config/db-connector";
import EventModel from "./Event";
import InterestModel from "./Interest";

const EventsInterestModel = connectDB.define("eventsInterests", {
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