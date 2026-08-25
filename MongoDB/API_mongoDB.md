# API with MongoDB — Simple Notes

## 1. Import Packages

```js
import express from "express";
import { MongoClient } from "mongodb";
```

* **Express** → server/API banane ke liye
* **MongoClient** → MongoDB se connect karne ke liye

---

## 2. Create Express App

```js
const app = express();
```

Express application create ki.

---

## 3. MongoDB Configuration

```js
const dbName = "pawan";
const url = "mongodb://localhost:27017";
```

* `dbName` → database ka naam
* `url` → MongoDB ka address

---

## 4. Create MongoDB Client

```js
const client = new MongoClient(url);
```

MongoDB connection ke liye client create kiya.

---

## 5. Connect MongoDB

```js
client.connect().then((connection) => {
```

MongoDB se connection successful hone ke baad `.then()` ke andar ka code execute hota hai.

```text id="jv6u1u"
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

`pawan` database select kiya.

```text id="7l5q1n"
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

Ye `/api` endpoint create karta hai.

Browser/API client:

```text
http://localhost:3200/api
```

---

## 8. Select Collection

```js
const collection = db.collection("my_information");
```

`my_information` collection select ki.

```text id="1x7d7u"
MongoDB
   ↓
pawan          ← Database
   ↓
my_information ← Collection
   ↓
Documents      ← Data
```

---

## 9. Get Data

```js
const result = await collection.find().toArray();
```

* `find()` → documents find karta hai
* `toArray()` → documents ko array mein convert karta hai
* `await` → data aane ka wait karta hai
* `result` → fetched data store karta hai

Example:

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

MongoDB ka data client ko response mein bhejta hai.

```text id="w8v42s"
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

URL:

```text
http://localhost:3200/ui
```

Ye webpage ke liye hai.

---

## 12. Fetch Data

```js
const result = await collection.find().toArray();
```

MongoDB se students ka data fetch karta hai.

---

## 13. Render EJS

```js
resp.render("student", { result });
```

`result` ko `student.ejs` page mein bhejta hai.

```text id="wlz8yy"
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

| API                   | UI                       |
| --------------------- | ------------------------ |
| `/api`                | `/ui`                    |
| Data return karta hai | Webpage return karta hai |
| `resp.send()`         | `resp.render()`          |
| JSON/data             | HTML/EJS                 |

### Simple Flow

```text id="p4ek4r"
              Express
                 ↓
             MongoDB
                 ↓
              result
              /     \
             ↓       ↓
          /api      /ui
            ↓        ↓
        JSON Data   EJS Page
```

## ⭐ Yaad rakhne wali line

**API = MongoDB ka data client ko dena.**

**UI = MongoDB ka data EJS ke through webpage par dikhana.**
