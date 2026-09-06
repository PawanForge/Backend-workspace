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

---

# 1. Imports

```js
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
```

* `express` → Used to create the server and APIs.
* `MongoClient` → Connects Node.js to MongoDB.
* `ObjectId` → Used to work with MongoDB document IDs.

---

# 2. Create Express App

```js
const app = express();
```

This creates your **Express application**.

---

# 3. MongoDB Setup

```js
const dbName = "pawan";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
```

* `pawan` → Database name.
* `localhost:27017` → MongoDB is running on your computer on port `27017`.
* `client` → MongoDB connection object.

---

# 4. Middleware

## JSON Data

```js
app.use(express.json());
```

This allows Express to read **JSON data coming from Thunder Client or another API client**.

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

---

## Form Data

```js
app.use(express.urlencoded({ extended: true }));
```

This is used to read data submitted through an **HTML form**.

So remember:

```text
express.json()
      ↓
Reads JSON/API data

express.urlencoded()
      ↓
Reads HTML form data
```

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

### Simple Flow

```text
Express
   ↓
MongoClient
   ↓
MongoDB
   ↓
pawan Database
```

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

`find()` is used to read documents from the collection.

`toArray()` converts the result into an array.

`resp.send(result)` sends the data back to the client.

---

# 7. UI Route

```js
app.get("/ui", async (req, resp) => {

    const collection = db.collection("my_information");

    const result = await collection.find().toArray();

    resp.render("student", { result });

});
```

This gets the students from MongoDB and sends them to your **EJS file**.

```js
resp.render("student", { result });
```

means:

> Render `student.ejs` and give it the `result` data.

### Flow

```text
MongoDB
   ↓
result
   ↓
student.ejs
   ↓
HTML
   ↓
Browser
```

---

# 8. HTML Form

```js
app.get("/add", (req, resp) => {
```

When you open:

```text
http://localhost:3200/add
```

Express sends the HTML form to the browser.

The form submits data to:

```html
<form action="/add-student" method="POST">
```

This means:

* `action="/add-student"` → Send the form data to `/add-student`.
* `method="POST"` → Send the data using the POST method.

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

The form data is received through `req.body`.

Then `insertOne()` saves the data into MongoDB.

---

# 10. POST REST API

```js
app.post("/add-student-api", async (req, resp) => {
```

This is your API for creating a student using **JSON data**.

In Thunder Client:

```text
POST http://localhost:3200/add-student-api
```

### Body

```json
{
    "name": "Pawan",
    "age": 22,
    "email": "pawan@gmail.com"
}
```

After sending this request:

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

For example, if the client sends:

```json
{
    "name": "Pawan",
    "age": 22
}
```

the `email` is missing.

The server can send:

```js
resp.send({
    message: "operation failed",
    success: false
});
```

The data will not be inserted.

### Simple Flow

```text
Request
   ↓
Check required fields
   ↓
All fields present?
   ↓
Yes → Insert data
No  → Return error
```

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

For example:

```json
{
    "name": "Pawan",
    "age": 22,
    "email": "pawan@gmail.com"
}
```

will be stored as a document in the collection.

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

All of these requests use the same route:

```text
/delete/:id
```

The value of `:id` changes depending on the URL.

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

will contain:

```text
123
```

### Simple Flow

```text
URL
 ↓
/delete/123
 ↓
req.params.id
 ↓
123
```

Remember:

* `req.body` → Data sent inside the request body.
* `req.params.id` → ID received from the URL.

---

# 15. Delete Data from MongoDB

```js
const result = await collection.deleteOne({
    _id: new ObjectId(req.params.id)
});
```

This means:

> Find the MongoDB document with this `_id` and delete it.

`ObjectId()` is used because MongoDB's `_id` is normally stored as an **ObjectId**, not as a normal string.

### Flow

```text
/delete/123
     ↓
req.params.id
     ↓
"123"
     ↓
new ObjectId("123")
     ↓
MongoDB _id
     ↓
deleteOne()
```

---

# 16. Check Whether Delete Worked

```js
if (result.deletedCount === 1)
```

If one document was successfully deleted:

```text
deletedCount = 1
```

The server can send:

```js
{
    message: "Student data deleted",
    success: true
}
```

If no matching document was found:

```text
deletedCount = 0
```

The server can send:

```js
{
    message: "Student data not deleted / ID not found",
    success: false
}
```

### Important

```text
deletedCount = 1
      ↓
Document deleted successfully

deletedCount = 0
      ↓
No matching document was found
```

---

# 17. REST API and CRUD

Your APIs follow the basic **REST pattern**:

| Operation | HTTP Method | Route              |
| --------- | ----------- | ------------------ |
| Create    | POST        | `/add-student-api` |
| Read      | GET         | `/api`             |
| Update    | PUT/PATCH   | Not created yet    |
| Delete    | DELETE      | `/delete/:id`      |

This is called **CRUD**.

```text
C → Create → POST
R → Read   → GET
U → Update → PUT/PATCH
D → Delete → DELETE
```

### CRUD Example

```text
POST
  ↓
Create a student

GET
  ↓
Read students

PUT/PATCH
  ↓
Update a student

DELETE
  ↓
Delete a student
```

---

# 18. Overall Flow

```text
                 Express Server
                       |
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     REST API          UI         HTML Form
        ↓              ↓              ↓
 Thunder Client      Browser        Browser
        └──────────────┼──────────────┘
                       ↓
                    MongoDB
```

---

# ⭐ Most Important Things to Remember

## `req.body`

```text
req.body
   ↓
Data sent by the client
```

Example:

```json
{
    "name": "Pawan",
    "age": 22
}
```

---

## `req.params.id`

```text
req.params.id
      ↓
ID coming from the URL
```

Example:

```text
/delete/123
      ↓
req.params.id
      ↓
123
```

---

## `find()`

```text
find()
   ↓
Read data
```

---

## `insertOne()`

```text
insertOne()
     ↓
Create / Save data
```

---

## `deleteOne()`

```text
deleteOne()
     ↓
Delete data
```

---

# ⭐ Final Concept

Your project has different routes for different purposes:

```text
/api
   ↓
Read data from MongoDB
   ↓
Return JSON


/ui
   ↓
Read data from MongoDB
   ↓
Display it using EJS


/add
   ↓
Show HTML form


/add-student
   ↓
Receive HTML form data
   ↓
Save it to MongoDB


/add-student-api
   ↓
Receive JSON data
   ↓
Save it to MongoDB


/delete/:id
   ↓
Get ID from URL
   ↓
Delete matching document
```

### One Very Important Difference

**Thunder Client is only a tool for testing your API.**

**Express is where you actually create the API.**

For example:

```text
Express
   ↓
app.post("/add-student-api", ...)
   ↓
Creates the API
```

Thunder Client simply sends a request to test it:

```text
Thunder Client
   ↓
POST /add-student-api
   ↓
Express API
   ↓
MongoDB
```

So, **Thunder Client ≠ API**.

**Thunder Client = API testing tool.**

**Express = Framework used to create the API.**

**MongoDB = Database used to store the data.**

**EJS = Template engine used to display dynamic data in HTML.**
