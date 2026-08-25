import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const dbName = "pawan";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

app.set("view engine", "ejs");

// To read POST form data
app.use(express.urlencoded({ extended: true }));

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

    // Form
    app.get("/add", (req, resp) => {

        resp.send(`
            <form action="/add-student" method="POST">

                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter the Name"
                />

                <br/><br/>

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter the Email"
                />

                <br/><br/>

                <input 
                    type="number" 
                    name="age" 
                    placeholder="Enter the Age"
                />

                <br/><br/>

                <button type="submit">Submit</button>

            </form>
        `);
    });

    // Save student
    app.post("/add-student", async (req, resp) => {

        const { name, email, age } = req.body;

        const collection = db.collection("my_information");

        await collection.insertOne({
            name: name,
            email: email,
            age: age
        });

        resp.send("Data saved successfully");
    });

});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});