import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const dbName = "pawan";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

app.set("view engine", "ejs");

client.connect().then((connection) => {

    const db = connection.db(dbName);

    // API
    app.get("/api", async (req, resp) => {

        const collection = db.collection("my_information");

        const result = await collection.find().toArray();

        resp.send(result);
    });

    // UI
    app.get("/ui", async (req, resp) => {

        const collection = db.collection("my_information");

        const result = await collection.find().toArray();

        resp.render("student", { result });
    });

});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});