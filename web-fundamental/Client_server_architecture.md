# 🟢 TOPIC 4 — CLIENT-SERVER ARCHITECTURE

## 🎯 Goal of this topic

After completing this topic, you should understand:

* What is client-server architecture?
* How client and server are separated
* 1-Tier Architecture
* 2-Tier Architecture
* 3-Tier Architecture
* How a real full-stack application works
* Where React, Node.js, Express.js, and PostgreSQL fit
* Complete request and response flow

---

# 1️⃣ What is Client-Server Architecture?

**Client-Server Architecture** is a software architecture where the application is divided into two main parts:

```text id="n2k4w7"
CLIENT
   ↕
SERVER
```

The **client** requests something, and the **server** processes the request and sends a response.

For web applications:

```text id="v7h2p9"
Client
(Browser)
   │
   │ Request
   ▼
Server
(Backend)
   │
   │ Response
   ▼
Client
(Browser)
```

You already learned this in the previous topic.

Now we will understand how this architecture can be organized into different layers.

---

# 2️⃣ What is an Architecture?

In software development, **architecture** means the overall structure of an application.

It describes:

* Where code runs
* How different components communicate
* How data flows
* How different parts of the system are organized

For example, your future application may look like:

```text id="0j8h3p"
React
  ↓
Express
  ↓
PostgreSQL
```

This is a simplified view of your application architecture.

---

# 3️⃣ 1-Tier Architecture

In **1-Tier Architecture**, everything is located in one layer or one application.

For example:

```text id="3q9s1a"
┌──────────────────────────────┐
│       Single Application     │
│                              │
│  UI + Logic + Data           │
│                              │
└──────────────────────────────┘
```

Everything is together.

### Example

A simple desktop application that stores data locally.

```text id="b7r4k2"
Desktop App
    │
    ├── UI
    ├── Business Logic
    └── Local Data
```

### Advantages

* Simple
* Easy to develop
* Easy for small applications

### Disadvantages

* Difficult to scale
* Difficult to maintain large applications
* Components are tightly connected

You generally won't use this architecture for a modern large-scale web application.

---

# 4️⃣ 2-Tier Architecture

In **2-Tier Architecture**, the application is divided into two parts:

```text id="9w5x2m"
CLIENT
   │
   ▼
SERVER / DATABASE
```

The client communicates directly with the server or database.

For example:

```text id="j3v8q6"
Client Application
       │
       │ Request
       ▼
Database Server
       │
       │ Data
       ▼
Client Application
```

A common example is a desktop application directly connected to a database.

### Problem

If many clients directly access the database:

```text id="z5k1r8"
Client 1 ──┐
Client 2 ──┤
Client 3 ──┼──> Database
Client 4 ──┤
Client 5 ──┘
```

This can create security and maintenance problems.

For modern web applications, we generally introduce a separate backend layer.

---

# 5️⃣ 3-Tier Architecture

This is **very important for you**.

A modern web application commonly follows a **3-tier architecture**.

It has three main layers:

```text id="q2p7x5"
┌────────────────────────┐
│    PRESENTATION        │
│       LAYER            │
│                        │
│ React + HTML + CSS     │
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│     APPLICATION        │
│       LAYER             │
│                        │
│ Node.js + Express      │
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│       DATA             │
│       LAYER            │
│                        │
│ PostgreSQL             │
└────────────────────────┘
```

Let's understand each layer.

---

# 6️⃣ Presentation Layer

The **Presentation Layer** is what the user interacts with.

In your case:

```text id="1j8f4x"
React
Tailwind CSS
HTML
CSS
JavaScript
```

It runs mainly in the user's browser.

Example:

```text id="l4w8s2"
User
 ↓
React UI
 ↓
Button
 ↓
User clicks "Login"
```

The frontend collects user input and sends it to the backend.

---

# 7️⃣ Application Layer

The **Application Layer** contains the backend logic.

In your future stack:

```text id="p8x5n2"
Node.js
Express.js
TypeScript
```

This layer handles:

* Requests
* Business logic
* Authentication
* Authorization
* Validation
* API endpoints
* Communication with database

For example:

```text id="r4y7m1"
React
  │
  │ POST /login
  ▼
Express
  │
  │ Validate login
  ▼
Database
```

The backend decides what should happen when the user performs an action.

---

# 8️⃣ Data Layer

The **Data Layer** is responsible for storing and retrieving data.

In your recommended stack:

```text id="t5n8q3"
PostgreSQL
```

For example, your database might contain:

```text id="p2v9k4"
Users
Products
Orders
Payments
Expenses
Employees
```

The backend communicates with the database.

Usually, the frontend does **not** directly communicate with the database.

Instead:

```text id="y6w3s9"
React
   ↓
Node.js + Express
   ↓
PostgreSQL
```

This separation is extremely important.

---

# 9️⃣ Complete 3-Tier Architecture

Your future full-stack application could look like this:

```text id="h7q4m2"
                 USER
                   │
                   ▼
        ┌────────────────────┐
        │   PRESENTATION     │
        │       LAYER        │
        │                    │
        │ React              │
        │ Tailwind CSS       │
        │ TypeScript         │
        └─────────┬──────────┘
                  │
             HTTP Request
                  │
                  ▼
        ┌────────────────────┐
        │   APPLICATION      │
        │       LAYER        │
        │                    │
        │ Node.js            │
        │ Express.js         │
        │ TypeScript         │
        └─────────┬──────────┘
                  │
             Database Query
                  │
                  ▼
        ┌────────────────────┐
        │      DATA          │
        │      LAYER         │
        │                    │
        │   PostgreSQL       │
        └────────────────────┘
```

This is the architecture you should keep in your mind while learning full-stack development.

---

# 🔥 REAL EXAMPLE — LOGIN SYSTEM

Let's understand the architecture with a real example.

Suppose you have a login page:

```text id="7v1n5x"
Email: pawan@example.com
Password: ********

[ Login ]
```

You click the Login button.

### Step 1 — Presentation Layer

React collects:

```text id="c3r8y6"
Email
Password
```

Then React sends:

```text id="f6k2w9"
POST /login
```

to the backend.

---

### Step 2 — Application Layer

Node.js + Express receives the request.

The backend checks:

```text id="k9m3r5"
Is email valid?
Is password correct?
Does user exist?
```

Then it communicates with PostgreSQL.

---

### Step 3 — Data Layer

PostgreSQL checks the user information.

```text id="x4q7n2"
Users Table

ID    Email              Password
1     pawan@example.com  hashed-password
```

The database sends the result back.

---

### Step 4 — Backend Response

The backend processes the result.

If login is successful:

```text id="j8w2p6"
200 OK
```

and sends a response to React.

---

### Step 5 — Frontend

React receives the response.

Then:

```text id="m5r9x3"
Login Successful
       ↓
Dashboard
```

The complete flow:

```text id="d4k8q1"
USER
 │
 ▼
REACT
 │
 │ POST /login
 ▼
NODE + EXPRESS
 │
 │ Query
 ▼
POSTGRESQL
 │
 │ User Data
 ▼
NODE + EXPRESS
 │
 │ Response
 ▼
REACT
 │
 ▼
DASHBOARD
```

This is a real-world example of **3-tier architecture**.

---

# 🔟 Why Do We Separate These Layers?

This is an important interview question.

Suppose you put everything in one place:

```text id="n7x3p2"
Frontend
+
Backend
+
Database
```

The application becomes difficult to:

* Maintain
* Test
* Scale
* Secure
* Update

Instead, we separate responsibilities.

```text id="w5m8q1"
Frontend
    ↓
Responsible for UI

Backend
    ↓
Responsible for Logic

Database
    ↓
Responsible for Data
```

This follows the idea of **Separation of Concerns**.

In simple words:

> Each part of the application should have its own responsibility.

---

# 🧠 IMPORTANT: 3-Tier vs 3-Layer

You may hear both terms.

They are related but not always identical.

### 3-Tier Architecture

Usually refers to physically/logically separated tiers:

```text
Presentation
Application
Data
```

### 3-Layer Architecture

Usually refers to how code is organized internally:

```text
Presentation Layer
Business Logic Layer
Data Access Layer
```

For your beginner-to-full-stack journey, don't get stuck on the terminology.

The important idea is:

```text
UI
↓
Business Logic
↓
Data
```

---

# 🛠️ PRACTICAL — STEP 1

Let's connect what you already know.

Create this diagram in your notes:

```text id="k2x8p4"
React + Tailwind
       │
       │ HTTP Request
       ▼
Node.js + Express
       │
       │ Database Query
       ▼
PostgreSQL
       │
       │ Data
       ▼
Node.js + Express
       │
       │ HTTP Response
       ▼
React + Tailwind
```

Write the responsibility of each:

### React

> Creates the user interface and interacts with the user.

### Node.js + Express

> Handles requests, business logic, authentication, and APIs.

### PostgreSQL

> Stores and retrieves application data.

---

# 🛠️ PRACTICAL — STEP 2

Let's use your browser to observe the architecture.

Open:

```text id="a7f3x2"
https://jsonplaceholder.typicode.com/users
```

You will see JSON data.

Now think:

```text id="v4m8q1"
Browser
   │
   │ Request
   ▼
API Server
   │
   │ Data
   ▼
Browser
```

The browser is the **client**.

The API server is the **server**.

The JSON is part of the **response**.

In a real full-stack application, the backend server would often get that data from a database.

```text id="r6n2y9"
Browser
   │
   ▼
Backend API
   │
   ▼
Database
```

---

# 🧪 PRACTICAL TASK

Think about your **Expense Tracker** project.

Imagine you want to display all expenses.

Write the flow yourself:

```text
User
 ↓
?
 ↓
?
 ↓
?
```

Your answer should eventually become:

```text
User
 ↓
React Frontend
 ↓
GET /expenses
 ↓
Node.js + Express
 ↓
PostgreSQL
 ↓
Expense Data
 ↓
Node.js + Express
 ↓
React
 ↓
Display Expenses
```

Try to understand **why every layer exists**.

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is client-server architecture?

> Client-server architecture is a system design in which the client sends requests to a server, and the server processes those requests and provides responses or services.

---

### Q2. What is 3-tier architecture?

> 3-tier architecture divides an application into three main tiers: Presentation Layer, Application Layer, and Data Layer.

---

### Q3. What is the Presentation Layer?

> The Presentation Layer handles the user interface and user interaction. In a web application, it can be implemented using React, HTML, CSS, and JavaScript.

---

### Q4. What is the Application Layer?

> The Application Layer contains business logic and handles client requests. In a Node.js application, Express.js is commonly used to implement this layer.

---

### Q5. What is the Data Layer?

> The Data Layer manages data storage and retrieval. A relational database such as PostgreSQL can be used for this purpose.

---

### Q6. Why don't we usually connect React directly to PostgreSQL?

> Because exposing the database directly to the client creates security and architectural problems. The backend acts as an intermediary that handles authentication, authorization, validation, business logic, and controlled database access.

---

# 📝 YOUR NOTES

```text id="5y8r2k"
WEB FUNDAMENTALS

4. CLIENT-SERVER ARCHITECTURE
--------------------------------

Client-Server Architecture:
An architecture where the client sends requests
to the server and the server processes the requests
and sends responses.

1-TIER ARCHITECTURE:
UI + Logic + Data are in one application.

2-TIER ARCHITECTURE:
Client communicates directly with server/database.

3-TIER ARCHITECTURE:

1. Presentation Layer
   ↓
   React + HTML + CSS + JavaScript

2. Application Layer
   ↓
   Node.js + Express.js

3. Data Layer
   ↓
   PostgreSQL

Architecture:

React
  ↓
HTTP Request
  ↓
Node.js + Express
  ↓
Database Query
  ↓
PostgreSQL
  ↓
Data
  ↓
Node.js + Express
  ↓
HTTP Response
  ↓
React

Separation of Concerns:

Frontend:
Responsible for UI

Backend:
Responsible for Business Logic

Database:
Responsible for Data
```

---

# ✅ CHECKPOINT

You should now be able to explain:

```text
React
  ↓
Frontend / Presentation Layer

Node.js + Express
  ↓
Backend / Application Layer

PostgreSQL
  ↓
Data Layer
```

And you should understand the complete flow:

> **The user interacts with React → React sends an HTTP request to the backend → the backend processes the request → the backend communicates with the database if needed → the database returns data → the backend sends a response → React displays the result.**

---

# 🔜 NEXT TOPIC

## **TOPIC 5 — BROWSER**

Now we'll go deeper into something you use every day: the **web browser**.

We'll learn:

```text
What is a Browser?
       ↓
How Browser Works
       ↓
Browser Engine
       ↓
Rendering Engine
       ↓
HTML Parsing
       ↓
CSS Parsing
       ↓
JavaScript Execution
       ↓
DOM
       ↓
CSSOM
       ↓
Render Tree
       ↓
Painting
```

