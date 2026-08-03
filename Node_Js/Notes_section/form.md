# 📘 Node.js Notes – Serving an HTML Form using `fs.readFile()`

# 🎯 What am I Learning?

Today, I am learning **how to display an HTML form by reading an external HTML file**.

In previous topics, we wrote HTML directly inside `resp.write()`.

```javascript
resp.write("<h1>Hello</h1>");
```

Now, we will follow a better approach:

* **Node.js** handles the server.
* **HTML** handles the webpage.

This makes the project clean and easier to maintain.

---

# 🤔 Why Do We Need This?

Imagine your webpage has **300 lines of HTML**.

Writing everything inside JavaScript would make the code difficult to read.

❌ Old Way

```javascript
resp.write(`
<h1>Heading</h1>
<input>
<button>
...
`);
```

✅ Better Way

```text
Project

│

├── index.js

└── html
      │
      └── form.html
```

Now,

* `index.js` → Handles the server.
* `form.html` → Handles the webpage.

This is the method used in real projects.

---

# 🌍 Real-Life Example

Think of a waiter in a restaurant.

```text
Customer

↓

Orders Food

↓

Waiter goes to Kitchen

↓

Kitchen prepares food

↓

Waiter serves food
```

Node.js works in the same way.

```text
Browser

↓

Requests Page

↓

Node.js Server

↓

Reads form.html

↓

Sends HTML

↓

Browser Displays Form
```

---

# 📁 Project Structure

```text
Project

│

├── index.js

└── html

      └── form.html
```

---

# 💻 Your Node.js Code

```javascript
const http = require("http");
const fs = require("fs");

http.createServer((req, resp) => {

    fs.readFile("html/form.html", "utf-8", (err, data) => {

        if (err) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("Internal Server Error");
        } else {
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.write(data);
            resp.end();
        }

    });

}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
```

---

# 💻 HTML File

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Page</title>
</head>

<body>

<h1>Web page Heading</h1>

<input type="text" placeholder="Enter the name">

<input type="text" placeholder="Enter the email">

<button>Click me !</button>

</body>
</html>
```

---

# 🔍 Understanding the Code

---

## Step 1️⃣ Import HTTP Module

```javascript
const http = require("http");
```

📝 **One-line**

Imports the HTTP module to create the web server.

> ✔ Already learned.

---

## Step 2️⃣ Import File System Module ⭐

```javascript
const fs = require("fs");
```

### 📝 One-line

Imports the **File System (`fs`) module**, which is used to work with files and folders.

---

### 📖 What is `fs`?

`fs` stands for **File System**.

It is a built-in Node.js module that allows your program to access files stored on your computer.

Think of it as a bridge between your Node.js application and your project files.

```text
Node.js

↓

fs Module

↓

Reads Files

Writes Files

Deletes Files

Renames Files
```

---

### ❓ Why do we use `fs`?

Without the `fs` module, Node.js cannot read your HTML file.

Example:

```text
Project

│

├── index.js

└── html

      └── form.html
```

If the browser requests the page, Node.js must first open `form.html`.

That work is done by the **`fs` module**.

---

### 🌍 Real Project Usage

The `fs` module is commonly used to:

* Read HTML files
* Read JSON data
* Save reports
* Upload files
* Read configuration files
* Create log files

---

## Step 3️⃣ Create Server

```javascript
http.createServer((req, resp) => {
```

📝 **One-line**

Creates the web server and waits for browser requests.

> ✔ Already learned.

Now, instead of writing HTML directly, we will read it from a file.

---

# ⭐ Step 4️⃣ Read the HTML File

```javascript
fs.readFile("html/form.html", "utf-8", (err, data) => {
```

This is the **main concept** of today's topic.

---

## 📖 What is `readFile()`?

`readFile()` is a function provided by the `fs` module.

It reads a file from your computer.

### Syntax

```javascript
fs.readFile(path, encoding, callback);
```

---

## Parameter 1️⃣ File Path

```javascript
"html/form.html"
```

### Purpose

Tells Node.js **which file should be opened**.

Node.js follows this path:

```text
Project

↓

html Folder

↓

form.html
```

Then it starts reading the file.

---

## Parameter 2️⃣ Encoding

```javascript
"utf-8"
```

### Purpose

Tells Node.js to read the file as **normal text**.

Without `"utf-8"`:

```text
<Buffer 3c 68 74 6d ...>
```

With `"utf-8"`:

```html
<h1>Web page Heading</h1>
```

Always use `"utf-8"` when reading HTML or text files.

---

## Parameter 3️⃣ Callback Function

```javascript
(err, data) => {
```

### Purpose

This function runs **after Node.js finishes reading the file**.

Node.js automatically provides two values.

```text
err

↓

Stores Error

data

↓

Stores File Content
```

---

### Situation 1️⃣ File Found

```text
form.html

↓

Read Successfully

↓

err = null

↓

data = HTML Content
```

---

### Situation 2️⃣ File Missing

```text
form.html

↓

Cannot Read

↓

err = Error Object

↓

data = undefined
```

---

## Step 5️⃣ Error Handling

```javascript
if(err){
```

### 📝 One-line

Checks whether reading the file failed.

If the file is missing,

Node.js enters this block.

---

```javascript
resp.writeHead(500,{
    "Content-Type":"text/plain"
});
```

### Purpose

Sends

```text
500

↓

Internal Server Error
```

Meaning:

> The server could not complete the request because something went wrong.

---

```javascript
resp.end("Internal Server Error");
```

Browser Output

```text
Internal Server Error
```

This informs the user that the server failed to load the page.

---

# ⭐ Step 6️⃣ File Read Successfully

If there is **no error**,

Node.js enters the `else` block.

```javascript
resp.writeHead(200,{
    "Content-Type":"text/html"
});
```

### Why?

Status Code

```text
200

↓

OK
```

means everything worked successfully.

`Content-Type: text/html`

tells the browser:

> "The response contains HTML. Render it as a webpage."

---

## Step 7️⃣ Send HTML

```javascript
resp.write(data);
```

### 📝 One-line

Sends the HTML file to the browser.

### Where does `data` come from?

```text
form.html

↓

fs.readFile()

↓

Reads File

↓

Stores HTML inside data

↓

resp.write(data)

↓

Browser
```

The `data` variable contains the complete HTML code from `form.html`.

---

## Step 8️⃣ End Response

```javascript
resp.end();
```

📝 Ends the response.

> ✔ Already learned.

---

## Step 9️⃣ Start Server

```javascript
.listen(3000,()=>{
```

📝 Starts the server on Port **3000**.

When the server starts successfully,

this callback executes.

```javascript
console.log("Server running on http://localhost:3000");
```

Output

```text
Server running on http://localhost:3000
```

---

# 📄 Understanding the HTML File

The HTML file is the page that the browser displays.

Node.js only **reads and sends it**.

---

## Heading

```html
<h1>Web page Heading</h1>
```

Displays the main heading of the webpage.

Output

```text
Web page Heading
```

---

## Input Field

```html
<input type="text">
```

### What is it?

Creates a text box where the user can type.

Example

```text
Name

[____________]
```

Used for:

* Name
* City
* College
* Company

---

## Placeholder

```html
placeholder="Enter the name"
```

### Purpose

Displays a helper message inside the input box.

Before typing

```text
Enter the name
```

After typing

```text
Pawan
```

The placeholder disappears automatically.

---

## Second Input

```html
<input
type="text"
placeholder="Enter the email">
```

Creates another text field.

Example

```text
Email

[____________]
```

---

## Button

```html
<button>Click me !</button>
```

Creates a clickable button.

Real examples:

```text
Login

Register

Submit

Buy Now

Pay
```

Buttons are used to perform actions.

---

# ⚙️ Complete Working Flow

```text
Browser

↓

User Opens

http://localhost:3000

↓

Request Sent

↓

Node.js Server

↓

fs.readFile()

↓

Reads form.html

↓

Stores HTML in data

↓

resp.write(data)

↓

Browser Receives HTML

↓

Browser Displays Form
```

---

# 🌐 Real Project Usage

This same concept is used in:

* Login Page
* Registration Page
* Contact Form
* Portfolio Website
* Admin Dashboard
* Landing Page

Every backend server reads files before sending them to users.

---

# ⭐ Important Terms

| Term                          | Purpose                                            |
| ----------------------------- | -------------------------------------------------- |
| **fs**                        | File System module used to work with files.        |
| **readFile()**                | Reads a file asynchronously.                       |
| **utf-8**                     | Reads the file as readable text.                   |
| **err**                       | Stores the error if file reading fails.            |
| **data**                      | Stores the file content after reading.             |
| **200 OK**                    | Request completed successfully.                    |
| **500 Internal Server Error** | Something went wrong while processing the request. |
| **text/html**                 | Browser renders the response as HTML.              |
| **text/plain**                | Browser displays plain text instead of HTML.       |

---

# 📝 What Did I Learn Today?

✅ Why HTML should be stored in a separate file.

✅ What the `fs` module is.

✅ How `fs.readFile()` works.

✅ Why `"utf-8"` is used.

✅ What `err` and `data` are.

✅ How Node.js handles file reading errors.

✅ How HTML is sent to the browser.

✅ How `<input>`, `placeholder`, and `<button>` work.

---

# 🗺️ Node.js Roadmap

```text
Node.js Basics
      │
      ▼
HTTP Module
      │
      ▼
Creating Server
      │
      ▼
Sending HTML Response
      │
      ▼
Basic Routing
      │
      ▼
⭐ Serving HTML File using fs.readFile() (Current Topic)
      │
      ▼
Handling Form Submission (GET & POST)
      │
      ▼
Express.js
```

## 🎯 Final Understanding

In this topic, you separated the **server logic** from the **webpage**.

```text
Browser
      │
      ▼
Requests Page
      │
      ▼
Node.js Server
      │
      ▼
Uses fs.readFile()
      │
      ▼
Reads form.html
      │
      ▼
Stores HTML in data
      │
      ▼
Sends HTML to Browser
      │
      ▼
Browser Renders the Web Page
```