import express from "express";
import morgan from "morgan";
const app=express();
 
app.use(morgan('dev'))
app.get("/",(req,resp)=>{
    resp.send("Home Page")
});

app.get("/users",(req,resp)=>{
    resp.send("User page")
});

app.get("/wait",(req,resp)=>{
    setTimeout(()=>{
        resp.send("result after 1 sec")
    },1000);
})
app.listen(3200);
