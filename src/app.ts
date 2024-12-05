import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db-connector";
import userRoutes from "./routes/User";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes); //home 

connectDB
  .authenticate()
  .then(() => {
    app
      .listen(PORT, () => {
        console.log("Server running at PORT: ", PORT);
      })
      .on("error", (error) => {
        throw new Error(error.message);
      });
  })
  .catch((error) => {
    throw new Error(error.message);
  });
