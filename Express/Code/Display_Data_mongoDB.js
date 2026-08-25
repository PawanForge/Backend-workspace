import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const dbName = "pawan";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

app.set("view engine",'ejs');
app.get("/",async(req,resp)=>{
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("my_information");

    const result = await collection.find().toArray();

    console.log(result);
    resp.render('student',{result});
})

app.listen(3200, () => {
    console.log("Server running on port 3200");
});