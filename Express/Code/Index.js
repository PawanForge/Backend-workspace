import express from "express";  
// const express=require('express');
const app=express();
app.get("",(rep,resp)=>{
    resp.send("<h1>Basic node js example </h1>")
});

app.get("/about",(rep,resp)=>{
    resp.send("<h1>Hello my Friend</h1>")
});
app.get("/info",(req,resp)=>{
    resp.send("Hello in Contact section")
})

app.listen(3200);