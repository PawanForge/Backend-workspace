import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/users", (req, res) => {
    const users = ["Pawan", "Kumar", "Yadav"];
    res.render("users", { users: users ,isLogin:true});
});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});