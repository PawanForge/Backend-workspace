import express from "express";

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, resp) => {
    resp.render('home',{name:"Pawan",Thoughts:"Consistency Beats "});
});

app.listen(3200);