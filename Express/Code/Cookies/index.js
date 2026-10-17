import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, resp) => {
    resp.render("login");
});

app.post("/profile", (req, resp) => {
    resp.setHeader("Set-Cookie", `login=${req.body.name}; Path=/`);
    resp.render("profile");
});

app.get("/", (req, resp) => {
    const cookiesData = req.get("cookie");
    console.log(cookiesData);
    resp.render("home");
});

app.listen(3200, () => {
    console.log("Server run at port 3200");
});