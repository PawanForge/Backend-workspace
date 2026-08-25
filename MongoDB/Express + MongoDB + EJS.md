# Express + MongoDB + EJS — Complete Notes

## 1. Import Required Packages

```js
import express from "express";
import { MongoClient } from "mongodb";
```

### `express`

Express ka use **web server aur routes** banane ke liye hota hai.

### `MongoClient`

`MongoClient` ka use **Node.js ko MongoDB se connect** karne ke liye hota hai.

---

# 2. Create Express Application

```js
const app = express();
```

Yahan Express ka application object `app` mein store ho raha hai.

Isi `app` ke through hum:

* Server start karenge
* Routes banayenge
* Request handle karenge
* Response bhejenge

Example:

```text
Browser
   ↓
Express app
   ↓
Route
```

---

# 3. Define Database Name

```js
const dbName = "pawan";
```

Yahan MongoDB ke database ka naam define kiya hai.

```text
MongoDB
   ↓
pawan
```

**Note:** `pawan` database ka naam hai, folder ka nahi.

---

# 4. Define MongoDB URL

```js
const url = "mongodb://localhost:27017";
```

Ye MongoDB ka address hai.

### Breakdown:

```text
mongodb://localhost:27017
    ↓          ↓       ↓
 Protocol   Computer  Port
```

* `mongodb://` → MongoDB protocol
* `localhost` → MongoDB same computer par running hai
* `27017` → MongoDB ka default port

---

# 5. Create MongoDB Client

```js
const client = new MongoClient(url);
```

Yahan `MongoClient` ka object banaya aur MongoDB ka URL diya.

`client` MongoDB se **connection establish karne** ke kaam aayega.

Flow:

```text
Node.js
   ↓
client
   ↓
MongoDB
```

---

# 6. Set EJS as View Engine

```js
app.set("view engine", "ejs");
```

Iska matlab:

> Express ko batao ki HTML pages ke liye EJS use karna hai.

EJS humein HTML ke andar JavaScript/data use karne deta hai.

Example:

```ejs
<h1><%= student.name %></h1>
```

---

# 7. Create GET Route

```js
app.get("/", async (req, resp) => {
```

Ye `/` URL ke liye GET route create karta hai.

Jab browser mein:

```text
http://localhost:3200/
```

open karoge, ye function chalega.

### `req`

Request ki information rakhta hai.

### `resp`

Browser ko response bhejne ke liye use hota hai.

### `async`

Is function ke andar hum `await` use kar rahe hain.

---

# 8. Connect to MongoDB

```js
await client.connect();
```

Yahan actual MongoDB connection hota hai.

```text
Node.js
   ↓
client.connect()
   ↓
MongoDB
   ↓
Connected
```

`await` ka matlab:

> MongoDB connection complete hone tak wait karo.

---

# 9. Select Database

```js
const db = client.db(dbName);
```

Yahan `pawan` database select ho raha hai.

Because:

```js
const dbName = "pawan";
```

So effectively:

```js
const db = client.db("pawan");
```

Structure:

```text
MongoDB
   ↓
pawan
```

---

# 10. Select Collection

```js
const collection = db.collection("my_information");
```

Ab `pawan` database ke andar `my_information` collection select kiya.

MongoDB structure:

```text
MongoDB
   ↓
Database
   ↓
Collection
   ↓
Documents
```

Aapke case mein:

```text
MongoDB
   ↓
pawan                  ← Database
   ↓
my_information         ← Collection
   ↓
Student documents      ← Actual data
```

---

# 11. Fetch All Documents

```js
const result = await collection.find().toArray();
```

Ye bahut important line hai.

### `find()`

Collection ke documents ko find karta hai.

### `toArray()`

Documents ko JavaScript array mein convert karta hai.

Suppose MongoDB mein:

```js
{
    name: "aman",
    age: 18,
    email: "aman@gmail.com"
}
```

aur doosre students hain.

Toh `result` kuch aisa hoga:

```js
[
    {
        name: "aman",
        age: 18,
        email: "aman@gmail.com"
    },
    {
        name: "pawan",
        age: 20,
        email: "pawan@gmail.com"
    }
]
```

### `await` kyun?

MongoDB se data aane mein time lagta hai.

```text
MongoDB request
      ↓
     wait
      ↓
Data received
      ↓
result
```

Isliye `await` use karte hain.

---

# 12. Console Mein Data Dekhna

```js
console.log(result);
```

Ye MongoDB se aaya hua data terminal mein print karega.

Example:

```text
[
  {
    name: 'aman',
    age: 18,
    email: 'aman@gmail.com'
  }
]
```

---

# 13. Data EJS Ko Send Karna

```js
resp.render("student", { result });
```

Ye line **EJS page ko render** karti hai aur `result` ko EJS ke paas bhejti hai.

```text
MongoDB
   ↓
result
   ↓
resp.render()
   ↓
student.ejs
```

`{ result }` ka matlab essentially:

```js
{
    result: result
}
```

EJS mein ab `result` available hai.

---

# 14. Start Express Server

```js
app.listen(3200, () => {
    console.log("Server running on port 3200");
});
```

Express server port `3200` par start hoga.

Browser:

```text
http://localhost:3200
```

---

# EJS File

File structure:

```text
project/
│
├── app.js
│
├── package.json
│
└── views/
    └── student.ejs
```

`student.ejs` ko `views` folder ke andar rakhna important hai.

---

# 15. HTML Table

```html
<table>
```

Student data ko table format mein display karne ke liye table banaya.

### Table headings:

```html
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>Email</th>
</tr>
```

`th` = table heading.

Output:

```text
Name | Age | Email
```

---

# 16. EJS `forEach()`

```ejs
<% result.forEach((student) => { %>
```

`result` ek array hai:

```text
result
 ↓
[ student1, student2, student3 ]
```

`forEach()` ek-ek student ko access karta hai.

```text
student1 → student
student2 → student
student3 → student
```

---

# 17. Student Data Display

```ejs
<td><%= student.name %></td>
```

Current student ka `name` display karega.

```ejs
<td><%= student.age %></td>
```

Current student ki `age` display karega.

```ejs
<td><%= student.email %></td>
```

Current student ka `email` display karega.

---

# 18. EJS Tags

Ye 2 tags specially yaad rakho:

### JavaScript execute karna

```ejs
<% code %>
```

Example:

```ejs
<% result.forEach(...) %>
```

Ye code execute karta hai, directly output nahi karta.

### Value display karna

```ejs
<%= value %>
```

Example:

```ejs
<%= student.name %>
```

Ye value ko HTML mein display karta hai.

---

# 19. Complete Data Flow

Ye **sabse important flow** hai:

```text
                 Browser
                    ↓
          http://localhost:3200/
                    ↓
              Express Route
                    ↓
              client.connect()
                    ↓
                 MongoDB
                    ↓
             pawan database
                    ↓
          my_information collection
                    ↓
                find()
                    ↓
              toArray()
                    ↓
                 result
                    ↓
        resp.render("student", {result})
                    ↓
              student.ejs
                    ↓
              result.forEach()
                    ↓
          student.name / age / email
                    ↓
                 HTML Table
                    ↓
                  Browser
```

## ⭐ Short Formula

Is poore concept ko bas ye sequence yaad rakho:

```text
Import
  ↓
Express App
  ↓
Database Name
  ↓
MongoDB URL
  ↓
MongoClient
  ↓
Connect
  ↓
Database
  ↓
Collection
  ↓
find()
  ↓
toArray()
  ↓
result
  ↓
render()
  ↓
EJS
  ↓
forEach()
  ↓
HTML
```

**Express = server**, **MongoDB = data**, **EJS = data ko HTML page mein display karne ka template engine**.
