import { DataTypes } from "sequelize";
import connectDB from "../config/db-connector";
import EventsInterestModel from "./EventsInterest";
import EventModel from "./Event";

const InterestModel = connectDB.define("interests", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

InterestModel.belongsToMany(EventModel, {
  through: EventsInterestModel,
  foreignKey: "interestsId",
});

export default InterestModel;