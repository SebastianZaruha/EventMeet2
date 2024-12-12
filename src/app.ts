import express, { Request, Response } from "express";
import dotenv from "dotenv";
import conectDB from "./config/db-connector";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

conectDB
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
