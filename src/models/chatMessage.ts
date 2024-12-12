import { DataTypes } from "sequelize";
import conectDB from "../config/db-connector";
import UserModel from "./User";

const ChatMessageModel = conectDB.define("chatMessage", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  receiverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sendDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

export default ChatMessageModel;
