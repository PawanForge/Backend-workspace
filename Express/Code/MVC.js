import express from "express";
import { handleUsers } from "./controller/userController.js";

const app = express();

app.set("views", "./view");
app.set("view engine", "ejs");

app.get("/users", handleUsers);

app.listen(3200, () => {
  console.log("Server running on http://localhost:3200");
});