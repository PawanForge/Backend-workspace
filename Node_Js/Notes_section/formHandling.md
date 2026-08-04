## 1. Import HTTP Module

```javascript
const http = require("http");
```

### What does it do?

Loads Node.js's built-in **HTTP module**.

### Why do we use it?

It lets us create a web server that can receive requests from browsers and send responses.

### Without it

You cannot create a server.

---

## 2. Import File System Module

```javascript
const fs = require("fs");
```

### What does it do?

Loads the **File System (fs)** module.

### Why do we use it?

To read files such as `form.html`.

### Without it

You cannot read or serve HTML files.

---

## 3. Import Query String Module

```javascript
const querystring = require("querystring");
```

### What does it do?

Converts URL-encoded form data into a JavaScript object.

Example:

Before:

```text
name=Rahul&age=22
```

After:

```javascript
{
  name: "Rahul",
  age: "22"
}
```

### Why do we use it?

Objects are much easier to work with than raw strings.

---

# Create Server

```javascript
http.createServer((req, resp) => {
```

### What does it do?

Creates a web server.

### Why do we use it?

Every time a browser sends a request, this function runs.

Example:

```
Browser
   │
   ▼
http://localhost:3200
   │
   ▼
createServer() callback runs
```

---

# req

```javascript
req
```

### What does it contain?

Everything sent by the browser.

Examples:

```javascript
req.url
req.method
req.headers
req.body
```

If the browser requests:

```
http://localhost:3200/
```

then

```javascript
req.url
```

is

```text
/
```

---

# resp

```javascript
resp
```

### What does it do?

Sends data back to the browser.

Example:

```javascript
resp.end("Hello");
```

Browser displays

```
Hello
```

---

# Check URL

```javascript
if (req.url === "/" && req.method === "GET")
```

### What does it do?

Checks two things:

* URL is `/`
* Method is `GET`

### Why?

When someone opens:

```
http://localhost:3200
```

the browser sends

```
GET /
```

So this block runs.

---

# Read HTML File

```javascript
fs.readFile("./html/form.html", "utf-8", (err, data) => {
```

### What does it do?

Reads the file `form.html`.

### Parameters

```javascript
"./html/form.html"
```

File path.

```javascript
"utf-8"
```

Read as text instead of binary.

```javascript
(err, data)
```

* `err` → error if something went wrong.
* `data` → file contents.

---

# Error Check

```javascript
if (err)
```

### What does it do?

Checks if reading the file failed.

Possible reasons:

* File missing
* Wrong path
* Permission denied

---

```javascript
resp.writeHead(500,{
    "Content-Type":"text/plain"
});
```

### What does it do?

Sends HTTP status **500**.

500 means

```
Internal Server Error
```

---

```javascript
return resp.end("Internal Server Error");
```

### Why `return`?

Stops the function immediately.

Without `return`, Node would continue executing the remaining code.

---

# Success Response

```javascript
resp.writeHead(200,{
    "Content-Type":"text/html"
});
```

### Status Code

```
200
```

means

```
Everything is OK
```

### Content-Type

```
text/html
```

tells the browser:

> "I'm sending HTML."

The browser renders it as a webpage.

---

# Send HTML

```javascript
resp.end(data);
```

### What does it do?

Sends the HTML file to the browser and ends the response.

---

# POST Request

```javascript
else if(req.url=="/submit" && req.method=="POST")
```

### What does it do?

Runs only when the form is submitted.

Browser sends

```
POST /submit
```

---

# Store Request Body

```javascript
let body="";
```

### Why?

Form data doesn't arrive all at once.

It arrives in **chunks**.

We store all chunks in `body`.

---

# Receive Chunks

```javascript
req.on("data",(chunk)=>{
```

### What is `on()`?

Registers an event listener.

### What is `"data"`?

An event that fires whenever part of the request body arrives.

---

Example

Chunk 1

```
name=Ra
```

Chunk 2

```
hul&age=
```

Chunk 3

```
22
```

---

```javascript
body += chunk;
```

### What does it do?

Appends each chunk.

After all chunks:

```
name=Rahul&age=22
```

---

# End Event

```javascript
req.on("end",()=>{
```

### What does it do?

Runs after the **last chunk** is received.

Now the request body is complete.

---

# Parse Data

```javascript
const formData=querystring.parse(body);
```

### Before

```
name=Rahul&age=22
```

### After

```javascript
{
    name:"Rahul",
    age:"22"
}
```

Now you can write:

```javascript
formData.name
```

instead of manually splitting the string.

---

# Print Data

```javascript
console.log(formData);
```

Output

```javascript
{
  name: 'Rahul',
  age: '22'
}
```

---

# Send Success Response

```javascript
resp.end("<h1>Form Submitted Successfully</h1>");
```

### What does it do?

Sends an HTML response to the browser.

Browser displays:

```
Form Submitted Successfully
```

---

# 404 Block

```javascript
else
```

Runs when the URL doesn't match any route.

Example:

```
localhost:3200/abc
```

---

```javascript
resp.writeHead(404,{
    "Content-Type":"text/plain"
});
```

404 means

```
Page Not Found
```

---

```javascript
resp.end("Page Not Found");
```

Shows the message in the browser.

---

# Start Server

```javascript
.listen(3200,()=>{
```

### What does it do?

Starts the server on **port 3200**.

---

```javascript
console.log("Server Running");
```

Prints a message in the terminal so you know the server started successfully.

---

# Complete Flow

```text
Start Server
      │
      ▼
Browser opens localhost:3200
      │
      ▼
GET /
      │
      ▼
Read form.html
      │
      ▼
Send HTML to Browser
      │
      ▼
User fills Form
      │
      ▼
Click Submit
      │
      ▼
POST /submit
      │
      ▼
Receive data in chunks
      │
      ▼
req.on("data")
      │
      ▼
Store in body
      │
      ▼
req.on("end")
      │
      ▼
Parse body
      │
      ▼
Create JavaScript object
      │
      ▼
Send Success Response