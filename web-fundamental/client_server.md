# 🟢 TOPIC 3 — CLIENT AND SERVER

## 🎯 Goal of this topic

After completing this topic, you should understand:

* What is a client?
* What is a server?
* How client and server communicate
* What is a request?
* What is a response?
* Real-world client-server examples
* How this concept connects to your future React + Node.js application

---

# 1️⃣ What is a Client?

A **client** is a device or software that sends a request to a server to get some data or service.

In web development, the **browser is usually the client**.

Examples:

* Google Chrome
* Microsoft Edge
* Firefox
* Safari

When you open a website, your browser acts as the client.

For example:

```text id="q7l4a8"
You
 ↓
Chrome Browser
 ↓
Request
```

The browser is asking a server for something.

For example:

> "Give me the GitHub homepage."

---

# 2️⃣ What is a Server?

A **server** is a computer or software system that receives requests from clients and provides the requested data or service.

For example:

```text id="v7j6ck"
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

The server may provide:

* HTML
* CSS
* JavaScript
* Images
* JSON data
* User information
* Database data

The server can also perform business logic.

For example:

```text id="k7x4ma"
Client
   │
   │ "Show my expenses"
   ▼
Backend Server
   │
   │ Ask database
   ▼
Database
   │
   │ Expense data
   ▼
Backend Server
   │
   │ Send data
   ▼
Client
```

---

# 3️⃣ Client vs Server

Let's compare them.

| Client                     | Server                      |
| -------------------------- | --------------------------- |
| Sends requests             | Receives requests           |
| Usually used by the user   | Provides services/data      |
| Browser is a common client | Backend can run on a server |
| Displays results           | Processes requests          |
| Runs frontend code         | Runs backend code           |

In your future full-stack application:

```text id="xq7m3p"
CLIENT
React
   │
   │ HTTP Request
   ▼
SERVER
Node.js + Express
   │
   │ Database Query
   ▼
DATABASE
PostgreSQL
```

This is the architecture you are working toward.

---

# 4️⃣ What is a Request?

A **request** is a message sent by a client to a server asking for something.

For example, you open:

```text id="f3d9q1"
https://example.com
```

Your browser sends a request to the server.

Conceptually:

```text id="9r5z1e"
Browser
   │
   │ "Please give me example.com"
   ▼
Server
```

The request may contain information such as:

* URL
* HTTP Method
* Headers
* Request Body

We will study each of these in detail later.

---

# 5️⃣ What is a Response?

A **response** is the server's answer to the client's request.

For example:

```text id="2v5x4n"
Browser
   │
   │ Request
   ▼
Server
   │
   │ Response
   ▼
Browser
```

The response might contain:

* HTML
* JSON
* Images
* CSS
* JavaScript
* Status Code
* Headers

For example:

```text id="6t1h0f"
Request:
"Give me user information"

Response:
{
    "name": "Pawan",
    "role": "Developer"
}
```

This JSON response is commonly used when a frontend communicates with a backend API.

---

# 6️⃣ Real-Life Example

Think about ordering food online.

You:

> "I want a pizza."

The restaurant:

> "Here is your pizza."

In web development:

```text id="2d8k8k"
You
 ↓
Client
 ↓
Request: "I want pizza"
 ↓
Server
 ↓
Process request
 ↓
Response: "Pizza details"
 ↓
Client
```

The concept is the same:

```text id="w9o6yr"
CLIENT
   │
   │ Request
   ▼
SERVER
   │
   │ Response
   ▼
CLIENT
```

---

# 7️⃣ Real Web Example

Suppose you open an online shopping website.

You click:

> "Show me all products."

The process is:

```text id="6w9n9s"
React Frontend
     │
     │ GET /products
     ▼
Node.js + Express
     │
     │ Query database
     ▼
PostgreSQL
     │
     │ Product data
     ▼
Node.js + Express
     │
     │ JSON Response
     ▼
React Frontend
     │
     ▼
Products displayed
```

This is a **real full-stack application flow**.

---

# 8️⃣ Client-Server Communication

The client and server communicate through a network.

In web development, they commonly communicate using:

> **HTTP or HTTPS**

The basic flow is:

```text id="8d4y6z"
CLIENT
(Browser)
   │
   │ HTTP Request
   ▼
INTERNET
   │
   ▼
SERVER
(Backend)
   │
   │ HTTP Response
   ▼
INTERNET
   │
   ▼
CLIENT
(Browser)
```

We will learn HTTP in detail later.

For now, remember:

> **HTTP is one of the main protocols used for communication between clients and servers on the Web.**

---

# 9️⃣ Client-Side vs Server-Side

This is extremely important for you as a future full-stack developer.

## Client-Side

Code that runs in the user's browser.

Examples:

```text id="m5cz8v"
HTML
CSS
JavaScript
React
```

For example:

```text id="f2xq6d"
React
   ↓
Runs in Browser
   ↓
User sees UI
```

---

## Server-Side

Code that runs on the server.

Examples:

```text id="l7o4y1"
Node.js
Express.js
```

The server can:

* Process requests
* Validate data
* Authenticate users
* Apply business logic
* Communicate with databases

For example:

```text id="v0qz5h"
Browser
   │
   │ Login Request
   ▼
Node.js + Express
   │
   │ Check user
   ▼
PostgreSQL
```

---

# 🔥 Important Connection to Your Learning

You already know:

```text id="f9e1w8"
HTML
CSS
JavaScript
React
Tailwind
```

These are mainly used for the **frontend/client side**.

Now you are going to learn:

```text id="4y5x0q"
Node.js
Express.js
PostgreSQL
```

These will help you build the **backend/server side**.

So your complete application will look like:

```text id="h3r4wq"
             FULL-STACK APPLICATION

                  USER
                    │
                    ▼
             ┌─────────────┐
             │   BROWSER   │
             │   CLIENT    │
             └──────┬──────┘
                    │
                 Request
                    │
                    ▼
             ┌─────────────┐
             │   BACKEND   │
             │ Node +       │
             │ Express      │
             └──────┬──────┘
                    │
                 Query
                    │
                    ▼
             ┌─────────────┐
             │  DATABASE   │
             │ PostgreSQL  │
             └──────┬──────┘
                    │
                  Data
                    │
                    ▼
             ┌─────────────┐
             │   BACKEND   │
             └──────┬──────┘
                    │
                Response
                    │
                    ▼
             ┌─────────────┐
             │   REACT     │
             │  FRONTEND   │
             └─────────────┘
```

This diagram is the **core idea of full-stack development**.

---

# 🛠️ PRACTICAL — STEP 1

Now let's see this concept in your browser.

Open:

```text id="t7c3s4"
https://example.com
```

Press:

```text id="n8s4a2"
F12
```

Go to:

```text id="v1y8k0"
Network
```

Refresh:

```text id="q5z6c1"
Ctrl + R
```

Click the main document request.

You should find something similar to:

```text id="o7m2f9"
Request URL
Request Method
Status Code
Response Headers
Response
```

Now identify:

### Client

Your browser.

### Request

The browser asks the server for the webpage.

### Server

The remote system hosting the webpage.

### Response

The server sends the requested webpage/resources back.

### Browser

Processes the response and displays the page.

---

# 🛠️ PRACTICAL — STEP 2

Now open the browser Console.

Press:

```text id="6s4y3d"
F12
```

Go to:

```text id="x9q2k7"
Console
```

Run:

```javascript id="f8c2m1"
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data));
```

You should get a JSON response similar to:

```json id="r3t7v9"
{
  "userId": 1,
  "id": 1,
  "title": "...",
  "body": "..."
}
```

You just performed a real client-server interaction.

The flow was:

```text id="b2x7k4"
Browser Console
      │
      │ fetch()
      ▼
API Server
      │
      │ JSON Response
      ▼
Browser Console
      │
      ▼
console.log()
```

This is the exact type of communication you will later build yourself using **Node.js + Express**.

---

# 🧪 PRACTICAL TASK

Run this in your browser console:

```javascript id="h4z7x2"
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users));
```

Now try:

```javascript id="p6q9s1"
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => console.log(posts));
```

Observe the difference.

You requested different resources:

```text id="u1z8m3"
GET /users
GET /posts
```

The server returned different data.

You have now started working with **APIs**, which is the next major concept in backend development.

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is a client?

> A client is a device or software application that sends requests to a server to access data or services. In web development, a web browser commonly acts as the client.

### Q2. What is a server?

> A server is a system that receives requests from clients, processes them, and sends responses or provides services.

### Q3. What is a request?

> A request is a message sent by a client to a server asking for a resource or requesting an operation.

### Q4. What is a response?

> A response is the data or result sent by the server back to the client after processing a request.

### Q5. How does a client communicate with a server?

> In web applications, the client and server commonly communicate using HTTP or HTTPS requests and responses.

---

# 📝 YOUR NOTES

```text
WEB FUNDAMENTALS

3. CLIENT AND SERVER
----------------------------

CLIENT:
A client is a device or software that sends
requests to a server.

In web development:
Browser = Client

Examples:
- Chrome
- Firefox
- Edge
- Safari

SERVER:
A server is a system that receives client requests,
processes them, and sends responses.

REQUEST:
A message sent by a client to a server.

RESPONSE:
The result/data sent by the server to the client.

Basic Flow:

Client
  ↓
Request
  ↓
Server
  ↓
Processing
  ↓
Response
  ↓
Client

Example:

React Frontend
      ↓
HTTP Request
      ↓
Node.js + Express
      ↓
PostgreSQL
      ↓
Node.js + Express
      ↓
HTTP Response
      ↓
React Frontend
```

---

# ✅ CHECKPOINT

Before moving to the next topic, make sure you understand this:

> **A client (such as a browser) sends a request to a server. The server processes that request and sends a response back to the client.**

And remember:

```text
Frontend
    ↓
Client

Backend
    ↓
Server

Database
    ↓
Stores Application Data
```

---

# 🔜 NEXT TOPIC

## **TOPIC 4 — CLIENT-SERVER ARCHITECTURE**

We will go one level deeper and understand:

```text
1-Tier Architecture
2-Tier Architecture
3-Tier Architecture
Client
Server
Database
Request Flow
Response Flow
```

Then we will connect it directly to your future architecture:

```text
React
   ↓
Node.js + Express
   ↓
PostgreSQL
```

