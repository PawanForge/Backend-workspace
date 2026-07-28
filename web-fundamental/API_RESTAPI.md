# 🟢 TOPIC 12 — API & REST API

This is a **very important topic** for your Full Stack journey because your **React frontend** will communicate with your **Node.js backend** through APIs.

---

## 1️⃣ What is an API?

**API** stands for:

> **Application Programming Interface**

An API allows two software applications to communicate with each other.

For example:

```text
React Frontend
      │
      │ API Request
      ▼
Node.js Backend
      │
      ▼
Database
```

The frontend doesn't directly access the database.

Instead:

```text
React
  ↓
API
  ↓
Backend
  ↓
Database
```

---

## 2️⃣ Real-Life Example

Imagine a restaurant.

```text
You
 ↓
Waiter
 ↓
Kitchen
```

You don't go directly into the kitchen.

The **waiter** takes your order and brings the result back.

Similarly:

```text
Frontend
   ↓
API
   ↓
Backend
   ↓
Database
```

The **API acts as the communication interface** between the frontend and backend.

---

# 3️⃣ What is a REST API?

**REST** stands for:

> **Representational State Transfer**

A **REST API** is an API designed around REST principles and commonly uses HTTP methods to work with resources.

Example:

```text
GET /users
```

Means:

> Get users.

```text
POST /users
```

Means:

> Create a user.

```text
DELETE /users/10
```

Means:

> Delete user 10.

---

# 4️⃣ What is a Resource?

In REST APIs, we usually work with **resources**.

Examples:

```text
/users
/products
/orders
/employees
/expenses
```

For your Expense Tracker:

```text
/expenses
```

is a resource.

---

# 5️⃣ What is an Endpoint?

An **endpoint** is a specific URL where an API can receive requests.

For example:

```text
GET /api/users
```

is an endpoint.

You might have:

```text
GET    /api/users
GET    /api/users/10
POST   /api/users
PUT    /api/users/10
PATCH  /api/users/10
DELETE /api/users/10
```

Each endpoint performs a specific operation.

---

# 6️⃣ REST API CRUD

Remember CRUD:

```text
C → Create
R → Read
U → Update
D → Delete
```

Mapping with HTTP:

```text
CREATE
↓
POST

READ
↓
GET

UPDATE
↓
PUT / PATCH

DELETE
↓
DELETE
```

Example:

```text
POST   /api/expenses
GET    /api/expenses
GET    /api/expenses/10
PATCH  /api/expenses/10
DELETE /api/expenses/10
```

---

# 7️⃣ API Request & Response

Suppose React wants all expenses.

### Request

```text
GET /api/expenses
```

Backend processes it.

### Response

```json
[
  {
    "id": 1,
    "title": "Food",
    "amount": 500
  },
  {
    "id": 2,
    "title": "Travel",
    "amount": 1000
  }
]
```

Complete flow:

```text
React
   │
   │ GET /api/expenses
   ▼
Node.js + Express
   │
   │ Query Database
   ▼
Database
   │
   │ Expense Data
   ▼
Node.js + Express
   │
   │ JSON Response
   ▼
React
```

---

# 8️⃣ What is JSON?

**JSON** stands for:

> **JavaScript Object Notation**

It is a common format for exchanging data between frontend and backend.

Example:

```json
{
  "name": "Pawan",
  "age": 22,
  "role": "Developer"
}
```

An API might return:

```json
{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "id": 1,
    "name": "Pawan"
  }
}
```

You'll use JSON **very frequently** when building APIs with Node.js and Express.

---

# 9️⃣ Practical — Use a Public API

Open this URL:

```text
https://jsonplaceholder.typicode.com/users
```

This is a public fake REST API for practice.

Now use JavaScript:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

The flow is:

```text
Your JavaScript
      ↓
fetch()
      ↓
GET Request
      ↓
API
      ↓
JSON Response
      ↓
JavaScript
```

---

# 🔟 Practical — Get One User

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => {
    console.log(user);
  });
```

Here:

```text
/users/1
```

means:

> Get user with ID 1.

---

# 1️⃣1️⃣ Practical — POST Data

```javascript
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Pawan",
    email: "pawan@example.com"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

Flow:

```text
JavaScript
    │
    │ POST
    │
    │ JSON Data
    ▼
REST API
    │
    ▼
Response
```

---

# 🛠️ PRACTICAL TASK

Create a simple JavaScript file and practice:

### 1. Get all users

```text
GET /users
```

### 2. Get one user

```text
GET /users/1
```

### 3. Create a user

```text
POST /users
```

### 4. Update a user

```text
PUT /users/1
```

### 5. Delete a user

```text
DELETE /users/1
```

Your goal is to understand:

```text
HTTP Method
      +
Endpoint
      +
Request
      +
Response
```

---

# 📝 SHORT NOTES

```text
API
--------------------------------

API:
Application Programming Interface.

Allows different software systems
to communicate.

Frontend
   ↓
API
   ↓
Backend
   ↓
Database


REST API:
API designed around REST principles
and commonly uses HTTP methods.

Resource Examples:

/users
/products
/orders
/expenses


Endpoint:
Specific URL where an API
receives requests.


CRUD:

CREATE → POST
READ   → GET
UPDATE → PUT / PATCH
DELETE → DELETE


Example:

GET    /api/users
GET    /api/users/10
POST   /api/users
PATCH  /api/users/10
DELETE /api/users/10


JSON:
Common data format used
for API communication.

Example:

{
  "name": "Pawan",
  "age": 22
}
```

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is an API?

> An API is an interface that allows different software applications or components to communicate with each other.

### Q2. What is REST API?

> A REST API is an API that follows REST architectural principles and commonly uses HTTP methods to operate on resources.

### Q3. What is an endpoint?

> An endpoint is a specific URL through which a client accesses a particular API operation or resource.

### Q4. What is CRUD?

> CRUD stands for Create, Read, Update, and Delete, representing the basic operations performed on data.

### Q5. Why is JSON used in APIs?

> JSON is lightweight, human-readable, and easy for JavaScript applications to parse and generate, making it a common format for exchanging structured data.

---

# ✅ CHECKPOINT

You should now understand this:

```text
React Frontend
      │
      │ HTTP Request
      ▼
REST API Endpoint
      │
      ▼
Node.js Backend
      │
      ▼
Database
      │
      ▼
Node.js Backend
      │
      │ JSON Response
      ▼
React Frontend
```

This is the **core architecture you'll use as a Full Stack Developer**.

---

# 🔜 NEXT TOPIC — JSON

Before starting Node.js, we'll quickly learn **JSON properly** because you'll use it constantly in APIs.

We'll cover:

```text
JSON Syntax
Objects
Arrays
Strings
Numbers
Boolean
null
Nested JSON
JSON.parse()
JSON.stringify()
JSON vs JavaScript Object
Practical API JSON
```

