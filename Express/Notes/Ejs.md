# EJS (Embedded JavaScript) 
## 1. What is EJS?

**EJS stands for Embedded JavaScript.**

EJS is a **template engine** used with **Node.js and Express.js** to create **dynamic web pages**.

It allows us to put server data inside an HTML page.

### Simple Example

The server has:

```text
name = Pawan
```

EJS puts that data into HTML:

```ejs
<h1>Hello <%= name %></h1>
```

The browser finally receives:

```html
<h1>Hello Pawan</h1>
```

### Basic Flow

```text
Server Data
     ↓
   EJS
     ↓
 HTML Page
     ↓
  Browser
```

---

# 2. Why Do We Use EJS?

Normal HTML is **static**.

For example:

```html
<h1>Hello Pawan</h1>
```

The name is fixed.

With EJS, the name can come from the server:

```ejs
<h1>Hello <%= name %></h1>
```

Today the server can send:

```text
name = Pawan
```

Tomorrow it can send:

```text
name = Rahul
```

The same HTML template can be used for both.

So EJS helps us create **dynamic HTML pages**.

---

# 3. Installing EJS

First install Express and EJS:

```bash
npm install express ejs
```

---

# 4. Basic Project Structure

```text
project/
│
├── server.js
│
├── package.json
│
└── views/
    └── home.ejs
```

### Important

By default, Express looks for EJS files inside the:

```text
views
```

folder.

---

# 5. Basic Express + EJS Code

### `server.js`

```js
import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, resp) => {

    resp.render("home", {
        name: "Pawan",
        Thoughts: "Consistency Beats"
    });

});

app.listen(3200);
```

---

# 6. Explanation of the Server Code

## `import express`

```js
import express from "express";
```

Imports the **Express.js** package.

Express helps us create the server.

---

## Create the App

```js
const app = express();
```

Creates an Express application.

We use `app` to create routes and configure our server.

---

## Set EJS as View Engine

```js
app.set("view engine", "ejs");
```

This tells Express:

> **Use EJS to create/render our web pages.**

Here:

```text
view engine → EJS
```

---

## Create a Route

```js
app.get("/", (req, resp) => {
```

This means:

> When the user visits `/`, run this code.

For example:

```text
http://localhost:3200/
```

---

## Render the EJS Page

```js
resp.render("home", {
    name: "Pawan",
    Thoughts: "Consistency Beats"
});
```

`render()` means:

> Open the `home.ejs` template and give it this data.

Express looks for:

```text
views/home.ejs
```

The data being sent is:

```text
name     → Pawan
Thoughts → Consistency Beats
```

---

# 7. EJS File

### `views/home.ejs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>

<body>

    <h1>Name: <%= name %></h1>

    <h2>Thoughts: <%= Thoughts %></h2>

</body>
</html>
```

---

# 8. EJS Tags

EJS provides special tags that allow us to use JavaScript inside HTML.

The most important ones are:

```text
<%= %>
<% %>
<%- %>
```

---

## 8.1 `<%= %>` – Display Data

This is the most commonly used EJS tag.

```ejs
<h1><%= name %></h1>
```

It means:

> **Take the value of `name` and display it here.**

If the server sends:

```js
name: "Pawan"
```

then:

```ejs
<h1><%= name %></h1>
```

becomes:

```html
<h1>Pawan</h1>
```

### Remember

```text
<%= %> → SHOW / PRINT
```

---

# 9. `<% %>` – Execute JavaScript

This tag is used to **run JavaScript code**.

The JavaScript code itself is not displayed on the webpage.

Example:

```ejs
<% if (age >= 18) { %>

    <h1>You are an adult</h1>

<% } %>
```

Here:

```ejs
<% if (age >= 18) { %>
```

checks the condition.

And:

```ejs
<% } %>
```

closes the condition.

### Remember

```text
<% %> → DO / EXECUTE
```

---

# 10. `<%- %>` – Render HTML

This tag is used when the value contains HTML and we want that HTML to be rendered.

Example:

```ejs
<%- content %>
```

If the server sends:

```js
content: "<h1>Hello</h1>"
```

EJS renders it as an HTML heading.

### Remember

```text
<%- %> → RENDER HTML
```

**Note:** Be careful with `<%- %>` when the HTML comes from users, because untrusted HTML can create security problems.

---

# 11. EJS Tags – Easy Table

| EJS Tag  | Meaning | Purpose            |
| -------- | ------- | ------------------ |
| `<%= %>` | Show    | Display a value    |
| `<% %>`  | Do      | Execute JavaScript |
| `<%- %>` | HTML    | Render HTML        |

### Easy Trick

```text
<%=   → SHOW
<%    → DO
<%-   → HTML
```

---

# 12. How Server Data Reaches EJS

In the server:

```js
resp.render("home", {
    name: "Pawan"
});
```

Here we send:

```text
name → Pawan
```

In EJS:

```ejs
<h1><%= name %></h1>
```

EJS takes the value and displays it.

### Flow

```text
server.js
   │
   │ name = "Pawan"
   ↓
render("home", { name })
   │
   ↓
home.ejs
   │
   │ <%= name %>
   ↓
<h1>Pawan</h1>
   │
   ↓
Browser
```

---

# 13. Dynamic Data Example

### Server

```js
app.get("/", (req, resp) => {

    const name = "Pawan";
    const age = 22;

    resp.render("home", {
        name,
        age
    });

});
```

### EJS

```ejs
<h1>Name: <%= name %></h1>

<h2>Age: <%= age %></h2>
```

### Output

```text
Name: Pawan
Age: 22
```

---

# 14. Using `if` Condition

EJS can also use JavaScript conditions.

### Server

```js
app.get("/", (req, resp) => {

    const age = 22;

    resp.render("home", { age });

});
```

### EJS

```ejs
<% if (age >= 18) { %>

    <h1>You are an adult.</h1>

<% } else { %>

    <h1>You are a minor.</h1>

<% } %>
```

The JavaScript runs on the server while EJS generates the HTML.

---

# 15. Using a Loop

We can use loops to display multiple items.

### Server

```js
app.get("/", (req, resp) => {

    const students = ["Pawan", "Rahul", "Aman"];

    resp.render("home", { students });

});
```

### EJS

```ejs
<h1>Students</h1>

<ul>

    <% students.forEach(student => { %>

        <li><%= student %></li>

    <% }); %>

</ul>
```

### Output

```text
Students

Pawan
Rahul
Aman
```

---

# 16. Complete Example

### `server.js`

```js
import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, resp) => {

    resp.render("home", {
        name: "Pawan",
        Thoughts: "Consistency Beats"
    });

});

app.listen(3200);
```

### `views/home.ejs`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>

<body>

    <h1>Name: <%= name %></h1>

    <h2>Thoughts: <%= Thoughts %></h2>

</body>

</html>
```

---

# 17. What Happens When We Open the Website?

We open:

```text
http://localhost:3200/
```

### Step 1

Browser sends:

```text
GET /
```

### Step 2

Express receives the request.

### Step 3

This route runs:

```js
app.get("/", ...)
```

### Step 4

Express executes:

```js
resp.render("home", {
    name: "Pawan",
    Thoughts: "Consistency Beats"
});
```

### Step 5

Express finds:

```text
views/home.ejs
```

### Step 6

EJS replaces:

```ejs
<%= name %>
```

with:

```text
Pawan
```

And:

```ejs
<%= Thoughts %>
```

with:

```text
Consistency Beats
```

### Step 7

The final HTML is sent to the browser.

---

# 18. Complete Flow to Remember

```text
              Browser
                 │
                 │ GET /
                 ↓
          Express Server
                 │
                 ↓
          app.get("/", ...)
                 │
                 ↓
        resp.render("home", data)
                 │
                 ↓
           home.ejs
                 │
                 ↓
          EJS processes data
                 │
                 ↓
            Final HTML
                 │
                 ↓
              Browser
```

---

# 19. Important Terms

| Term               | Simple Meaning                      |
| ------------------ | ----------------------------------- |
| **Express**        | Framework used to create the server |
| **EJS**            | Template engine                     |
| **Template**       | HTML page containing EJS code       |
| **View**           | The page that is rendered           |
| **`render()`**     | Loads and generates the EJS page    |
| **`req`**          | Request from the browser            |
| **`resp`**         | Response sent to the browser        |
| **`<%= %>`**       | Displays data                       |
| **`<% %>`**        | Executes JavaScript                 |
| **`<%- %>`**       | Renders HTML                        |
| **`views` folder** | Default folder for templates        |

---

# 20. Short Exam Definition

**EJS is a template engine used with Express.js to create dynamic web pages. It allows server-side data to be inserted into HTML templates. The `render()` method sends data to an EJS template, and EJS converts the template into HTML that is sent to the browser.**

### Most Important Code

```js
app.set("view engine", "ejs");

app.get("/", (req, resp) => {
    resp.render("home", {
        name: "Pawan"
    });
});
```

```ejs
<h1>Hello <%= name %></h1>
```

**Remember:**

```text
Express → Server
EJS → Dynamic HTML
render() → Send data to template
<%= %> → Display data
<% %> → Execute JavaScript
```
