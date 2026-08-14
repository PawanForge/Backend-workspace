# Express.js — Basic Knowledge Notes

## 1. What is Express.js?

**Express.js is a web framework for Node.js.**

It helps us easily create:

* Web servers
* APIs
* Backend applications
* REST APIs

### Simple definition

> **Express.js makes it easier to build a backend/server using Node.js.**

---

## 2. Node.js vs Express.js

This is important to understand first.

### Node.js

Node.js allows JavaScript to run outside the browser.

For example, Node.js can create a server using its built-in `http` module.

### Express.js

Express is built **on top of Node.js** and makes server development easier.

Think:

```text
Node.js
   ↓
Express.js
   ↓
Backend / API
```

### Real-life example

Think of **Node.js as an engine** and **Express as tools that make using that engine easier**.

---

# 3. Why do we use Express?

Suppose we want to create an API:

```text
GET /users
GET /products
POST /login
```

Express gives us a very simple way to create these routes.

Without Express, we would need to handle much more HTTP logic ourselves.

With Express:

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

This creates a simple server.

---

# 4. Installing Express

First create a Node.js project:

```bash
mkdir myapp
cd myapp
npm init -y
```

Install Express:

```bash
npm install express
```

Then create:

```text
app.js
```

---

# 5. First Express Program

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started");
});
```

Now run:

```bash
node app.js
```

Open:

```text
http://localhost:3000
```

You will see:

```text
Hello World
```

---

# 6. Understanding the Code

### Step 1

```js
const express = require("express");
```

This imports Express.

---

### Step 2

```js
const app = express();
```

This creates an Express application.

You can think of `app` as your backend application.

---

### Step 3

```js
app.get("/", (req, res) => {
    res.send("Hello World");
});
```

This creates a **GET route**.

It means:

> When someone sends a GET request to `/`, send `"Hello World"`.

---

### Step 4

```js
app.listen(3000);
```

This starts the server on port `3000`.

---

# 7. What is a Route?

A **route** tells the server what to do when a client requests a particular URL.

Example:

```js
app.get("/about", (req, res) => {
    res.send("About Page");
});
```

When the user visits:

```text
http://localhost:3000/about
```

The server responds:

```text
About Page
```

Another route:

```js
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});
```

So:

```text
/          → Home
/about     → About
/contact   → Contact
```

---

# 8. HTTP Methods

Express commonly works with HTTP methods.

### GET

Used to **get/read data**.

```js
app.get("/users", (req, res) => {
    res.send("Get users");
});
```

### POST

Used to **create/send data**.

```js
app.post("/users", (req, res) => {
    res.send("Create user");
});
```

### PUT

Used to update/replace data.

```js
app.put("/users/1", (req, res) => {
    res.send("Update user");
});
```

### DELETE

Used to delete data.

```js
app.delete("/users/1", (req, res) => {
    res.send("Delete user");
});
```

For basic understanding:

```text
GET     → Read
POST    → Create
PUT     → Update
DELETE  → Delete
```

---

# 9. What are `req` and `res`?

You will see these everywhere in Express.

```js
app.get("/", (req, res) => {
    
});
```

### `req`

`req` means **request**.

It contains information coming **from the client to the server**.

For example:

```text
URL
parameters
query
body
headers
```

### `res`

`res` means **response**.

It is used to send information **from the server back to the client**.

Example:

```js
res.send("Hello");
```

Easy way to remember:

```text
Client
  ↓
 req
Server
  ↓
 res
Client
```

---

# 10. `res.send()`

Used to send a response.

```js
app.get("/", (req, res) => {
    res.send("Welcome to my website");
});
```

The browser receives:

```text
Welcome to my website
```

---

# 11. `res.json()`

APIs usually return JSON.

Example:

```js
app.get("/user", (req, res) => {
    res.json({
        name: "John",
        age: 25
    });
});
```

Response:

```json
{
  "name": "John",
  "age": 25
}
```

This is very common when building APIs.

---

# 12. Route Parameters

Suppose we want:

```text
/users/101
/users/102
/users/103
```

We don't want to create a separate route for every user.

We can use a parameter:

```js
app.get("/users/:id", (req, res) => {
    res.send(req.params.id);
});
```

If the user visits:

```text
/users/101
```

Then:

```js
req.params.id
```

will contain:

```text
101
```

### Remember

```text
/users/:id
        ↑
     parameter
```

---

# 13. Query Parameters

Query parameters come after `?`.

Example:

```text
/users?name=john
```

Express can access them using:

```js
req.query
```

Example:

```js
app.get("/users", (req, res) => {
    res.send(req.query.name);
});
```

Request:

```text
/users?name=john
```

Response:

```text
john
```

---

# 14. Request Body

The request body is commonly used when sending data to the server.

For example, a client sends:

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

Express can read JSON using:

```js
app.use(express.json());
```

Then:

```js
app.post("/users", (req, res) => {
    console.log(req.body);

    res.json(req.body);
});
```

---

# 15. What is Middleware?

**Middleware is one of the most important concepts in Express.**

Middleware is a function that runs **between the request and the final response**.

Example:

```js
app.use((req, res, next) => {
    console.log("Request received");

    next();
});
```

Think:

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Response
```

---

# 16. What is `next()`?

`next()` tells Express:

> "I have finished my middleware work. Continue to the next middleware/handler."

Example:

```js
app.use((req, res, next) => {
    console.log("Middleware running");

    next();
});

app.get("/", (req, res) => {
    res.send("Home");
});
```

Flow:

```text
Request
   ↓
Middleware
   ↓
next()
   ↓
GET /
   ↓
Response
```

If middleware neither sends a response nor calls `next()` when appropriate, the request can get stuck.

---

# 17. `express.json()`

This is built-in Express middleware.

```js
app.use(express.json());
```

Its main purpose is to parse incoming JSON request bodies.

For example:

```json
{
  "name": "Alex"
}
```

Then you can access:

```js
req.body.name
```

---

# 18. Simple API Example

Here is a small example combining the basic concepts:

```js
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("My API");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "John" },
        { id: 2, name: "Alex" }
    ]);
});

app.get("/users/:id", (req, res) => {
    res.json({
        userId: req.params.id
    });
});

app.post("/users", (req, res) => {
    res.json({
        message: "User created",
        user: req.body
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

### What happens?

```text
GET /
    ↓
"My API"

GET /users
    ↓
Users JSON

GET /users/10
    ↓
userId = 10

POST /users
    ↓
Read data from req.body
    ↓
Return JSON
```

---

# 19. The basic Express flow

This is the most useful thing to understand initially:

```text
             CLIENT
                ↓
           HTTP Request
                ↓
        ┌────────────────┐
        │    Express     │
        └───────┬────────┘
                ↓
           Middleware
                ↓
             Route
                ↓
        Business Logic
                ↓
           Response
                ↓
             CLIENT
```

---

# 20. What should you learn first?

Don't try to learn everything in Express at once.

### Beginner order

```text
1. Node.js basics
       ↓
2. What is Express?
       ↓
3. Create Express server
       ↓
4. Routes
       ↓
5. HTTP methods
       ↓
6. req and res
       ↓
7. req.params
       ↓
8. req.query
       ↓
9. req.body
       ↓
10. Middleware
       ↓
11. express.Router()
       ↓
12. REST API
```

Once these are clear, move to **controllers, databases, authentication, validation, error handling, and project structure**.

### One-line revision

> **Express.js is a Node.js framework that makes it easy to create servers and APIs using routes, requests, responses, and middleware.**
