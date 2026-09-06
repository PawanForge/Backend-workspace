# API with MongoDB — Simple Notes

## 1. Import Packages

```js
import express from "express";
import { MongoClient } from "mongodb";
```

* **Express** → Used to create a server/API.
* **MongoClient** → Used to connect to MongoDB.

---

## 2. Create Express App

```js
const app = express();
```

This creates an **Express application**.

---

## 3. MongoDB Configuration

```js
const dbName = "pawan";
const url = "mongodb://localhost:27017";
```

* `dbName` → Name of the database.
* `url` → Address of the MongoDB server.

---

## 4. Create MongoDB Client

```js
const client = new MongoClient(url);
```

This creates a **MongoDB client** that will be used to connect to MongoDB.

---

## 5. Connect to MongoDB

```js
client.connect().then((connection) => {
```

After the connection to MongoDB is successful, the code inside `.then()` is executed.

### Simple Flow

```text
client.connect()
      ↓
   MongoDB
      ↓
   Connected
      ↓
    .then()
```

---

## 6. Select Database

```js
const db = connection.db(dbName);
```

This selects the `pawan` database.

```text
MongoDB
   ↓
 pawan
```

---

# API Part

## 7. Create API Route

```js
app.get("/api", async (req, resp) => {
```

This creates a `/api` endpoint.

You can access it in a browser or API client:

```text
http://localhost:3200/api
```

---

## 8. Select Collection

```js
const collection = db.collection("my_information");
```

This selects the `my_information` collection.

```text
MongoDB
   ↓
pawan              ← Database
   ↓
my_information    ← Collection
   ↓
Documents         ← Data
```

---

## 9. Get Data

```js
const result = await collection.find().toArray();
```

* `find()` → Finds documents in the collection.
* `toArray()` → Converts the documents into an array.
* `await` → Waits for the data to be received.
* `result` → Stores the fetched data.

### Example

```js
[
    {
        name: "aman",
        age: 18,
        email: "aman@gmail.com"
    }
]
```

---

## 10. Send API Response

```js
resp.send(result);
```

This sends the MongoDB data to the client as the API response.

### Simple Flow

```text
Browser
   ↓
GET /api
   ↓
Express
   ↓
MongoDB
   ↓
result
   ↓
resp.send(result)
   ↓
JSON response
```

---

# UI Part

## 11. Create UI Route

```js
app.get("/ui", async (req, resp) => {
```

This creates a route for the webpage.

URL:

```text
http://localhost:3200/ui
```

This route is used to display a webpage.

---

## 12. Fetch Data

```js
const result = await collection.find().toArray();
```

This fetches the student data from MongoDB.

---

## 13. Render EJS

```js
resp.render("student", { result });
```

This sends the `result` data to the `student.ejs` page.

### Simple Flow

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

# API vs UI

| API                | UI                    |
| ------------------ | --------------------- |
| `/api`             | `/ui`                 |
| Returns data       | Returns a webpage     |
| Uses `resp.send()` | Uses `resp.render()`  |
| Returns JSON/data  | Returns HTML/EJS page |

---

# Simple Flow

```text
                 Express
                    ↓
                 MongoDB
                    ↓
                  result
                 /      \
                ↓        ↓
              /api      /ui
                ↓        ↓
           JSON Data   EJS Page
```

---

## ⭐ Remember This

**API = Give MongoDB data to the client.**

**UI = Display MongoDB data on a webpage using EJS.**
