import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// GET route
app.get("/add-user", (req, res) => {
    res.render("addUser");
});

// POST route
app.post("/submit-user", (req, res) => {
    console.log(req.body);

    res.render("SubmitUser", req.body);
});

app.listen(3200, () => {
    console.log("Running on LocalHost", 3200);
});