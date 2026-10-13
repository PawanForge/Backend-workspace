import mongoose from "mongoose";
import studentSchema from "../schema/studentschema.js";

const my_informationModel = mongoose.model("my_informations", studentSchema);

export default my_informationModel;