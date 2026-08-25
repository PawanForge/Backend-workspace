# Express.js + MongoDB — Required Notes

## 1. HTML Form

```html
<form action="/add-student" method="POST">

    <input type="text" name="name" placeholder="Enter Name">

    <input type="email" name="email" placeholder="Enter Email">

    <input type="number" name="age" placeholder="Enter Age">

    <button type="submit">Submit</button>

</form>
```

* `action` → where the form data goes.
* `method="POST"` → sends data using POST.
* `name` → key used inside `req.body`.

---

## 2. Middleware

```js
app.use(express.urlencoded({ extended: true }));
```

Required to read HTML form data.

```text
Form → POST → express.urlencoded() → req.body
```

---

## 3. POST Route

```js
app.post("/add-student", async (req, resp) => {
```

Runs when the browser sends:

```text
POST /add-student
```

---

## 4. `req.body`

```js
const { name, email, age } = req.body;
```

Gets the values submitted by the form.

For example:

```js
req.body = {
    name: "Pawan",
    email: "pawan@gmail.com",
    age: "22"
};
```

---

## 5. MongoDB Collection

```js
const collection = db.collection("my_information");
```

Gets the `my_information` collection from the database.

```text
Database: pawan
       ↓
Collection: my_information
```

---

## 6. Insert Data

```js
await collection.insertOne({
    name,
    email,
    age
});
```

Saves one document in MongoDB.

Example:

```js
{
    name: "Pawan",
    email: "pawan@gmail.com",
    age: "22"
}
```

---

## 7. `async` and `await`

```js
async (req, resp) => {
```

Allows the use of:

```js
await collection.insertOne(...)
```

`await` waits for MongoDB to finish saving the data.

---

## 8. Response

```js
resp.send("Data saved successfully");
```

Sends a message back to the browser after saving.

---

## 9. Complete Important Code

```js
app.use(express.urlencoded({ extended: true }));

app.post("/add-student", async (req, resp) => {

    const { name, email, age } = req.body;

    const collection = db.collection("my_information");

    await collection.insertOne({
        name,
        email,
        age
    });

    resp.send("Data saved successfully");
});
```

### Remember this flow

```text
HTML Form
   ↓
POST
   ↓
req.body
   ↓
MongoDB collection
   ↓
insertOne()
   ↓
resp.send()
```

### Most important things to learn

1. `form action`
2. `method="POST"`
3. `express.urlencoded()`
4. `req.body`
5. `app.post()`
6. `db.collection()`
7. `insertOne()`
8. `async / await`
9. `resp.send()`
