
# 📘 Topic: Basic Routing using `req.url`

## 🎯 What am I Learning?

Today I am learning **Basic Routing**.

Basic Routing means checking **which URL the user requested** and sending the correct response.

Example:

```text
/          → Home Page
/login     → Login Page
/about     → About Page
```

Without routing, every URL would show the same page.

---

## 🤔 Why Do We Need It?

Imagine you visit Amazon.

```text
amazon.com/

↓

Home Page
```

Now you open

```text
amazon.com/login

↓

Login Page
```

Now you open

```text
amazon.com/cart

↓

Shopping Cart
```

How does Amazon know which page to show?

Because the server checks the **requested URL**.

Today we're learning the same concept.

---

# 💻 Your Code

(Your original code)

---

# 🔍 Understanding the Code

Now explain the code **from top to bottom**.

Only explain previous topics in **one line**.

Explain **new concepts deeply**.

---

## Step 1

```javascript
const http = require("http");
```

📝 **One-line**

Imports the built-in HTTP module.

> ✔ Already learned in the previous topic.

---

## Step 2

```javascript
http.createServer((req, resp) => {
```

📝 **One-line**

Creates a web server.

> ✔ Already learned.

But today we will focus on **`req`** because it contains information about the browser's request.

---

## Step 3 (New Topic Starts)

```javascript
req
```

📝 **What is `req`?**

`req` stands for **Request Object**.

Whenever a browser sends a request, Node.js automatically creates this object.

Think of it as an **information box**.

It stores everything about the request.

```text
Browser

↓

Request Sent

↓

Node.js

↓

Creates req Object

        │

        ├── url

        ├── method

        ├── headers

        ├── body (later)

        └── many more...
```

So whenever we need information about the user's request,

we read it from **`req`**.

---

## Step 4

```javascript
// console.log(req.url);
```

📝 **What is `req.url`?**

`req.url` tells us **which URL the user requested**.

Example

Browser

```text
http://localhost:4500/login
```

Node.js stores

```javascript
req.url="/login";
```

Browser

```text
http://localhost:4500/
```

Node.js stores

```javascript
req.url="/";
```

### Why do we use it?

Because before sending a response,

the server must know

> **"Which page does the user want?"**

Without `req.url`

routing is impossible.

---

## Step 5

```javascript
// console.log(req.method);
```

📝 **What is `req.method`?**

It tells us **what action the browser wants to perform**.

Example

```text
GET
```

means

> I want to read data.

Later we'll also use

```text
POST

PUT

DELETE
```

Every API uses these methods.

---

## Step 6

```javascript
// console.log(req.headers.host);
```

📝 **What is `req.headers.host`?**

It tells us

Which host received the request.

Output

```text
localhost:4500
```

Used while debugging and in real applications.

---

## Step 7

```javascript
if(req.url=="/"){
```

📝 **What is happening here?**

Now Node.js already knows the requested URL.

Suppose the browser opens

```text
http://localhost:4500/
```

Internally

```javascript
req.url="/";
```

Now JavaScript checks

```javascript
if("/"=="/")
```

Result

```text
TRUE
```

Since it is true,

Node.js enters this block.

```javascript
resp.write("<h1>Hello url</h1>");
```

Browser shows

```text
Hello url
```

---

## Step 8

```javascript
else if(req.url=="/login"){
```

Now suppose the browser opens

```text
http://localhost:4500/login
```

Node.js stores

```javascript
req.url="/login";
```

First condition

```javascript
"/login"=="/"
```

False

↓

Move to next condition

```javascript
"/login"=="/login"
```

True

↓

Execute

```javascript
resp.write("<h1>Login Page</h1>");
```

Browser

```text
Login Page
```

---

## Step 9

```javascript
else{
```

If no condition matches,

Node.js executes the `else` block.

Example

```text
/about
```

Output

```text
Other Page
```

---

## Step 10

```javascript
resp.write("<h1>Home page</h1>");
```

📝 **Important**

This line is **outside** the `if...else`.

That means it always executes.

Example

```text
/

↓

Hello url

Home page
```

```text
/login

↓

Login Page

Home page
```

This is why every page also shows **Home page**.

---

## Step 11

```javascript
resp.end();
```

📝 **One-line**

Ends the response and sends it to the browser.

---

# ⚙️ Complete Flow

```text
Browser

↓

Request

↓

Node.js

↓

Creates req Object

↓

Reads req.url

↓

Checks if...else

↓

Prepares Response

↓

resp.end()

↓

Browser Shows Output
```

---

# 🌍 Real Project Usage

This same logic is used in:

* Login Page
* Registration
* Product Page
* Dashboard
* Profile
* Shopping Cart
* Admin Panel

Later, Express.js makes this easier:

```javascript
app.get("/")
app.get("/login")
```

---

# 📝 Summary

✔ Learned what `req` is.

✔ Learned what `req.url` stores.

✔ Learned how routing works.

✔ Learned how the server checks URLs.

✔ Learned how different pages are returned.

---

