# Mongoose + Express CRUD Notes

These notes explain how **Express, Mongoose, MongoDB, routes, and CRUD operations** work together.

---

# 1. Import Required Packages

```js
import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
```

### `express`

Express is used to create the **server and API routes**.

### `mongoose`

Mongoose is used to **connect Node.js with MongoDB** and work with MongoDB using schemas and models.

### `studentModel`

`studentModel` is the Mongoose model used to perform database operations on student documents.

---

# 2. Create Express App

```js
const app = express();
```

This creates the Express application.

Using `app`, we can create different HTTP routes:

```text
GET
POST
PUT
DELETE
```

For example:

```js
app.get(...)
app.post(...)
app.put(...)
app.delete(...)
```

---

# 3. JSON Middleware

```js
app.use(express.json());
```

This middleware allows Express to read **JSON data sent by the client**.

For example, a client may send:

```json
{
    "name": "Pawan",
    "age": 20,
    "email": "pawan@test.com"
}
```

Express makes this data available through:

```js
req.body
```

### Simple Flow

```text
Client
   ↓
JSON Data
   ↓
express.json()
   ↓
req.body
```

---

# 4. Connect to MongoDB

```js
await mongoose.connect("mongodb://localhost:27017/school");
```

This connects your Node.js application to MongoDB.

Here:

```text
mongodb://localhost:27017/school
                     ↓
                school database
```

* `mongodb://` → MongoDB connection protocol
* `localhost` → MongoDB is running on your computer
* `27017` → Default MongoDB port
* `school` → Database name

### Why use `await`?

`await` means:

> Wait for the MongoDB connection to complete before continuing.

### Flow

```text
Node.js
   ↓
mongoose.connect()
   ↓
MongoDB
   ↓
school database
```

---

# 5. Mongoose Schema and Model

A typical model file may contain:

```js
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const studentModel = mongoose.model("students", studentSchema);

export default studentModel;
```

## Schema

A **schema** defines the structure and data types of a document.

```text
Student
 ├── name  → String
 ├── email → String
 └── age   → Number
```

For example:

```js
{
    name: "Pawan",
    email: "pawan@test.com",
    age: 20
}
```

## Model

```js
mongoose.model("students", studentSchema);
```

The **model** is used to perform database operations such as:

* Create
* Read
* Update
* Delete

### Easy way to remember

```text
Schema → Defines the structure

Model → Performs database operations
```

---

# 6. GET — Read Data

```js
app.get("/", async (req, resp) => {

    const studentData = await studentModel.find();

    resp.send(studentData);

});
```

This route reads students from MongoDB.

### Flow

```text
Browser / Client
       ↓
    GET /
       ↓
Express Route
       ↓
studentModel.find()
       ↓
MongoDB
       ↓
Student Data
       ↓
resp.send()
       ↓
Client
```

### `find()`

```js
studentModel.find()
```

is used to retrieve **multiple documents**.

For example:

```js
[
    {
        name: "Pawan",
        age: 20
    },
    {
        name: "Rahul",
        age: 22
    }
]
```

---

# 7. POST — Create Data

```js
app.post("/save", async (req, resp) => {

    const { name, age, email } = req.body;

    const studentData = await studentModel.create({
        name,
        age,
        email
    });

    resp.send(studentData);

});
```

`POST` is commonly used to **create new data**.

The client sends:

```json
{
    "name": "Pawan",
    "age": 20,
    "email": "pawan@test.com"
}
```

The data is available through:

```js
req.body
```

Then:

```js
studentModel.create(...)
```

creates a new student document in MongoDB.

### Flow

```text
Client
   ↓
POST /save
   ↓
req.body
   ↓
studentModel.create()
   ↓
MongoDB
   ↓
New Student
   ↓
Response
```

---

# 8. Understanding `req.body`

Consider this request:

```json
{
    "name": "Pawan",
    "age": 20,
    "email": "pawan@test.com"
}
```

Then:

```js
req.body
```

contains the complete object.

You can extract individual values using destructuring:

```js
const { name, age, email } = req.body;
```

Now:

```text
name  → "Pawan"

age   → 20

email → "pawan@test.com"
```

### Remember

```text
req.body
   ↓
Data sent inside the request body
```

---

# 9. PUT — Update Data

```js
app.put("/update/:id", async (req, resp) => {

    const id = req.params.id;

    await studentModel.findByIdAndUpdate(id, {
        ...req.body
    });

    resp.send("Student updated successfully");

});
```

`PUT` is used to **update an existing resource**.

The `:id` is a dynamic value from the URL.

For example:

```text
PUT /update/68abc123
```

The ID can be accessed using:

```js
const id = req.params.id;
```

So:

```text
/update/68abc123
       ↓
req.params.id
       ↓
68abc123
```

---

# 10. What Does `...req.body` Mean?

Suppose the client sends:

```json
{
    "name": "Rahul",
    "age": 22
}
```

Then:

```js
{
    ...req.body
}
```

means:

> Copy all properties from `req.body` into this object.

So it becomes approximately:

```js
{
    name: "Rahul",
    age: 22
}
```

Then:

```js
studentModel.findByIdAndUpdate(id, {
    ...req.body
});
```

updates the matching student.

### Flow

```text
PUT /update/:id
       ↓
req.params.id
       ↓
req.body
       ↓
findByIdAndUpdate()
       ↓
MongoDB
       ↓
Updated Student
```

---

# 11. DELETE — Delete Data

```js
app.delete("/delete/:id", async (req, resp) => {

    const id = req.params.id;

    const studentData =
        await studentModel.findByIdAndDelete(id);

    resp.send(studentData);

});
```

`DELETE` is used to remove an existing document.

The ID comes from the URL:

```text
DELETE /delete/68abc123
```

You can get it using:

```js
const id = req.params.id;
```

Then:

```js
studentModel.findByIdAndDelete(id);
```

finds the document by ID and deletes it.

### Flow

```text
DELETE /delete/:id
        ↓
req.params.id
        ↓
findByIdAndDelete()
        ↓
MongoDB
        ↓
Document Deleted
```

---

# 12. `req.params` vs `req.body`

This is **very important**.

## `req.params`

Used to get values from the **URL**.

Example:

```text
/update/123
```

Then:

```js
req.params.id
```

gives:

```text
123
```

---

## `req.body`

Used to get data sent in the **request body**.

Example:

```json
{
    "name": "Pawan",
    "age": 20
}
```

Then:

```js
req.body
```

gives the complete object.

### Easy Rule

```text
URL Data
   ↓
req.params

Body Data
   ↓
req.body
```

---

# 13. CRUD

CRUD represents the four basic database operations.

| Operation | HTTP Method | Mongoose Method       |
| --------- | ----------- | --------------------- |
| Create    | POST        | `create()`            |
| Read      | GET         | `find()`              |
| Update    | PUT         | `findByIdAndUpdate()` |
| Delete    | DELETE      | `findByIdAndDelete()` |

### Easy Trick

```text
POST   → Create
GET    → Read
PUT    → Update
DELETE → Delete
```

---

# 14. `try...catch`

When working with databases, errors can occur.

Example:

```js
try {

    const data = await studentModel.find();

} catch (error) {

    console.log(error);

}
```

### Why use `try...catch`?

It allows you to handle errors instead of allowing an unhandled error to stop the request.

### Flow

```text
try
 ↓
Run database code
 ↓
Error?
 ├── No → Continue
 │
 └── Yes → catch
              ↓
         Handle error
```

A better API can send an error response:

```js
catch (error) {

    resp.status(500).send({
        message: "Error fetching data",
        success: false
    });

}
```

---

# 15. HTTP Response and Status Codes

Example:

```js
resp.status(500).send({
    message: "Error fetching data",
    success: false
});
```

### `resp.send()`

Sends a response back to the client.

### `resp.status()`

Sets the HTTP status code.

Common status codes:

```text
200 → Request successful

201 → Resource created successfully

400 → Bad request

404 → Resource not found

500 → Internal server error
```

### Example

For successful creation:

```js
resp.status(201).send({
    message: "Student created successfully",
    success: true
});
```

---

# 16. Important Mongoose Methods

These are the most important methods to remember.

## `find()`

```js
studentModel.find()
```

→ Retrieves multiple documents.

---

## `findById()`

```js
studentModel.findById(id)
```

→ Retrieves one document using its ID.

---

## `create()`

```js
studentModel.create(data)
```

→ Creates a new document.

---

## `findByIdAndUpdate()`

```js
studentModel.findByIdAndUpdate(id, data)
```

→ Updates a document using its ID.

---

## `findByIdAndDelete()`

```js
studentModel.findByIdAndDelete(id)
```

→ Deletes a document using its ID.

---

# 17. Complete CRUD Flow

```text
                 Express Server
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       req.body    req.params     Routes
          │            │            │
          └────────────┼────────────┘
                       ↓
                Mongoose Model
                       ↓
                    MongoDB
                       ↓
                   Response
```

---

# 18. Complete Mental Picture

```text
              CLIENT
                 │
                 ↓
          EXPRESS SERVER
                 │
        ┌────────┼─────────┐
        ↓        ↓         ↓
      GET      POST       PUT
        │        │         │
        │        │         │
      find()   create()   update()
        │        │         │
        └────────┼─────────┘
                 ↓
             MONGOOSE
                 ↓
              MONGODB
                 ↑
                 │
             DELETE
                 │
     findByIdAndDelete()
```

---

# ⭐ Most Important Relationships

Remember these relationships:

```text
Express
   ↓
Creates server and routes
```

```text
Mongoose
   ↓
Connects Node.js application to MongoDB
   ↓
Provides models and database methods
```

```text
Schema
   ↓
Defines document structure and data types
```

```text
Model
   ↓
Performs database operations
```

```text
req.body
   ↓
Data sent in the request body
```

```text
req.params
   ↓
Data received from the URL
```

```text
CRUD
   ↓
Create
Read
Update
Delete
```

---

# 🧠 One-Line Revision

```text
Express → Creates routes

Mongoose → Works with MongoDB

Schema → Defines data structure

Model → Performs database operations

req.body → Gets body data

req.params → Gets URL parameters

POST → Create

GET → Read

PUT → Update

DELETE → Delete
```

## ⭐ Final Formula

```text
Client
  ↓
Express Route
  ↓
req.body / req.params
  ↓
Mongoose Model
  ↓
MongoDB
  ↓
Response
```

**The key idea is: Express handles the request, Mongoose communicates with MongoDB through the model, MongoDB stores the data, and Express sends the response back to the client.**
