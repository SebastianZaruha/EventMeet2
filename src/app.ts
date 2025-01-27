import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/User";
import { companyRouter } from "./routes/Company";
import { eventRouter } from "./routes/Event";
import conectDB from "./config/db-connector";
import "./models/Company";
import "./models/Event";
import "./models/Interest";
import "./models/EventsInterest";
import "./models/Friendship";
import "./models/HistoryEvents";
import "./models/User";
import "./models/UserEvent";
import "./models/UserInterest";
import "./models/chatMessage";
import "./models/enums/StatusEvent";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
// conectDB
// .authenticate()
// .then(() =>{
//     await conectDB.sync({ alter: true }); // Actualiza las tablas si hay cambios en los modelos

//     app
//       .listen(PORT, () => {
//         console.log("Server running at PORT: ", PORT);
//       })
//       .on("error", (error) => {
//         throw new Error(error.message);
//       });
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });
app.use("/v1/users", userRouter);
app.use("/v1/companies", companyRouter);
app.use("/v1/events", eventRouter);
// Si necesitas sincronizar todos los modelos
(async () => {
  try {
    await conectDB.sync({ alter: true }).then(() => {
      app
        .listen(PORT, () => {
          console.log("Server running at PORT: ", PORT);
        })
        .on("error", (error) => {
          throw new Error(error.message);
        });
    });
    console.log("Models synchronized successfully.");
  } catch (err) {
    console.error("Error synchronizing models:", err);
  }
})();