import express from "express";

const app = express();

function AgeRoute(req, resp, next) {
    console.log(req.query.age);

    const age = Number(req.query.age);

    if (!req.query.age || age < 18) {
        return resp.send("You are not allowed to this website");
    }

    next();
}

// app.use(AgeRoute);//Application-Level

app.get("/home", (req, resp) => {
    resp.send("<h1>Basic Node.js example</h1>");
});

app.get("/about", AgeRoute,(req, resp) => {//route level
    resp.send("<h1>Hello my Friend</h1>");
});
app.get("/login",AgeRoute, (req, resp) => {
    resp.send("<h1>Hello my Friend</h1>");
});

app.listen(3200, () => {
    console.log("Server running on http://localhost:3200");
});