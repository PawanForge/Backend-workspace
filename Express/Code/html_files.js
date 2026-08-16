import express from "express";
import path from "path";

const app = express();

app.get("/", (req, resp) => {
    const absPath = path.resolve("html_file/home.html");
    // console.log(absPath);
    resp.sendFile(absPath);
});
app.get("/login", (req, resp) => {
    const absPath = path.resolve("html_file/login.html");
    // console.log(absPath);
    resp.sendFile(absPath);
});
app.get("/about", (req, resp) => {
    const absPath = path.resolve("html_file/about.html");
    // console.log(absPath);
    resp.sendFile(absPath);
});

app.use((req,resp)=>{
    const absPath=path.resolve('html_file/404.html')
    resp.status(404).sendFile(absPath);
})
app.listen(3200, () => {
    console.log("Server running on http://localhost:3200");
});