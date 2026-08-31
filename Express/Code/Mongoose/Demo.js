import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();

app.use(express.json());

// MongoDB connection
await mongoose.connect("mongodb://localhost:27017/school");

console.log("______ connected _____");

// GET
app.get("/", async (req, resp) => {
    try {
        const studentData = await studentModel.find();

        resp.send(studentData);
    } catch (error) {
        console.log(error);

        resp.status(500).send({
            message: "Error fetching data",
            success: false
        });
    }
});

// POST
app.post("/save", async (req, resp) => {
    try {
        console.log("Body:", req.body);

        const { name, age, email } = req.body || {};

        if (!name || !age || !email) {
            return resp.status(400).send({
                message: "Please provide name, age and email",
                success: false,
                storedInfo: null
            });
        }

        const studentData = await studentModel.create({
            name,
            age,
            email
        });

        resp.send({
            message: "Data Stored",
            success: true,
            storedInfo: studentData
        });

    } catch (error) {
        console.log(error);

        resp.status(500).send({
            message: "Data not stored",
            success: false,
            storedInfo: null
        });
    }
});

app.put("/update/:id",async(req,resp)=>{
    const id=req.params.id;
    console.log(req.body.id)
    const studentData=await studentModel.findByIdAndUpdate(id,{
        ...req.body
    })
    console.log(req.body);
    resp.send({
        message:'data update',
        success:"true",
        info:null
    })
})

app.delete("/delete/:id",async(req,resp)=>{
    const id=req.params.id;
    const studentData=await studentModel.findByIdAndDelete(id)
    resp.send({
        message:"data delete",
        success:true,
        info:studentData
    })
})
// Server
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