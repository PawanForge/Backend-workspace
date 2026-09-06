# Express + MongoDB + EJS — Complete Notes

Your code is basically doing **3 main things**:

```text
Express Server
      ↓
MongoDB
      ↓
EJS / HTML UI
```

* **Express** → Creates the server and handles requests.
* **MongoDB** → Stores and provides the data.
* **EJS** → Displays dynamic data inside HTML pages.

---

# 1. Import Required Packages

```js
import express from "express";
import { MongoClient } from "mongodb";
```

### `express`

Express is used to create the **web server and routes**.

### `MongoClient`

`MongoClient` is used to **connect Node.js to MongoDB**.

---

# 2. Create Express Application

```js
const app = express();
```

Here, the Express application object is stored in the variable `app`.

Through `app`, we can:

* Start the server
* Create routes
* Handle requests
* Send responses

### Example

```text
Browser
   ↓
Express App
   ↓
Route
```

---

# 3. Define Database Name

```js
const dbName = "pawan";
```

Here, we define the name of the MongoDB database.

```text
MongoDB
   ↓
pawan
```

### Note

`pawan` is the **database name**, not a folder name.

---

# 4. Define MongoDB URL

```js
const url = "mongodb://localhost:27017";
```

This is the address of the MongoDB server.

### Breakdown

```text
mongodb://localhost:27017
     ↓          ↓       ↓
 Protocol    Computer  Port
```

* `mongodb://` → MongoDB protocol
* `localhost` → MongoDB is running on the same computer
* `27017` → MongoDB's default port

---

# 5. Create MongoDB Client

```js
const client = new MongoClient(url);
```

Here, we create a `MongoClient` object and provide the MongoDB URL.

The `client` will be used to **establish a connection with MongoDB**.

### Flow

```text
Node.js
   ↓
client
   ↓
MongoDB
```

---

# 6. Set EJS as the View Engine

```js
app.set("view engine", "ejs");
```

This tells Express:

> Use EJS for rendering HTML pages.

EJS allows us to use **JavaScript and dynamic data inside HTML**.

### Example

```ejs
<h1><%= student.name %></h1>
```

If the student's name is `Pawan`, the browser will display:

```text
Pawan
```

---

# 7. Create GET Route

```js
app.get("/", async (req, resp) => {
```

This creates a **GET route for `/`**.

When you open:

```text
http://localhost:3200/
```

this function will execute.

### `req`

`req` contains information about the incoming request.

### `resp`

`resp` is used to send a response back to the browser.

### `async`

The function is `async` because we use `await` inside it.

---

# 8. Connect to MongoDB

```js
await client.connect();
```

This establishes the actual connection with MongoDB.

### Flow

```text
Node.js
   ↓
client.connect()
   ↓
MongoDB
   ↓
Connected
```

### Why use `await`?

`await` means:

> Wait until the MongoDB connection is completed.

The program waits for the connection before continuing.

---

# 9. Select Database

```js
const db = client.db(dbName);
```

This selects the `pawan` database.

Because:

```js
const dbName = "pawan";
```

the following:

```js
const db = client.db(dbName);
```

is effectively:

```js
const db = client.db("pawan");
```

### Structure

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

Now we select the `my_information` collection inside the `pawan` database.

### MongoDB Structure

```text
MongoDB
   ↓
Database
   ↓
Collection
   ↓
Documents
```

In your project:

```text
MongoDB
   ↓
pawan                    ← Database
   ↓
my_information           ← Collection
   ↓
Student documents        ← Actual data
```

---

# 11. Fetch All Documents

```js
const result = await collection.find().toArray();
```

This is a very important line.

### `find()`

`find()` is used to find documents inside the collection.

### `toArray()`

`toArray()` converts the MongoDB results into a JavaScript array.

Suppose MongoDB contains:

```js
{
    name: "aman",
    age: 18,
    email: "aman@gmail.com"
}
```

and other students.

Then `result` might look like:

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

### Why use `await`?

Getting data from MongoDB takes some time.

```text
MongoDB Request
      ↓
    Wait
      ↓
Data Received
      ↓
    result
```

Therefore, we use `await`.

---

# 12. Display Data in the Console

```js
console.log(result);
```

This prints the data received from MongoDB in the terminal.

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

This is useful for checking whether the data was successfully retrieved.

---

# 13. Send Data to EJS

```js
resp.render("student", { result });
```

This line **renders the EJS page** and sends the `result` data to it.

### Flow

```text
MongoDB
   ↓
result
   ↓
resp.render()
   ↓
student.ejs
```

The following:

```js
{ result }
```

is shorthand for:

```js
{
    result: result
}
```

So the `result` variable becomes available inside `student.ejs`.

---

# 14. Start Express Server

```js
app.listen(3200, () => {
    console.log("Server running on port 3200");
});
```

This starts the Express server on port `3200`.

You can open the application in your browser:

```text
http://localhost:3200
```

### Flow

```text
Express
   ↓
Port 3200
   ↓
http://localhost:3200
   ↓
Browser
```

---

# EJS File Structure

Your project can have this structure:

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

The `student.ejs` file should normally be inside the `views` folder when using Express's default view configuration.

---

# 15. HTML Table

```html
<table>
```

A table is used to display student data in rows and columns.

### Table Headings

```html
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>Email</th>
</tr>
```

`th` means **table heading**.

The output will look like:

```text
Name | Age | Email
```

---

# 16. EJS `forEach()`

```ejs
<% result.forEach((student) => { %>
```

`result` is an array:

```text
result
   ↓
[ student1, student2, student3 ]
```

`forEach()` goes through each student one by one.

```text
student1 → student
student2 → student
student3 → student
```

This allows you to display every student in the table.

---

# 17. Display Student Data

### Display Name

```ejs
<td><%= student.name %></td>
```

This displays the current student's `name`.

### Display Age

```ejs
<td><%= student.age %></td>
```

This displays the current student's `age`.

### Display Email

```ejs
<td><%= student.email %></td>
```

This displays the current student's `email`.

For example, if:

```js
student = {
    name: "Pawan",
    age: 22,
    email: "pawan@gmail.com"
}
```

the table row will display:

```text
Pawan | 22 | pawan@gmail.com
```

---

# 18. EJS Tags

There are two important EJS tags to remember.

## JavaScript Code

```ejs
<% code %>
```

This executes JavaScript code but does **not directly display its result**.

Example:

```ejs
<% result.forEach(...) %>
```

This is used for loops and other JavaScript logic.

---

## Display a Value

```ejs
<%= value %>
```

This displays the value inside the HTML.

Example:

```ejs
<%= student.name %>
```

This displays the student's name.

### Easy Difference

```text
<% %>
   ↓
Execute JavaScript

<%= %>
   ↓
Display a value
```

---

# 19. Complete Data Flow

This is the **most important flow** to understand:

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
          resp.render("student", { result })
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

---

# ⭐ Short Formula

You can remember the whole concept using this sequence:

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
   ↓
Browser
```

---

# ⭐ Final Things to Remember

### Express

**Express = Server and routes**

It receives requests and sends responses.

### MongoDB

**MongoDB = Database**

It stores and provides your student data.

### EJS

**EJS = Template engine**

It allows you to put dynamic data inside HTML pages.

### Simple Formula

```text
Express
   ↓
Handles Request
   ↓
MongoDB
   ↓
Gets Data
   ↓
EJS
   ↓
Creates HTML
   ↓
Browser
```

**In one line:**

> **Express handles the server, MongoDB stores the data, and EJS displays the data on the HTML page.**
