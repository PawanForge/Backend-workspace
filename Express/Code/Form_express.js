import express from "express"
const app=express();

app.get("/",(req,resp)=>{
    resp.send("<h1>Home page</h1>")
})
app.get("/login",(req,resp)=>{
    resp.send(`<form action="/submit" method="post" >
        <input type="text" placeholder="enter name"/>
        <br/>
        <br/>
        <input type="password" placeholder="enter password"/>
        <br/>
        <br/>
        <button> Login </button>
        </form>`)
})
app.post("/submit",(req,resp)=>{
    resp.send("<h1>Data Submitted </h1>")
})
app.listen(5000);