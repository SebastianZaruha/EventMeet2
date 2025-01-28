import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";
import { StatusEvent } from "../models/enums/StatusEvent";
import CompanyModel from "./Company";
import { title } from "process";
import InterestModel from "./Interest";
import EventsInterestModel from "./EventsInterest";

const EventModel = conectDB.define(
  "events",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    companyid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CompanyModel,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM,
      values: Object.values(StatusEvent),
      defaultValue: StatusEvent.PENDIENTE,
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
  },
  {
    // Other model options go here
  }
);

EventModel.belongsToMany(InterestModel, {
  through: EventsInterestModel,
  foreignKey: "eventId",
});

export default EventModel;
