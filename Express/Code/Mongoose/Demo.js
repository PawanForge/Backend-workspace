import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();

await mongoose.connect("mongodb://localhost:27017/school");

console.log("______connected_____");

app.get("/", async (req, resp) => {
    const studentData = await studentModel.find();
    resp.send(studentData);
});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});
// async function dbConnection() {
//     await mongoose.connect("mongodb://localhost:27017/school");
//     const schema = mongoose.Schema({
//         name: String,
//         email: String,
//         age: Number
//     });
//     const studentsModel = mongoose.model("students", schema);
//     const result = await studentsModel.find();
//     console.log(result);
// }
// dbConnection();