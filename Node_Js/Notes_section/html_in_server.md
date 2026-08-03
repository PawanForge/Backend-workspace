
# 📘 Node.js Notes – Serving an HTML File using `fs.readFile()`

---

# 🎯 What am I Learning?

Today, I am learning **how to display an HTML file in the browser using Node.js**.

Previously, we wrote HTML directly inside JavaScript.

```javascript
resp.write("<h1>Hello</h1>");
```

This works, but it becomes difficult when the HTML page is large.

Today, we'll keep the HTML in a separate file and let Node.js read that file and send it to the browser.

---

# 🤔 Why Do We Need This?

Imagine creating a webpage with 300 lines of HTML.

Writing all of that inside JavaScript would look like this.

```javascript
resp.write(`
<html>
...
300 lines...
</html>
`);
```

❌ Difficult to read

❌ Difficult to update

❌ Not a good practice

Instead, we separate our files.

```text
Project Folder

│

├── index.js

└── html
      │
      └── web.html
```

Now,

* **JavaScript** handles the server.
* **HTML** handles the webpage.

This makes the project clean and easy to manage.

---

# 🌍 Real-Life Example

Think about a waiter in a restaurant.

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

Requests Web Page

↓

Node.js Server

↓

Reads HTML File

↓

Sends HTML

↓

Browser Displays Page
```

The server doesn't create the page every time.

It simply reads the HTML file and sends it.

---

# 💻 Project Structure

```text
Project

│

├── index.js

└── html

      └── web.html
```

---

# 💻 Your Code

```javascript
const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    fs.readFile('html/web.html', 'utf-8', (err, data) => {

        if (err) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.write("Internal Server Error");
            resp.end();
            return;
        }

        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(data);
        resp.end();
    });
}).listen(3200, () => {
    console.log("Server running on http://localhost:3200");
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

<input
type="text"
placeholder="Enter the name">

<button>Click me !</button>

</body>
</html>
```

---

# 🔍 Understanding the Code

---

# Step 1️⃣ Import HTTP Module

```javascript
const http = require('http');
```

📝 **One-line**

Imports the HTTP module to create the web server.

> ✔ Already learned.

---

# Step 2️⃣ Import File System Module

```javascript
const fs = require('fs');
```

📝 **One-line**

Imports the **File System (fs)** module.

## What is `fs`?

`fs` stands for

> **File System**

It is a built-in Node.js module used to work with files and folders.

Using `fs`, we can

* Read files
* Create files
* Update files
* Delete files
* Rename files

Today we are using it to **read an HTML file**.

Think of it like this.

```text
Node.js

↓

fs Module

↓

Access Files

↓

Read

Write

Delete

Rename
```

---

# Step 3️⃣ Create Server

```javascript
http.createServer((req, resp) => {
```

📝 **One-line**

Creates the web server.

> ✔ Already learned.

Now, instead of writing HTML directly,

we'll first read an HTML file.

---

# Step 4️⃣ Read HTML File

```javascript
fs.readFile('html/web.html','utf-8',(err,data)=>{
```

📝 **One-line**

Reads the `web.html` file.

This is the **main concept of today's topic**.

Let's understand each part.

---

## `fs.readFile()`

This function reads a file from your computer.

Syntax

```javascript
fs.readFile(path, encoding, callback)
```

### Parameter 1

```javascript
'html/web.html'
```

📝 **Purpose**

Tells Node.js **which file to read**.

Project

```text
Project

│

├── index.js

└── html

      └── web.html
```

Node.js goes inside

```text
html

↓

web.html
```

and reads its content.

---

### Parameter 2

```javascript
'utf-8'
```

📝 **Purpose**

Tells Node.js how to read the file.

`utf-8` means

> Read the file as normal text.

Without it,

Node.js returns a **Buffer** instead of readable text.

Example

Without UTF-8

```text
<Buffer 3c 68 74 6d ...>
```

With UTF-8

```html
<h1>Web page Heading</h1>
```

Much easier to understand.

---

### Parameter 3

```javascript
(err,data)=>{
```

📝 **Purpose**

This callback runs after Node.js finishes reading the file.

Node.js automatically provides two values.

```text
err

↓

Stores error (if any)

data

↓

Stores file content
```

---

## Two Possible Situations

### Situation 1

File Found

```text
web.html

↓

Read Successfully

↓

err = null

↓

data = HTML Content
```

---

### Situation 2

File Missing

```text
web.html

↓

Not Found

↓

err = Error Object

↓

data = undefined
```

---

# Step 5️⃣ Handle Errors

```javascript
if(err){
```

📝 **One-line**

Checks whether an error occurred while reading the file.

Suppose

```text
web.html
```

doesn't exist.

Then

```javascript
err
```

contains an error.

Condition

```javascript
if(err)
```

becomes

```javascript
if(true)
```

Node.js enters the block.

---

## `resp.writeHead(500...)`

```javascript
resp.writeHead(500,{
"Content-Type":"text/plain"
});
```

📝 **One-line**

Sends **HTTP Status Code 500**.

### What is 500?

```text
500

↓

Internal Server Error
```

Meaning

> The server has a problem while processing the request.

---

## `"Content-Type":"text/plain"`

Tells the browser

> The response is plain text.

---

## Send Error Message

```javascript
resp.write("Internal Server Error");
```

Browser shows

```text
Internal Server Error
```

---

## `return`

```javascript
return;
```

📝 **One-line**

Stops the function immediately.

Why?

Because if we don't stop,

Node.js will continue and try to send the HTML response too.

One request should have only **one response**.

---

# Step 6️⃣ File Read Successfully

If there is no error,

Node.js skips the `if` block.

Then it executes

```javascript
resp.writeHead(200,{
"Content-Type":"text/html"
});
```

## What is 200?

```text
200

↓

OK

↓

Everything Worked Successfully
```

---

## Content-Type

```text
text/html
```

tells the browser

> This response contains HTML.

Now the browser renders the HTML page instead of showing raw text.

---

# Step 7️⃣ Send HTML

```javascript
resp.write(data);
```

📝 **One-line**

Sends the HTML file content to the browser.

Remember,

```javascript
data
```

contains

```html
<!DOCTYPE html>
<html>
...
</html>
```

So,

```javascript
resp.write(data);
```

means

> Send the entire HTML page.

---

# Step 8️⃣ Finish Response

```javascript
resp.end();
```

📝 **One-line**

Ends the response and sends everything to the browser.

---

# Step 9️⃣ Start Server

```javascript
.listen(3200,()=>{
```

📝 **One-line**

Starts the server on port **3200**.

---

## Callback Function

```javascript
()=>{
console.log(...)
}
```

Runs only after the server starts successfully.

Output

```text
Server running on http://localhost:3200
```

This confirms that the server is ready to accept requests.

---

# ⚙️ Complete Working Flow

```text
Browser

↓

Request

↓

Node.js Server

↓

fs.readFile()

↓

Is File Available?

      │

 ┌────┴─────┐

 │          │

Yes        No

 │          │

 ▼          ▼

Read HTML   Error

 │          │

 ▼          ▼

Status 200  Status 500

 │          │

 ▼          ▼

Send HTML   Send Error

 │

 ▼

Browser Displays Web Page
```

---

# 🌐 Real Project Usage

This concept is used in:

* Landing Pages
* Login Pages
* Registration Pages
* Portfolio Websites
* Admin Dashboards
* Static Website Hosting

Almost every web server reads files before sending them to the browser.

---

# ⭐ Main Terms to Remember

| Term               | Meaning                                                 |
| ------------------ | ------------------------------------------------------- |
| **`fs`**           | File System module used to work with files and folders. |
| **`readFile()`**   | Reads a file asynchronously.                            |
| **`utf-8`**        | Reads the file as readable text.                        |
| **`err`**          | Stores the error if reading fails.                      |
| **`data`**         | Stores the file content.                                |
| **`500`**          | Internal Server Error.                                  |
| **`200`**          | Success (OK).                                           |
| **`Content-Type`** | Tells the browser what type of data is being sent.      |
| **`text/html`**    | Browser should render the response as HTML.             |
| **`text/plain`**   | Browser should display plain text.                      |
| **`return`**       | Stops the function after sending the error response.    |

---

# 📝 What Did I Learn Today?

✅ Why HTML should be stored in a separate file.

✅ What the `fs` module is.

✅ How `fs.readFile()` works.

✅ Why `utf-8` is used.

✅ What `err` and `data` are.

✅ How to handle file reading errors.

✅ Difference between **200 OK** and **500 Internal Server Error**.

✅ How Node.js reads an HTML file and sends it to the browser.

---

## 🎯 Final Understanding

Earlier, you manually wrote HTML inside JavaScript:

```javascript
resp.write("<h1>Hello</h1>");
```

Now you've learned the professional approach:

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
Reads HTML File using fs.readFile()
      │
      ▼
If successful → Send HTML (200 OK)
If failed → Send Error (500)
      │
      ▼
Browser Displays the Result
```
