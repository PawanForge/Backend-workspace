# Express + MongoDB — API, UI, HTML Form and REST API

The **main concept** of your code is that you are connecting **API + UI + HTML Form + MongoDB** in a single Express server.

---

## 1. Server Setup

```js
const app = express();
```

This creates an **Express application**.

### `express.json()`

```js
app.use(express.json());
```

This middleware reads **JSON data coming from Thunder Client or other API clients**.

Example:

```json
{
  "name": "Pawan",
  "age": 22
}
```

This data will be available inside:

```js
req.body
```

---

### `express.urlencoded()`

```js
app.use(express.urlencoded({ extended: true }));
```

This middleware reads **data submitted through an HTML form**.

So:

* `express.json()` → reads JSON/API data
* `express.urlencoded()` → reads HTML form data

---

# 2. MongoDB Connection

```js
const client = new MongoClient(url);

client.connect().then((connection) => {
```

This creates a connection with MongoDB.

Then:

```js
const db = connection.db(dbName);
```

This selects the `pawan` database.

### Simple Flow

```text
Express Server
      ↓
MongoClient
      ↓
MongoDB
      ↓
pawan Database
```

---

# 3. GET `/api`

```js
app.get("/api", async (req, resp) => {
    const collection = db.collection("my_information");

    const result = await collection.find().toArray();

    resp.send(result);
});
```

This route gets data from MongoDB and sends it to the client.

### What happens?

```text
GET /api
   ↓
Get data from MongoDB
   ↓
result
   ↓
Send JSON data to client
```

In Thunder Client:

```text
GET http://localhost:3200/api
```

You will receive the students stored in the database.

---

# 4. `/add-student-api` — Your Actual REST API

This is one of the most important parts:

```js
app.post("/add-student-api", async (req, resp) => {
```

It means:

> The client will **POST student data** to this endpoint.

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

The API receives this JSON data.

---

# 5. What is `req.body`?

```js
console.log(req.body);
```

The JSON sent by Thunder Client:

```json
{
  "name": "Pawan",
  "age": 22,
  "email": "pawan@gmail.com"
}
```

will be available in:

```js
req.body
```

Therefore:

```js
const { name, age, email } = req.body;
```

means:

> Take `name`, `age`, and `email` from the request body.

This is called **destructuring**.

---

# 6. Why Do We Need Validation?

```js
if (!name || !age || !email) {
    resp.send({
        message: "operation failed",
        success: false
    });

    return;
}
```

This checks whether any required field is missing.

For example:

```json
{
  "name": "Pawan",
  "age": 22
}
```

Here, `email` is missing.

Therefore, the data will **not be saved** to MongoDB.

### Simple Flow

```text
Request
   ↓
Check name
   ↓
Check age
   ↓
Check email
   ↓
If anything is missing → Operation failed
```

---

# 7. Save Data in MongoDB

```js
const collection = db.collection("my_information");

const result = await collection.insertOne(req.body);
```

`insertOne()` inserts the JSON data into the MongoDB collection.

### Simple Flow

```text
Thunder Client
      ↓
POST Request
      ↓
req.body
      ↓
Validation
      ↓
insertOne()
      ↓
MongoDB
```

For example, this data:

```json
{
  "name": "Pawan",
  "age": 22,
  "email": "pawan@gmail.com"
}
```

will be stored in the `my_information` collection.

---

# 8. Send Response

```js
resp.send({
    message: "data stored",
    success: true,
    result: result
});
```

After successfully inserting the data, the client receives a response.

Example:

```json
{
  "message": "data stored",
  "success": true
}
```

The `result` can also contain MongoDB's insertion information, such as the generated `_id`.

For example:

```json
{
  "acknowledged": true,
  "insertedId": "..."
}
```

---

# ⭐ Complete REST API Flow

Remember this flow:

```text
Thunder Client
      |
      | POST JSON
      ↓
/add-student-api
      |
      ↓
   req.body
      |
      ↓
  Validation
      |
      ↓
  insertOne()
      |
      ↓
   MongoDB
      |
      ↓
  Response
```

---

# 9. Types of Routes in Your Project

Your project has different routes for different purposes:

```text
/api
  → Get data from the database through an API

/ui
  → Display database data on an EJS webpage

/add
  → Display the HTML form

/add-student
  → Save data submitted through the HTML form

/add-student-api
  → Save JSON data received from Thunder Client/API
```

---

# ⭐ Most Important Difference

The most important distinction is:

```text
/add-student
      ↓
HTML Form
      ↓
Form Data
      ↓
Server
      ↓
MongoDB
```

Whereas:

```text
/add-student-api
      ↓
REST API
      ↓
JSON Data
      ↓
req.body
      ↓
MongoDB
```

### In one line:

**`/add-student` → Used for an HTML form.**

**`/add-student-api` → Used for a REST API/Thunder Client.**

---

# 🧠 Easy Way to Remember

| Route              | Purpose                 |
| ------------------ | ----------------------- |
| `/api`             | Get data as JSON        |
| `/ui`              | Display data on webpage |
| `/add`             | Show HTML form          |
| `/add-student`     | Process HTML form data  |
| `/add-student-api` | Process JSON/API data   |

### Final Concept

```text
                 EXPRESS SERVER
                       ↓
                    MongoDB
                       ↓
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
       /api           /ui            /add
        ↓              ↓              ↓
   JSON Data        EJS Page       HTML Form
                                      ↓
                                /add-student
                                      ↓
                                   MongoDB

                  /add-student-api
                         ↓
                   JSON / REST API
                         ↓
                      MongoDB
```

**API = Used to communicate with the server using data such as JSON.**

**UI = Used to display data to the user through a webpage.**

**HTML Form = Used to collect data from the user.**

**MongoDB = Used to store the data.**
