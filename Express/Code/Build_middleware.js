import express from "express";
import path from "path";
const app = express();

// Form data read karne ke liye
app.use(express.urlencoded({ extended: false }));

// public2 folder ki files serve karne ke liye
app.use(express.static("public2"));

app.get("/", (req, resp) => {
    const filePath=path.resolve('view2/Home.html');
    resp.sendFile(filePath);
});


app.get("/login", (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
            <input type="text" name="username" placeholder="enter name"/>
            <br/>
            <br/>
            
            <input type="password" name="password" placeholder="enter password"/>
            <br/>
            <br/>
            
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/submit", (req, resp) => {
    console.log(req.body);
    resp.send("<h1>Submitted</h1>");
});

app.listen(3200, () => {
    console.log("Server running on http://localhost:3200");
});