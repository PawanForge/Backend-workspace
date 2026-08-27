import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();

const dbName = "pawan";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


client.connect().then((connection) => {

    const db = connection.db(dbName);


    // ================= API =================

    app.get("/api", async (req, resp) => {

        const collection = db.collection("my_information");

        const result = await collection.find().toArray();

        resp.send(result);

    });


    // ================= UI =================

    app.get("/ui", async (req, resp) => {

        const collection = db.collection("my_information");

        const result = await collection.find().toArray();

        resp.render("student", { result });

    });


    // ================= ADD FORM =================

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

                <button type="submit">
                    Submit
                </button>

            </form>
        `);

    });


    // ================= SAVE STUDENT =================

    app.post("/add-student", async (req, resp) => {

        const { name, email, age } = req.body;

        const collection = db.collection("my_information");

        await collection.insertOne({
            name: name,
            email: email,
            age: age
        });

        resp.redirect("/ui");

    });


    // ================= SAVE STUDENT API =================

    app.post("/add-student-api", async (req, resp) => {

        console.log(req.body);

        const { name, age, email } = req.body;

        if (!name || !age || !email) {

            resp.send({
                message: "operation failed",
                success: false
            });

            return;
        }

        const collection = db.collection("my_information");

        const result = await collection.insertOne(req.body);

        resp.send({
            message: "data stored",
            success: true,
            result: result
        });

    });


    // ================= DELETE =================

    app.delete("/delete/:id", async (req, resp) => {

        console.log(req.params.id);

        const collection = db.collection("my_information");

        const result = await collection.deleteOne({
            _id: new ObjectId(req.params.id)
        });

        if (result.deletedCount === 1) {

            resp.send({
                message: "Student data deleted",
                success: true
            });

        } else {

            resp.send({
                message: "Student data not deleted / ID not found",
                success: false
            });

        }

    });


    // ================= OPEN UPDATE PAGE =================

    app.get("/ui/student/:id", async (req, resp) => {

        const collection = db.collection("my_information");

        const result = await collection.findOne({
            _id: new ObjectId(req.params.id)
        });

        if (!result) {
            return resp.send("Student not found");
        }

        resp.render("update-student", { result });

    });


    // ================= UPDATE STUDENT =================

    app.post("/update-student/:id", async (req, resp) => {

        const { name, age, email } = req.body;

        const collection = db.collection("my_information");

        const result=await collection.updateOne(

            {
                _id: new ObjectId(req.params.id)
            },

            {
                $set: {
                    name: name,
                    age: age,
                    email: email
                }
            }

        );

        resp.redirect("/ui");

    });

});


app.listen(3200, () => {

    console.log("Server running on port 3200");

});