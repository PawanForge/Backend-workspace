// const express=require('express');
import express from 'express';
const app=express();
import Home from './page/Home.js';
import About from './page/about.js';
app.get("",(rep,resp)=>{
    resp.send(Home())
});
app.get("/about",(rep,resq)=>{
    resq.send(About());
})
app.listen(1000);