Bilkul. Neeche tumhare code ke **short + clear notes** hain, taaki CRUD aur Mongoose ka flow easily yaad rahe.

# Mongoose + Express CRUD Notes

## 1. Imports

```js
import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
```

* `express` → server/routes banane ke liye.
* `mongoose` → MongoDB ke saath kaam karne ke liye.
* `studentModel` → students collection ke data ko handle karta hai.

---

## 2. Express App

```js
const app = express();
```

`app` ke through hum routes banate hain:

```text
GET
POST
PUT
DELETE
```

---

## 3. JSON Middleware

```js
app.use(express.json());
```

### Why?

Client se JSON data aata hai:

```json
{
  "name": "Pawan",
  "age": 20,
  "email": "pawan@test.com"
}
```

`express.json()` is JSON ko `req.body` ke andar available karata hai.

```js
req.body
```

---

# 4. MongoDB Connection

```js
await mongoose.connect("mongodb://localhost:27017/school");
```

Connection:

```text
MongoDB
   ↓
school database
   ↓
studentModel
```

`await` ka matlab: **pehle database connect hone do, phir aage ka code chale.**

---

# 5. GET — Data Read Karna

```js
app.get("/", async (req, resp) => {
    const studentData = await studentModel.find();

    resp.send(studentData);
});
```

### Flow

```text
Browser
   ↓ GET /
Express
   ↓
studentModel.find()
   ↓
MongoDB
   ↓
Students Data
   ↓
resp.send()
   ↓
Browser
```

### Important

```js
studentModel.find()
```

→ MongoDB se **multiple documents** nikalta hai.

---

# 6. POST — Data Store Karna

```js
app.post("/save", async (req, resp) => {
```

POST ka use **new data create/store** karne ke liye hota hai.

Client:

```json
{
  "name": "Pawan",
  "age": 20,
  "email": "pawan@test.com"
}
```

Server mein:

```js
const { name, age, email } = req.body;
```

Data create:

```js
const studentData = await studentModel.create({
    name,
    age,
    email
});
```

### Flow

```text
Client
  ↓ POST /save
req.body
  ↓
studentModel.create()
  ↓
MongoDB
  ↓
New Student
```

---

# 7. `req.body`

```js
const { name, age, email } = req.body;
```

Agar request:

```json
{
  "name": "Pawan",
  "age": 20,
  "email": "pawan@test.com"
}
```

Then:

```js
name  → "Pawan"
age   → 20
email → "pawan@test.com"
```

---

# 8. PUT — Data Update Karna

```js
app.put("/update/:id", async (req, resp) => {
```

`:id` URL se ID leta hai.

Example:

```text
PUT /update/68abc123
```

ID:

```js
const id = req.params.id;
```

### Update

```js
await studentModel.findByIdAndUpdate(id, {
    ...req.body
});
```

`...req.body` ka matlab:

> `req.body` ke saare fields ko update ke liye use karo.

Example:

```json
{
  "name": "Rahul",
  "age": 22
}
```

Then MongoDB mein matching ID wale student ke fields update honge.

### Flow

```text
PUT /update/:id
       ↓
req.params.id
       ↓
findByIdAndUpdate()
       ↓
MongoDB
```

---

# 9. DELETE — Data Delete Karna

```js
app.delete("/delete/:id", async (req, resp) => {
```

ID:

```js
const id = req.params.id;
```

Delete:

```js
const studentData =
    await studentModel.findByIdAndDelete(id);
```

### Flow

```text
DELETE /delete/:id
        ↓
   req.params.id
        ↓
findByIdAndDelete()
        ↓
     MongoDB
```

---

# 10. `req.params` vs `req.body`

Ye **bahut important** hai.

### `req.params`

URL se data:

```text
/update/123
```

```js
req.params.id
```

→ `123`

### `req.body`

Request ke andar data:

```json
{
  "name": "Pawan",
  "age": 20
}
```

```js
req.body
```

→ complete JSON object.

### Yaad rakho

```text
URL data       → req.params
Body data      → req.body
```

---

# 11. CRUD

Tumhare code mein complete CRUD hai:

| Operation | HTTP   | Mongoose              |
| --------- | ------ | --------------------- |
| Create    | POST   | `create()`            |
| Read      | GET    | `find()`              |
| Update    | PUT    | `findByIdAndUpdate()` |
| Delete    | DELETE | `findByIdAndDelete()` |

### Easy trick

```text
POST   → Create
GET    → Read
PUT    → Update
DELETE → Delete
```

---

# 12. `try...catch`

Example:

```js
try {
    const data = await studentModel.find();
} catch (error) {
    console.log(error);
}
```

### Why?

Agar MongoDB/query mein error aaye, server crash hone ke bajay hum error handle kar sakte hain.

```text
try
 ↓
Code run
 ↓
Error?
 ↓
catch
```

---

# 13. Response

Example:

```js
resp.status(500).send({
    message: "Error fetching data",
    success: false
});
```

### `resp.send()`

Client ko response bhejta hai.

### `resp.status(500)`

HTTP status code set karta hai.

Common codes:

```text
200 → Success
201 → Created
400 → Bad Request
404 → Not Found
500 → Server Error
```

---

# 14. Old Code ka Meaning

Tumne neeche ye code comment kiya hai:

```js
const schema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const studentsModel = mongoose.model("students", schema);
```

### Schema

Schema batata hai ki document ka structure kya hoga:

```text
Student
 ├── name  → String
 ├── email → String
 └── age   → Number
```

### Model

```js
mongoose.model("students", schema)
```

Model MongoDB collection ke saath operations karne ke liye use hota hai.

---

# 15. Most Important Mongoose Methods

Ye methods yaad kar lo:

```js
find()
```

→ multiple documents read

```js
findById()
```

→ ID se ek document read

```js
create()
```

→ new document create

```js
findByIdAndUpdate()
```

→ ID se update

```js
findByIdAndDelete()
```

→ ID se delete

---

## 🔥 Complete Mental Picture

```text
                 Express Server
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     req.body       req.params      Route
        │              │
        └───────┬──────┘
                ↓
          Mongoose Model
                ↓
             MongoDB
                ↓
             Response
```

**Bas ye relation strong kar lo:**

```text
Express → Routes
Mongoose → MongoDB se baat
Schema → Data ka structure
Model → Database operations
req.body → Body ka data
req.params → URL ka data
CRUD → Create, Read, Update, Delete
```
