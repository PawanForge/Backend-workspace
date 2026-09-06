// const express=require('express');
import express from 'express';
const app=express();
import Home from './page/Home.js';
import About from './page/about.js';
import Contact from "./page/contact.js"
app.get("",(rep,resp)=>{
    resp.send(Home())
});
app.get("/about",(rep,resq)=>{
    resq.send(About());
})
app.get("/contact",(req,resp)=>{
    resp.send(Contact())
})
app.listen(1000);