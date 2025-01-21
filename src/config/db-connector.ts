import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connectDB = new Sequelize(
  process.env.DB_NAME || "dbEventMeet",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "postgres",
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: false, // Puedes habilitar el registro si lo necesitas
  }
);

export default connectDB;
