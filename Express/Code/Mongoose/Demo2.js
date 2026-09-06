
import mongoose from "mongoose";
import express from "express";
import my_informationModel from "./model/studentModel.js";

const app = express();

app.use(express.json());

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/pawan");

    console.log("______ connected _____");

    app.get("/", async (req, resp) => {
      try {
        const my_information = await my_informationModel.find();

        resp.status(200).send(my_information);
      } catch (error) {
        console.error(error);

        resp.status(500).send({
          message: "Error fetching data",
          success: false
        });
      }
    });

    app.listen(3200, () => {
      console.log("Running on the 3200 server");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

startServer();
