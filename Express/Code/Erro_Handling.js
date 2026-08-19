import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});

app.get("/error", (req, res, next) => {
    const error = new Error("Something went wrong");
    error.status = 404;

    next(error);
});

// Error-handling middleware — should be after routes
app.use((error, req, res, next) => {
    res.status(error.status || 500)
       .send(error.message);
});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});