import express from "express";
import Home from "./page/Home.js";
import About from "./page/about.js";

const app = express();

app.use((req, resp, next) => {
    console.log("user is accessing " + req.url + " Page");
    next();
});

app.get("/", (req, resp) => {
    resp.send(Home());
});

app.get("/about", (req, resp) => {
    resp.send(About());
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});