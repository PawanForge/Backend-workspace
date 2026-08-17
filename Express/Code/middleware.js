import express from "express";
import Home from "./page/Home.js";
import About from "./page/about.js";

const app = express();

// app.use((req, resp, next) => {
//     console.log("user is accessing " + req.url + " Page");
//     next();
// });

// function ageCheck(req,resp,next){
//     if(!req.query.age || req.query.age<18){
//         resp.send("Alert ! You can not access this page")
//     }else{
//         next();
//     }
// }
// app.use(ageCheck);


function ipCheck(req,resp,next){
    const ip=req.socket.remoteAddress
    console.log(ip);
    if(ip.includes('10.128.175.170')){
        resp.send("Alert ! You can not access this page")
    }else{
        next();
    }
}
app.use(ipCheck);

app.get("/", (req, resp) => {
    resp.send(Home());
});

app.get("/about", (req, resp) => {
    resp.send(About());
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});