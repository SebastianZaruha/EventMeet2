import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connectDB = new Sequelize(
  process.env.DB_NAME || "dbEventMeet",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "1234",
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: false,
  }
);

// async function conectarYCrearTablas() {
//   try {
//     await connectDB.authenticate(); // Verifica la conexión
//     console.log("Connection has been established successfully.");
//     await connectDB.sync({ force: false }); // { force: false } es crucial
//     console.log("Base de datos y tablas sincronizadas.");
//   } catch (error) {
//     console.error("Error al sincronizar la base de datos:", error);
//   }
// }

// conectarYCrearTablas();
export default connectDB;
