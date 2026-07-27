# 🟢 TOPIC 2 — WHAT IS THE WEB (WORLD WIDE WEB)?

## 🎯 Goal of this topic

After completing this topic, you should understand:

* What is the Web?
* What is a website?
* What is a web application?
* How the Web is related to the Internet
* What a browser does
* What a web server does
* Difference between a website and a web application

---

# 1️⃣ What is the Web?

The **Web**, also called the **World Wide Web (WWW)**, is a system that allows users to access and interact with websites and web applications through the Internet.

In simple words:

> The Web is a collection of interconnected websites and web pages that we access using a web browser over the Internet.

For example:

```text
Google
YouTube
GitHub
Facebook
Amazon
Netflix
```

All of these are available through the Web.

---

# 2️⃣ Internet vs Web

This is very important.

### Internet

The Internet is the **global network infrastructure** that connects computers and devices.

### Web

The Web is a **service that uses the Internet** to provide access to websites and web applications.

Think of it like this:

```text
INTERNET
│
├── World Wide Web
│      ├── Google
│      ├── YouTube
│      └── GitHub
│
├── Email
│
├── Online Gaming
│
├── Video Calls
│
└── File Transfer
```

So:

> **Internet = Network**

> **Web = Service running on that network**

### Simple Example

When you use:

```text
https://github.com
```

You are using the **Web**.

When your computer communicates with GitHub's server through the network, it is using the **Internet**.

---

# 3️⃣ What is a Website?

A **website** is a collection of related web pages available under a domain name.

For example:

```text
github.com
```

GitHub has many pages:

```text
github.com
github.com/login
github.com/explore
github.com/settings
```

These pages together form part of the GitHub website.

A simple website might contain:

```text
Home
About
Services
Contact
```

For example:

```text
mywebsite.com
│
├── Home
├── About
├── Services
└── Contact
```

---

# 4️⃣ What is a Web Page?

A **web page** is a single document that you view in a browser.

For example:

```text
https://example.com/about
```

This could represent one page of a website.

A website can contain multiple web pages.

```text
Website
│
├── Home Page
├── About Page
├── Contact Page
└── Services Page
```

---

# 5️⃣ What is a Web Application?

A **web application** is an interactive application that runs through a web browser.

Unlike a simple static website, a web application usually allows users to **perform actions and interact with data**.

Examples:

* Gmail
* Google Docs
* Netflix
* Amazon
* Facebook
* Online banking
* GitHub

For example, in an online shopping application, you can:

```text
Login
   ↓
Search Products
   ↓
Add to Cart
   ↓
Place Order
   ↓
Make Payment
```

This requires frontend, backend, and usually a database.

---

# 6️⃣ Website vs Web Application

This distinction is useful for understanding your future career as a full-stack developer.

### Website

Mainly provides information.

Example:

```text
Portfolio Website
Company Website
Blog
Documentation
```

The user mostly reads or views content.

### Web Application

Allows users to perform operations and interact with data.

Example:

```text
E-commerce
Banking Application
Social Media
Employee Management System
```

The user can:

```text
Create
Read
Update
Delete
```

data.

### Simple Comparison

| Website                 | Web Application       |
| ----------------------- | --------------------- |
| Mostly informational    | Highly interactive    |
| Mainly displays content | Performs operations   |
| Example: Portfolio      | Example: E-commerce   |
| Less user interaction   | More user interaction |
| May be static           | Usually dynamic       |

The boundary isn't always strict—modern websites can have highly interactive features—but this distinction is useful for learning.

---

# 7️⃣ How Does the Web Work?

Let's understand the basic flow.

Suppose you open:

```text
https://example.com
```

The basic flow is:

```text
You
 │
 ▼
Web Browser
 │
 │ Request
 ▼
Internet
 │
 ▼
Web Server
 │
 │ Response
 ▼
Internet
 │
 ▼
Web Browser
 │
 ▼
Web Page Displayed
```

Let's understand each part.

### Step 1 — You enter a URL

You type:

```text
https://example.com
```

into the browser.

### Step 2 — Browser sends a request

The browser asks the server:

> "Please give me this web page."

### Step 3 — Server processes the request

The server receives the request.

### Step 4 — Server sends a response

The server sends the required data back.

### Step 5 — Browser displays the result

The browser receives the response and displays the webpage.

This is the basic foundation of how the Web works.

We will later learn the details of:

```text
DNS
↓
IP Address
↓
HTTP
↓
HTTPS
↓
Request
↓
Response
```

Don't worry about these yet.

---

# 8️⃣ What is a Web Browser?

A **web browser** is software that allows you to access and interact with websites and web applications.

Examples:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

The browser does several important things.

For example, it:

```text
Sends HTTP Requests
        ↓
Receives Responses
        ↓
Downloads HTML
        ↓
Downloads CSS
        ↓
Downloads JavaScript
        ↓
Renders the Web Page
```

You have already worked with HTML, CSS, and JavaScript.

Now you can connect that knowledge to the Web.

For example:

```text
HTML
 ↓
Structure

CSS
 ↓
Design

JavaScript
 ↓
Behavior
```

The browser processes these technologies and creates the interface you see.

---

# 9️⃣ What is a Web Server?

A **web server** is a system that receives requests from clients and sends responses.

For example:

```text
Browser
   │
   │ Request
   ▼
Web Server
   │
   │ Response
   ▼
Browser
```

The server may return:

```text
HTML
CSS
JavaScript
Images
JSON
```

In modern web applications, the server may also communicate with a backend and database.

For example:

```text
Browser
   │
   ▼
Backend Server
   │
   ▼
Database
```

We will learn this in detail when we reach backend development.

---

# 🧠 Important Concept

You should understand this basic architecture:

```text
             WEB
              │
      ┌───────┴───────┐
      │               │
   CLIENT           SERVER
      │               │
   Browser          Backend
      │               │
      │               ▼
      │            Database
      │
      └──── Internet ────┘
```

This is the foundation of full-stack development.

As a full-stack developer, you will work with:

```text
Frontend
   ↓
React

Backend
   ↓
Node.js + Express

Database
   ↓
PostgreSQL
```

---

# 🛠️ PRACTICAL — STEP 1

Open Chrome.

Visit:

```text
https://example.com
```

Press:

```text
F12
```

Go to:

```text
Elements
```

You will see HTML.

For example, you may see elements like:

```html
<h1>Example Domain</h1>
<p>This domain is for use in illustrative examples...</p>
```

This is the HTML that the browser is rendering.

---

# 🛠️ PRACTICAL — STEP 2

Now go to:

```text
Network
```

Refresh the page:

```text
Ctrl + R
```

You will see requests.

Click the main request.

Look for:

```text
Request URL
Request Method
Status Code
Response Headers
Response
```

You don't need to understand everything yet.

For now, just observe:

```text
Browser
   ↓
Request
   ↓
Server
   ↓
Response
   ↓
Browser
```

This is exactly the concept we are learning.

---

# 🛠️ PRACTICAL — STEP 3

Create a simple HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>

    <h1>Hello World</h1>
    <p>This is my first web page.</p>

</body>
</html>
```

Save it as:

```text
index.html
```

Open it in your browser.

You have now created a basic **web page**.

However, this is currently running locally on your computer.

Later, when you deploy it to a server, other people can access it through the Web.

---

# 🧪 PRACTICAL TASK

Do this yourself:

### Task 1

Create:

```text
web-fundamentals
│
└── index.html
```

Add:

```html
<h1>My Web Fundamentals Practice</h1>
<p>I am learning how the Web works.</p>
```

Open it in your browser.

### Task 2

Open DevTools:

```text
F12
```

Check:

```text
Elements
Network
```

### Task 3

Answer these questions in your notes:

1. What is the Internet?
2. What is the Web?
3. What is a website?
4. What is a web page?
5. What is a web application?
6. What is a browser?
7. What is a web server?
8. What is the difference between Internet and Web?

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is the World Wide Web?

**Answer:**

> The World Wide Web is a system of interconnected web pages and web applications that users access through web browsers over the Internet.

---

### Q2. What is the difference between Internet and Web?

**Answer:**

> The Internet is the global network that connects devices, while the Web is a service that runs on top of the Internet and allows users to access websites and web applications.

---

### Q3. What is a website?

**Answer:**

> A website is a collection of related web pages and resources available through the Web, usually under a domain name.

---

### Q4. What is a web application?

**Answer:**

> A web application is an interactive software application that users access through a web browser and that typically communicates with a backend server and database.

---

# 📝 YOUR NOTES

```text
WEB FUNDAMENTALS

2. WORLD WIDE WEB (WWW)
----------------------------

The Web is a system of interconnected web pages
and web applications accessed through the Internet
using web browsers.

Internet:
The global network that connects devices.

Web:
A service that runs on top of the Internet.

Website:
A collection of related web pages.

Web Page:
A single document displayed in a web browser.

Web Application:
An interactive application accessed through a web browser.

Examples:
- Gmail
- Amazon
- Netflix
- GitHub

Basic Web Flow:

User
 ↓
Browser
 ↓
Internet
 ↓
Web Server
 ↓
Response
 ↓
Browser
 ↓
Web Page

Browser:
Software used to access websites and web applications.

Examples:
- Chrome
- Firefox
- Edge
- Safari

Web Server:
A system that receives requests and sends responses.
```

---

# ✅ CHECKPOINT

Before moving forward, make sure you can explain this:

> **"When I open a website, my browser communicates with a server over the Internet. The server sends a response, and the browser processes the received resources and displays the webpage."**

If you understand this, you are ready for the next topic.

# 🔜 NEXT TOPIC: CLIENT AND SERVER

We will learn:

```text
Client
   ↕
Request / Response
   ↕
Server
```