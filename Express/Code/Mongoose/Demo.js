import mongoose from "mongoose";

async function dbConnection() {
    await mongoose.connect("mongodb://localhost:27017/school");

    const schema = mongoose.Schema({
        name: String,
        email: String,
        age: Number
    });

    const studentsModel = mongoose.model("students", schema);

    const result = await studentsModel.find();

    console.log(result);
}

dbConnection();