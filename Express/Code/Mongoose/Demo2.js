import mongoose from "mongoose";
import express from "express";
import my_informationModel from "./model/studentModel.js";

const app = express();

app.use(express.json());

// Start server and connect database
const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/pawan");

    console.log("MongoDB connected successfully");

    // GET - Fetch all students
    app.get("/", async (req, resp) => {
      try {
        const studentData = await my_informationModel.find();

        resp.status(200).send(studentData);
      } catch (error) {
        console.error(error);

        resp.status(500).send({
          message: "Error fetching data",
          success: false
        });
      }
    });

    // POST - Insert student
    app.post("/insert", async (req, resp) => {
      try {
        const { name, age, email } = req.body;

        if (!name || age == null || !email) {
          return resp.status(400).send({
            message: "Please provide name, age and email",
            success: false
          });
        }

        const studentData = await my_informationModel.create({
          name,
          age,
          email
        });

        resp.status(201).send({
          message: "Data stored successfully",
          success: true,
          storedInfo: studentData
        });
      } catch (error) {
        console.error(error);

        resp.status(500).send({
          message: "Data not stored",
          success: false
        });
      }
    });

    // PUT - Update student by ID
    app.put("/update/:id", async (req, resp) => {
      try {
        const id = req.params.id;

        const studentData =
          await my_informationModel.findByIdAndUpdate(
            id,
            req.body,
            {
              new: true,
              runValidators: true
            }
          );

        if (!studentData) {
          return resp.status(404).send({
            message: "Student not found",
            success: false
          });
        }

        resp.status(200).send({
          message: "Data updated successfully",
          success: true,
          info: studentData
        });
      } catch (error) {
        console.error(error);

        resp.status(400).send({
          message: "Update failed. Check the ID and data.",
          success: false
        });
      }
    });

    // DELETE - Delete student by ID
    app.delete("/delete/:id", async (req, resp) => {
      try {
        const id = req.params.id;

        const studentData =
          await my_informationModel.findByIdAndDelete(id);

        if (!studentData) {
          return resp.status(404).send({
            message: "Student not found",
            success: false
          });
        }

        resp.status(200).send({
          message: "Data deleted successfully",
          success: true,
          info: studentData
        });
      } catch (error) {
        console.error(error);

        resp.status(400).send({
          message: "Delete failed. Check the ID.",
          success: false
        });
      }
    });

    // Start server after database connection
    app.listen(3200, () => {
      console.log("Server running on port 3200");
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

startServer();
