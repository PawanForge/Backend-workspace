import mongoose from "mongoose";
import studentSchema from "../schema/studentschema.js";

const studentModel = mongoose.model("students", studentSchema);

export default studentModel;