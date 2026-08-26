# Express + MongoDB + REST API Notes

Your code is basically doing **4 things**:

```text
Express Server
      ↓
REST API
      ↓
MongoDB
      ↓
HTML / EJS UI
```

## 1. Imports

```js
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
```

* `express` → used to create the server and APIs.
* `MongoClient` → connects Node.js to MongoDB.
* `ObjectId` → used to work with MongoDB document IDs.

---

## 2. Create Express App

```js
const app = express();
```

This creates your Express application.

---

## 3. MongoDB Setup

```js
const dbName = "pawan";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
```

* `pawan` → database name.
* `localhost:27017` → MongoDB running on your computer.
* `client` → MongoDB connection object.

---

## 4. Middleware

### JSON data

```js
app.use(express.json());
```

This allows Express to read JSON data coming from Thunder Client/API.

For example:

```json
{
    "name": "Pawan",
    "age": 22,
    "email": "pawan@gmail.com"
}
```

This data becomes available in:

```js
req.body
```

### Form data

```js
app.use(express.urlencoded({ extended: true }));
```

This is used to read data submitted through an HTML form.

---

# 5. MongoDB Connection

```js
client.connect().then((connection) => {

    const db = connection.db(dbName);

});
```

This connects your Express application to MongoDB.

Then:

```js
const db = connection.db(dbName);
```

selects the `pawan` database.

---

# 6. GET API — Read Data

```js
app.get("/api", async (req, resp) => {

    const collection = db.collection("my_information");

    const result = await collection.find().toArray();

    resp.send(result);
});
```

This API reads all students from MongoDB.

When you send:

```text
GET http://localhost:3200/api
```

the flow is:

```text
GET /api
   ↓
MongoDB
   ↓
find()
   ↓
All students
   ↓
Response
```

---

# 7. UI Route

```js
app.get("/ui", async (req, resp) => {

    const collection = db.collection("my_information");

    const result = await collection.find().toArray();

    resp.render("student", { result });
});
```

This gets the students and sends them to your EJS file.

```js
resp.render("student", { result });
```

means:

> Render `student.ejs` and give it the `result` data.

---

# 8. HTML Form

```js
app.get("/add", (req, resp) => {
```

When you open:

```text
http://localhost:3200/add
```

Express sends your HTML form to the browser.

The form submits to:

```html
<form action="/add-student" method="POST">
```

---

# 9. Save Form Data

```js
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
```

The flow is:

```text
HTML Form
    ↓
POST /add-student
    ↓
req.body
    ↓
insertOne()
    ↓
MongoDB
```

---

# 10. POST REST API

```js
app.post("/add-student-api", async (req, resp) => {
```

This is your API for creating a student using JSON.

In Thunder Client:

```text
POST http://localhost:3200/add-student-api
```

Body:

```json
{
    "name": "Pawan",
    "age": 22,
    "email": "pawan@gmail.com"
}
```

Then:

```js
req.body
```

contains:

```js
{
    name: "Pawan",
    age: 22,
    email: "pawan@gmail.com"
}
```

---

# 11. Validation

```js
if (!name || !age || !email) {
```

This checks whether all required fields are present.

If something is missing:

```js
resp.send({
    message: "operation failed",
    success: false
});
```

The data will not be inserted.

---

# 12. Insert Data

```js
const result = await collection.insertOne(req.body);
```

`insertOne()` inserts the student into MongoDB.

So:

```text
req.body
   ↓
insertOne()
   ↓
MongoDB
```

---

# 13. DELETE API

Your delete route is:

```js
app.delete("/delete/:id", async (req, resp) => {
```

Here:

```text
:id
```

means **dynamic ID**.

For example:

```text
/delete/123
/delete/456
/delete/789
```

All use the same route:

```text
/delete/:id
```

---

# 14. Getting the ID

```js
console.log(req.params.id);
```

If the request is:

```text
DELETE /delete/123
```

then:

```js
req.params.id
```

will be:

```text
123
```

So:

```text
URL
 ↓
/delete/123
 ↓
req.params.id
 ↓
123
```

---

# 15. Delete from MongoDB

```js
const result = await collection.deleteOne({
    _id: new ObjectId(req.params.id)
});
```

This means:

> Find the MongoDB document with this `_id` and delete it.

`ObjectId()` is used because MongoDB's `_id` is normally stored as an ObjectId.

---

# 16. Check Whether Delete Worked

```js
if (result.deletedCount === 1)
```

If one document was deleted:

```text
deletedCount = 1
```

So:

```js
{
    message: "Student data deleted",
    success: true
}
```

If no document was found:

```text
deletedCount = 0
```

So:

```js
{
    message: "Student data not deleted / ID not found",
    success: false
}
```

---

# 17. REST API and CRUD

Your APIs are following the basic REST pattern:

| Operation | HTTP Method | Your Route         |
| --------- | ----------- | ------------------ |
| Create    | POST        | `/add-student-api` |
| Read      | GET         | `/api`             |
| Update    | PUT/PATCH   | Not created yet    |
| Delete    | DELETE      | `/delete/:id`      |

This is called **CRUD**:

```text
C → Create → POST
R → Read   → GET
U → Update → PUT/PATCH
D → Delete → DELETE
```

---

# 18. Overall Flow

```text
                 Express Server
                       |
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      REST API         UI           HTML Form
        ↓              ↓              ↓
 Thunder Client      Browser        Browser
        └──────────────┼──────────────┘
                       ↓
                    MongoDB
```

### Most important things to remember

```text
req.body
   ↓
Data sent by client
```

```text
req.params.id
   ↓
ID coming from URL
```

```text
find()
   ↓
Read data
```

```text
insertOne()
   ↓
Create/save data
```

```text
deleteOne()
   ↓
Delete data
```

And remember:

> **Thunder Client is only a tool for testing your API. Express is where you actually create the API.**
