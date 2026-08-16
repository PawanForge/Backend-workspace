// import express from "express"
// const app=express();

// app.get("/",(req,resp)=>{
//     resp.send("<h1>Home page</h1>")
// })
// app.get("/login",(req,resp)=>{
//     resp.send(`<form action="/submit" method="post" >
//         <input type="text" placeholder="enter name"/>
//         <br/>
//         <br/>
//         <input type="password" placeholder="enter password"/>
//         <br/>
//         <br/>
//         <button> Login </button>
//         </form>`)
// })
// app.post("/submit",(req,resp)=>{
//     resp.send("<h1>Data Submitted </h1>")
// })
// app.listen(5000);

import express from "express"
import home from "./Form/home.js"
import submit from "./Form/submit.js";
import form from "./Form/form.js";
const app=express();

app.get("/",(req,resp)=>{
    resp.send(home());
})
app.get("/login",(req,resp)=>{
    resp.send(form()) 
})
app.post("/submit",(req,resp)=>{
    resp.send(submit());
})
app.listen(5000);

// CREATING FORM
// │
// ├── STEP 1: Create Folder
// │   └── Form/
// │       ├── home.js
// │       ├── form.js
// │       └── submit.js
// │
// └── STEP 2: Form Handling
//     │
//     ├── home.js
//     │   └── Create Home Page
//     │
//     ├── form.js
//     │   └── Create HTML Form
//     │
//     ├── submit.js
//     │   └── Handle Submitted Data
//     │
//     └── Main File
//         ├── GET "/" → home()
//         ├── GET "/login" → form()
//         └── POST "/submit" → submit()