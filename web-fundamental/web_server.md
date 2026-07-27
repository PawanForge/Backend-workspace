# 🟢 TOPIC 6 — WEB SERVER

## 🎯 Goal of this topic

After completing this topic, you should understand:

* What is a server?
* What is a web server?
* How a web server works
* Static files vs dynamic content
* Web server vs application server
* What Apache and Nginx are
* Where Node.js fits
* How a request reaches a server
* How to create your first local server

---

# 1️⃣ What is a Server?

A **server** is a computer or software system that provides resources or services to other computers or applications called **clients**.

For example:

```text id="9q3x7a"
Client
  │
  │ Request
  ▼
Server
  │
  │ Response
  ▼
Client
```

The client asks for something.

The server processes the request and provides a response.

---

# 2️⃣ What is a Web Server?

A **web server** is a server that receives HTTP/HTTPS requests and sends web resources back to clients, usually web browsers.

For example:

```text id="3z5k1p"
Browser
   │
   │ HTTP Request
   ▼
Web Server
   │
   │ HTTP Response
   ▼
Browser
```

A web server can serve resources such as:

```text id="x8m4q2"
HTML
CSS
JavaScript
Images
Fonts
Videos
```

For example, when you open:

```text id="w6v2n8"
https://example.com
```

the browser requests resources from a server.

The server sends them back.

---

# 3️⃣ Simple Real-Life Example

Imagine a restaurant.

```text id="7p2m4x"
Customer
   ↓
Orders Food
   ↓
Restaurant
   ↓
Prepares Food
   ↓
Gives Food
   ↓
Customer
```

In web development:

```text id="k5r8y1"
Browser
   ↓
HTTP Request
   ↓
Web Server
   ↓
Processes Request
   ↓
HTTP Response
   ↓
Browser
```

The idea is similar.

---

# 4️⃣ What Happens When You Open a Website?

Suppose you enter:

```text id="a9f3c7"
https://example.com
```

The simplified process is:

```text id="v2m8q5"
1. User enters URL
        ↓
2. Browser creates request
        ↓
3. Request travels through network
        ↓
4. Request reaches server
        ↓
5. Server processes request
        ↓
6. Server sends response
        ↓
7. Browser receives response
        ↓
8. Browser displays webpage
```

The server might return:

```text id="r6x1p9"
HTML
CSS
JavaScript
Images
```

The browser then processes these resources.

---

# 5️⃣ Static Files

A **static file** is a file that is generally served as it is stored, without generating personalized content for each request.

Examples:

```text id="t3q7m2"
index.html
style.css
script.js
logo.png
```

Suppose your project contains:

```text id="h8w4n6"
my-website
│
├── index.html
├── style.css
├── script.js
└── logo.png
```

A web server can serve these files to the browser.

Flow:

```text id="p5z2k8"
Browser
   │
   │ GET /index.html
   ▼
Web Server
   │
   │ Read index.html
   ▼
Response
   │
   ▼
Browser
```

This is a basic example of **static content delivery**.

---

# 6️⃣ Dynamic Content

Dynamic content is generated or customized based on the request, user, application logic, or data.

For example, imagine a website showing:

```text id="s4n8y2"
Welcome, Pawan
```

Another user might see:

```text id="d7k3m9"
Welcome, Rahul
```

The content depends on the user.

A dynamic application may work like this:

```text id="u2f6q8"
Browser
   │
   │ Request
   ▼
Backend Server
   │
   │ Business Logic
   ▼
Database
   │
   │ User Data
   ▼
Backend Server
   │
   │ Dynamic Response
   ▼
Browser
```

This is where backend development becomes important.

---

# 7️⃣ Static vs Dynamic Content

| Static Content                   | Dynamic Content                       |
| -------------------------------- | ------------------------------------- |
| Usually pre-existing files       | Generated based on logic/data         |
| Same content for many users      | Can vary by user/request              |
| HTML, CSS, images                | User dashboard                        |
| Easy to serve                    | Requires application logic            |
| Often served by web servers/CDNs | Usually involves backend/server logic |

Example:

### Static

```text id="8k4m2p"
About Us
```

Everyone sees the same content.

### Dynamic

```text id="q6x9n3"
Welcome, Pawan
```

The content may depend on who is logged in.

---

# 8️⃣ Web Server vs Application Server

This is an important concept.

## Web Server

A web server is commonly responsible for handling HTTP requests and serving web resources, especially static files.

Examples:

* Nginx
* Apache HTTP Server

## Application Server

An application server runs application logic.

For example, your future backend:

```text id="v8m2q5"
Node.js
Express.js
```

can handle:

* API requests
* Business logic
* Authentication
* Validation
* Database operations

A simplified architecture could be:

```text id="c4x7n1"
Browser
   │
   ▼
Nginx
(Web Server)
   │
   ▼
Node.js + Express
(Application)
   │
   ▼
PostgreSQL
(Database)
```

However, terminology varies by technology. Node.js itself is a JavaScript runtime, and Express is a web framework running on Node.js; together they can implement a web application server. You don't need to memorize strict labels right now.

---

# 9️⃣ What is Apache?

**Apache HTTP Server** is a popular open-source web server.

It can:

* Receive HTTP requests
* Serve static files
* Handle configuration
* Support virtual hosts
* Work as a reverse proxy with additional configuration

For example:

```text id="q5y8m2"
Browser
   │
   ▼
Apache
   │
   ▼
Website Files
```

You may encounter Apache when working with traditional web hosting.

---

# 🔟 What is Nginx?

**Nginx** is another popular web server and reverse proxy.

It is commonly used for:

* Serving static files
* Reverse proxying
* Load balancing
* Handling incoming HTTP/HTTPS traffic

For example:

```text id="m8r3k1"
User
  │
  ▼
Nginx
  │
  ├── Static Files
  │
  └── Node.js Backend
```

A common production architecture is:

```text id="y6p2q9"
Internet
    │
    ▼
Nginx
    │
    ▼
Node.js + Express
    │
    ▼
PostgreSQL
```

Don't worry about Nginx configuration now. You'll learn it later during deployment.

---

# 1️⃣1️⃣ Where Does Node.js Fit?

This is especially important for you.

You are planning to learn:

```text id="b3x8m6"
Node.js
Express.js
```

Node.js is a **JavaScript runtime** that allows JavaScript to run outside the browser.

You can use Node.js to create servers and backend applications.

For example:

```text id="p9w4k2"
Browser
    │
    │ Request
    ▼
Node.js Server
    │
    │ Response
    ▼
Browser
```

Express.js can make building HTTP APIs and web servers easier.

For example:

```text id="h2m7q5"
Browser
   │
   │ GET /users
   ▼
Express.js
   │
   ▼
Node.js
   │
   ▼
Response
```

Later, you'll build this yourself.

---

# 🔥 1️⃣2️⃣ Web Server Request Flow

Let's understand a simple static website.

Suppose you request:

```text id="e7k3n1"
GET /index.html
```

The flow is:

```text id="z4p8q2"
Browser
   │
   │ GET /index.html
   ▼
Web Server
   │
   │ Find file
   ▼
index.html
   │
   │ Response
   ▼
Browser
   │
   ▼
Render Page
```

Now consider a dynamic API request:

```text id="f8m2x6"
GET /users
```

The flow could be:

```text id="k3q7n9"
Browser
   │
   │ GET /users
   ▼
Node.js + Express
   │
   │ Query Database
   ▼
PostgreSQL
   │
   │ User Data
   ▼
Node.js + Express
   │
   │ JSON Response
   ▼
Browser
```

This second flow is the type of architecture you'll build as a backend developer.

---

# 🛠️ PRACTICAL — STEP 1

You already know how to create an HTML file.

Create:

```text id="x7n4q2"
server-practice
│
└── index.html
```

Add:

```html id="v9m3k1"
<!DOCTYPE html>
<html>
<head>
    <title>Server Practice</title>
</head>
<body>

    <h1>Hello from my website</h1>

    <p>I am learning how web servers work.</p>

</body>
</html>
```

If you simply double-click the file, the browser may open it using a `file://` URL.

That's **not the same as serving it through an HTTP web server**.

---

# 🛠️ PRACTICAL — STEP 2: Use Python's Simple HTTP Server

If Python is installed on your computer, open your terminal inside the `server-practice` folder.

Run:

```bash id="y2m8p4"
python -m http.server 8000
```

You should see something indicating that the server is running on port `8000`.

Now open your browser:

```text id="k5x9q3"
http://localhost:8000
```

You should see your webpage.

Congratulations! 🎉

You have just run your **first local HTTP web server**.

---

# 1️⃣3️⃣ What is `localhost`?

`localhost` refers to **your own computer**.

When you open:

```text id="j7q4m2"
http://localhost:8000
```

you are communicating with a server running on your own machine.

Conceptually:

```text id="n3x8k6"
Your Browser
     │
     │ HTTP Request
     ▼
Your Computer
     │
     │ Port 8000
     ▼
Local Web Server
```

No external hosting is required.

This is extremely useful during development.

---

# 1️⃣4️⃣ What is a Port?

A **port** is a logical communication endpoint used by network applications.

In our example:

```text id="q8m2v5"
localhost:8000
```

`8000` is the port number.

Think of the port as helping the operating system identify which application should receive incoming network traffic.

For example, you may commonly see:

```text id="m5x9k2"
80    → HTTP
443   → HTTPS
3000  → Common development port
5173  → Common Vite development port
8000  → Common development port
```

These are conventions or commonly used ports, not universal rules for every application.

We will study ports properly in the upcoming topic.

---

# 🧪 PRACTICAL TASK

Run your local server:

```bash id="q7m4x9"
python -m http.server 8000
```

Then open:

```text id="w3k8p2"
http://localhost:8000
```

Now open:

```text id="z6n1q4"
F12
```

Go to:

```text id="a9m3k7"
Network
```

Refresh the page.

Click the request for `index.html`.

Try to identify:

```text id="j2v8x5"
Request URL
Request Method
Status Code
Response Headers
Response
```

You should now be able to visualize:

```text id="r4k7m2"
Browser
    │
    │ HTTP Request
    ▼
localhost:8000
    │
    │
Python HTTP Server
    │
    │
    ▼
index.html
    │
    │ HTTP Response
    ▼
Browser
```

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is a web server?

> A web server is a system that handles HTTP/HTTPS requests and provides web resources or responses to clients.

### Q2. What is the difference between static and dynamic content?

> Static content is generally served as pre-existing resources, while dynamic content is generated or customized based on application logic, user information, or data.

### Q3. What is localhost?

> `localhost` refers to the local computer on which the request is being made. It is commonly used for development and testing.

### Q4. What is a port?

> A port is a logical communication endpoint that helps the operating system direct network traffic to the appropriate application or service.

### Q5. What is Nginx?

> Nginx is a web server and reverse proxy commonly used for serving static content, routing requests, load balancing, and forwarding traffic to application servers.

### Q6. What is Node.js?

> Node.js is a JavaScript runtime that allows JavaScript to run outside the browser. It can be used to build servers and backend applications.

---

# 📝 YOUR NOTES

```text id="w2m7q9"
WEB FUNDAMENTALS

6. WEB SERVER
--------------------------------

SERVER:
A computer or software system that provides
resources or services to clients.

WEB SERVER:
A server that handles HTTP/HTTPS requests and
provides web resources or responses.

Examples:
- Nginx
- Apache HTTP Server

STATIC CONTENT:
Pre-existing resources served to clients.

Examples:
- HTML
- CSS
- JavaScript
- Images
- Fonts

DYNAMIC CONTENT:
Content generated or customized based on
application logic, user information, or data.

Example:
User Dashboard
User Profile
Product Data

WEB SERVER:
Commonly handles HTTP requests and serves
web resources.

APPLICATION:
Handles business logic and application behavior.

NODE.JS:
JavaScript runtime used to build backend
applications and servers.

EXPRESS.JS:
Web framework commonly used with Node.js
to build APIs and web applications.

LOCALHOST:
Refers to the local computer.

Example:
http://localhost:8000

PORT:
Logical communication endpoint used by
network applications.

Examples:
80   → HTTP
443  → HTTPS
3000 → Common development port
5173 → Common Vite development port
8000 → Common development port

Basic Flow:

Browser
   ↓
HTTP Request
   ↓
Web Server
   ↓
Process Request
   ↓
HTTP Response
   ↓
Browser
```

---

# ✅ CHECKPOINT

You should now understand:

```text
Browser
   ↓
HTTP Request
   ↓
Web Server
   ↓
HTTP Response
   ↓
Browser
```

And you should know that:

```text
Static Website:
Browser → Web Server → Static Files

Dynamic Application:
Browser → Backend → Database → Backend → Browser
```

Also remember:

> **Node.js is not a browser. Node.js is a JavaScript runtime that allows us to execute JavaScript on the server side and build backend applications.**

This distinction will become very important when we start Node.js.

---

# 🔜 NEXT TOPIC

## **TOPIC 7 — IP ADDRESS**

Next we will understand:

```text
What is an IP Address?
       ↓
IPv4
       ↓
IPv6
       ↓
Public IP
       ↓
Private IP
       ↓
Localhost
       ↓
127.0.0.1
       ↓
How a browser finds a server
```

