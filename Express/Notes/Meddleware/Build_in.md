# Express.js Built-in Middleware — Complete Notes

In your code, there are **two important Express built-in middlewares**:

1. `express.urlencoded()`
2. `express.static()`

The complete code is explained together below so the concept does not feel repeated.

---

## 1. Complete Code

```js
import express from "express";
import path from "path";

const app = express();

// 1. Read HTML form data
app.use(express.urlencoded({ extended: false }));

// 2. Serve static files from public2 folder
app.use(express.static("public2"));

// Home page
app.get("/", (req, resp) => {
    const filePath = path.resolve("view2/Home.html");
    resp.sendFile(filePath);
});

// Login page
app.get("/login", (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
            <input type="text" name="username" placeholder="enter name"/>
            <br/>
            <br/>

            <input type="password" name="password" placeholder="enter password"/>
            <br/>
            <br/>

            <button type="submit">Login</button>
        </form>
    `);
});

// Receive form data
app.post("/submit", (req, resp) => {
    console.log(req.body);
    resp.send("<h1>Submitted</h1>");
});

// Start server
app.listen(3200, () => {
    console.log("Server running on http://localhost:3200");
});
```

---

# 2. Import Express

```js
import express from "express";
```

This imports the **Express.js package**.

We need Express to create the server and routes.

```js
const app = express();
```

This creates the Express application.

Think:

```text
express()
   ↓
Express application
   ↓
app
```

We use `app` to create routes and middleware.

---

# 3. Import `path`

```js
import path from "path";
```

`path` is a **built-in Node.js module**.

It helps us work with file and folder paths.

It is **not middleware**.

You use it here:

```js
const filePath = path.resolve("view2/Home.html");
```

`path.resolve()` creates the **absolute path** of `Home.html`.

Then:

```js
resp.sendFile(filePath);
```

sends that HTML file to the browser.

### Flow

```text
path.resolve()
      ↓
Find absolute path
      ↓
resp.sendFile()
      ↓
Home.html → Browser
```

---

# 4. Built-in Middleware: `express.urlencoded()`

```js
app.use(express.urlencoded({ extended: false }));
```

This is the first important built-in middleware in your code.

### Purpose

It reads data submitted through an **HTML form** and makes that data available in:

```js
req.body
```

For example, your form contains:

```html
<input type="text" name="username">
<input type="password" name="password">
```

Suppose the user enters:

```text
username = Pawan
password = 12345
```

After submitting:

```js
console.log(req.body);
```

will give approximately:

```js
{
    username: "Pawan",
    password: "12345"
}
```

### Why is it needed?

Without the middleware, Express does not automatically parse this URL-encoded HTML form data into `req.body`.

### Simple meaning

```text
express.urlencoded()
        ↓
Reads HTML form data
        ↓
Stores parsed data in req.body
```

### `extended: false`

```js
express.urlencoded({ extended: false })
```

For basic HTML forms containing simple values like:

```text
username
password
email
```

`false` is enough.

---

# 5. Built-in Middleware: `express.static()`

```js
app.use(express.static("public2"));
```

This is the second important built-in middleware.

### Purpose

It serves **static files** from the `public2` folder.

For example:

```text
project
│
├── server.js
│
├── public2
│   ├── style.css
│   ├── script.js
│   └── image.png
│
└── view2
    └── Home.html
```

If `Home.html` contains:

```html
<link rel="stylesheet" href="/style.css">
```

the browser requests:

```text
/style.css
```

Express looks inside:

```text
public2/style.css
```

and sends it to the browser.

### Flow

```text
Browser requests /style.css
          ↓
express.static("public2")
          ↓
public2/style.css
          ↓
Browser
```

It can serve:

* CSS files
* JavaScript files
* Images
* Fonts
* Other static files

### Simple meaning

> `express.static()` = serve files from a folder.

---

# 6. Home Route

```js
app.get("/", (req, resp) => {
    const filePath = path.resolve("view2/Home.html");
    resp.sendFile(filePath);
});
```

When the user opens:

```text
http://localhost:3200/
```

this route runs.

### Step 1

```js
path.resolve("view2/Home.html");
```

Finds the absolute path.

Example:

```text
C:\project\view2\Home.html
```

### Step 2

```js
resp.sendFile(filePath);
```

sends the HTML file to the browser.

So:

```text
GET /
 ↓
Home.html
 ↓
Browser
```

---

# 7. Login Route

```js
app.get("/login", (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
            ...
        </form>
    `);
});
```

When the user opens:

```text
http://localhost:3200/login
```

Express sends an HTML form.

Important part:

```html
<form action="/submit" method="post">
```

This means:

```text
Submit form
     ↓
POST /submit
```

---

# 8. Form Inputs

```html
<input type="text" name="username">
```

The important part is:

```html
name="username"
```

And:

```html
<input type="password" name="password">
```

The important part is:

```html
name="password"
```

These `name` values become the keys inside `req.body`.

For example:

```text
User enters:
username → Pawan
password → 12345
```

Result:

```js
req.body
```

```js
{
    username: "Pawan",
    password: "12345"
}
```

---

# 9. POST `/submit`

```js
app.post("/submit", (req, resp) => {
    console.log(req.body);
    resp.send("<h1>Submitted</h1>");
});
```

This route receives the form data.

### Step-by-step

```text
User fills form
      ↓
Clicks Login
      ↓
POST /submit
      ↓
express.urlencoded()
      ↓
Form data is parsed
      ↓
req.body
      ↓
/submit route
```

Then:

```js
console.log(req.body);
```

prints the submitted data in the terminal.

And:

```js
resp.send("<h1>Submitted</h1>");
```

sends a response back to the browser.

---

# 10. `app.listen()`

```js
app.listen(3200, () => {
    console.log("Server running on http://localhost:3200");
});
```

This starts the Express server on port `3200`.

You can then open:

```text
http://localhost:3200
```

---

# ⭐ Complete Application Flow

Your complete code works like this:

```text
                    Express Server
                         │
                         ↓
              Built-in Middleware
                ┌────────┴────────┐
                ↓                 ↓
       express.urlencoded()   express.static()
                │                 │
                ↓                 ↓
          Form Data           Static Files
                │
                ↓
             Routes
          ┌─────┴──────┐
          ↓            ↓
        GET /       GET /login
          ↓            ↓
     Home.html       Login Form
                       ↓
                  POST /submit
                       ↓
                   req.body
                       ↓
                   Response
```

---

# ⭐ Important Built-in Middleware

| Middleware             | Purpose              | Example         |
| ---------------------- | -------------------- | --------------- |
| `express.urlencoded()` | Reads HTML form data | `req.body`      |
| `express.static()`     | Serves static files  | CSS, JS, images |

### Easy way to remember

> **`urlencoded()` → Form Data → `req.body`**

> **`static()` → Static Files → Browser**

And remember:

> **`path` is a Node.js module, NOT Express middleware.**
