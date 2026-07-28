
# 🟢 TOPIC 9 — HTTP (HYPERTEXT TRANSFER PROTOCOL)

You **must understand HTTP properly** before starting Node.js and Express because almost every backend API you build will communicate using HTTP.

---

# 🎯 Goal of This Topic

After completing this topic, you should understand:

* What is HTTP?
* Why HTTP is needed
* HTTP Request
* HTTP Response
* HTTP Request Methods
* GET
* POST
* PUT
* PATCH
* DELETE
* HTTP Status Codes
* HTTP Headers
* Request Body
* Response Body
* Query Parameters
* Path Parameters
* Complete HTTP communication flow

---

# 1️⃣ What is HTTP?

HTTP stands for:

> **HyperText Transfer Protocol**

HTTP is a protocol used for communication between a **client** and a **server**.

In simple words:

> HTTP defines how a client and server communicate with each other on the Web.

The basic flow is:

```text
Client
  │
  │ HTTP Request
  ▼
Server
  │
  │ HTTP Response
  ▼
Client
```

For example:

```text
Browser
   │
   │ GET /products
   ▼
Backend Server
   │
   │ 200 OK + Product Data
   ▼
Browser
```

---

# 2️⃣ Why Do We Need HTTP?

Imagine your React frontend wants user data from your backend.

React needs to communicate with the backend.

HTTP provides the rules for that communication.

```text
React
   │
   │ HTTP
   ▼
Node.js + Express
   │
   │ HTTP
   ▼
React
```

Without a communication protocol, the client and server wouldn't have a standardized way to exchange information.

---

# 3️⃣ HTTP Request

An **HTTP Request** is a message sent by a client to a server.

For example:

```text
Client
  │
  │ GET /users
  ▼
Server
```

The request can contain:

* HTTP Method
* URL
* Headers
* Query Parameters
* Path Parameters
* Request Body

A simplified request looks like:

```text
GET /users HTTP/1.1
Host: example.com
Accept: application/json
```

We'll break this down.

---

# 4️⃣ HTTP Response

An **HTTP Response** is the message sent by the server back to the client.

For example:

```text
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": 1,
        "name": "Pawan"
    }
]
```

The response contains things such as:

* Status Code
* Headers
* Response Body

The complete communication is:

```text
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

---

# 5️⃣ HTTP Request Structure

Let's look at a simplified request.

```text
GET /users HTTP/1.1
Host: example.com
Accept: application/json
```

Let's understand each part.

### Method

```text
GET
```

Tells the server what operation the client wants.

### Path

```text
/users
```

Identifies the resource being requested.

### HTTP Version

```text
HTTP/1.1
```

Specifies the HTTP version used for the message.

### Headers

```text
Host: example.com
Accept: application/json
```

Provide additional information about the request.

---

# 6️⃣ HTTP Methods

HTTP methods describe the intended action of a request.

The most important methods for you are:

```text
GET
POST
PUT
PATCH
DELETE
```

Let's understand each one.

---

# 7️⃣ GET

`GET` is used to **retrieve data**.

For example:

```text
GET /users
```

Meaning:

> Give me the users.

Another example:

```text
GET /products
```

Meaning:

> Give me all products.

And:

```text
GET /products/10
```

Meaning:

> Give me product with ID 10.

Conceptually:

```text
React
  │
  │ GET /products
  ▼
Backend
  │
  │ Product Data
  ▼
React
```

### Important

GET requests are generally intended for retrieving data and should not be used to perform state-changing operations.

---

# 8️⃣ POST

`POST` is commonly used to **create a new resource** or submit data for processing.

For example:

```text
POST /users
```

The request body might contain:

```json
{
    "name": "Pawan",
    "email": "pawan@example.com"
}
```

The backend receives this data.

```text
React
   │
   │ POST /users
   │
   │ {
   │   name: "Pawan"
   │ }
   ▼
Backend
   │
   ▼
Database
```

For example, creating a new user.

---

# 9️⃣ PUT

`PUT` is commonly used to **replace an existing resource** with a new representation.

For example:

```text
PUT /users/10
```

Request:

```json
{
    "name": "Pawan Kumar",
    "email": "pawan@example.com"
}
```

The idea is:

```text
Existing User
       ↓
Replace with
       ↓
New User Representation
```

---

# 🔟 PATCH

`PATCH` is commonly used for a **partial update**.

Suppose the user currently has:

```json
{
    "name": "Pawan",
    "email": "pawan@example.com",
    "age": 22
}
```

You only want to change the name.

You can send:

```text
PATCH /users/10
```

Body:

```json
{
    "name": "Pawan Kumar"
}
```

Conceptually:

```text
Existing User
      ↓
Change Only Name
      ↓
Updated User
```

Simple difference:

```text
PUT
↓
Replace resource representation

PATCH
↓
Partially update resource
```

---

# 1️⃣1️⃣ DELETE

`DELETE` is used to request deletion of a resource.

For example:

```text
DELETE /users/10
```

Meaning:

> Delete user with ID 10.

Flow:

```text
React
   │
   │ DELETE /users/10
   ▼
Backend
   │
   ▼
Database
   │
   ▼
User Deleted
```

---

# 1️⃣2️⃣ HTTP Methods Summary

| Method | Common Purpose     | Example            |
| ------ | ------------------ | ------------------ |
| GET    | Retrieve data      | `GET /users`       |
| POST   | Create/submit data | `POST /users`      |
| PUT    | Replace a resource | `PUT /users/10`    |
| PATCH  | Partially update   | `PATCH /users/10`  |
| DELETE | Delete resource    | `DELETE /users/10` |

Remember:

```text
GET
↓
Read

POST
↓
Create / Submit

PUT
↓
Replace

PATCH
↓
Partial Update

DELETE
↓
Delete
```

These are commonly associated with CRUD operations:

```text
C → Create → POST
R → Read   → GET
U → Update → PUT / PATCH
D → Delete → DELETE
```

---

# 1️⃣3️⃣ HTTP Status Codes

When the server responds, it sends a **status code**.

Status codes are three-digit numbers.

They tell the client what happened.

The major categories are:

```text
1xx → Informational
2xx → Success
3xx → Redirection
4xx → Client Error
5xx → Server Error
```

---

# 1️⃣4️⃣ 2xx — Success

These indicate that the request was successfully processed.

### 200 OK

The request was successful.

Example:

```text
GET /users
↓
200 OK
```

---

### 201 Created

A new resource was successfully created.

Example:

```text
POST /users
↓
201 Created
```

---

### 204 No Content

The request succeeded, but there is no response body.

Common example:

```text
DELETE /users/10
↓
204 No Content
```

---

# 1️⃣5️⃣ 3xx — Redirection

These indicate that further action may be needed to complete the request.

A common example:

### 301 Moved Permanently

The requested resource has been permanently moved to another location.

You may encounter this when dealing with redirects.

---

# 1️⃣6️⃣ 4xx — Client Errors

These generally indicate a problem with the request from the client side.

### 400 Bad Request

The server cannot process the request because the request is invalid.

Example:

```text
Invalid JSON
Missing required data
Invalid request format
```

---

### 401 Unauthorized

The request lacks valid authentication credentials.

For example:

```text
User tries to access protected resource
       ↓
No valid authentication
       ↓
401
```

---

### 403 Forbidden

The server understood the request but refuses to allow it.

For example:

```text
User is authenticated
       ↓
But doesn't have permission
       ↓
403 Forbidden
```

Simple difference:

```text
401
↓
Authentication problem

403
↓
Permission problem
```

---

### 404 Not Found

The requested resource could not be found.

Example:

```text
GET /products/999999
```

If that product doesn't exist:

```text
404 Not Found
```

---

# 1️⃣7️⃣ 5xx — Server Errors

These indicate that the server encountered an error while processing a valid request.

### 500 Internal Server Error

A general server-side error.

For example:

```text
Client
  │
  │ Request
  ▼
Backend
  │
  │ Unexpected error
  ▼
500 Internal Server Error
```

---

### 502 Bad Gateway

A server acting as a gateway or proxy received an invalid response from an upstream server.

You'll often encounter this in production environments involving reverse proxies or multiple services.

---

### 503 Service Unavailable

The server is temporarily unable to handle the request.

For example:

* Server overloaded
* Maintenance
* Temporary service issue

---

# 1️⃣8️⃣ Status Code Summary

```text
1xx
↓
Informational

2xx
↓
Success

3xx
↓
Redirection

4xx
↓
Client Error

5xx
↓
Server Error
```

Important codes:

```text
200 → OK
201 → Created
204 → No Content

301 → Moved Permanently

400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found

500 → Internal Server Error
502 → Bad Gateway
503 → Service Unavailable
```

---

# 1️⃣9️⃣ HTTP Headers

Headers provide additional information about a request or response.

Example request:

```text
GET /users HTTP/1.1
Host: example.com
Accept: application/json
Authorization: Bearer token
```

Examples of headers:

```text
Content-Type
Accept
Authorization
User-Agent
Host
Cache-Control
```

---

# 2️⃣0️⃣ Content-Type

`Content-Type` tells the receiver what type of data is being sent.

For example:

```text
Content-Type: application/json
```

means the body contains JSON.

Another example:

```text
Content-Type: text/html
```

means the content is HTML.

For a JSON API, you'll frequently see:

```text
Content-Type: application/json
```

---

# 2️⃣1️⃣ Accept Header

The `Accept` header tells the server what response formats the client can handle.

Example:

```text
Accept: application/json
```

This means the client is asking for JSON.

---

# 2️⃣2️⃣ Authorization Header

The `Authorization` header is commonly used to send authentication credentials.

For example:

```text
Authorization: Bearer <token>
```

You will learn this in detail later when we study:

```text
Authentication
Authorization
JWT
Sessions
Cookies
```

Don't worry about the token part yet.

---

# 2️⃣3️⃣ Request Body

A request body contains data sent by the client to the server.

For example:

```text
POST /users
```

Body:

```json
{
    "name": "Pawan",
    "email": "pawan@example.com"
}
```

The flow:

```text
React
   │
   │ POST /users
   │
   │ Request Body
   │ {
   │   name,
   │   email
   │ }
   ▼
Backend
```

Request bodies are commonly used with:

```text
POST
PUT
PATCH
```

---

# 2️⃣4️⃣ Response Body

The response body contains data returned by the server.

Example:

```json
{
    "id": 1,
    "name": "Pawan"
}
```

Flow:

```text
Backend
   │
   │ Response Body
   ▼
React
```

---

# 2️⃣5️⃣ Query Parameters

Query parameters are values added to a URL after `?`.

Example:

```text
/products?category=mobile
```

Here:

```text
category=mobile
```

is a query parameter.

Multiple query parameters:

```text
/products?category=mobile&sort=price
```

Conceptually:

```text
/products
     │
     └── ?category=mobile
         &sort=price
```

Query parameters are commonly used for:

* Filtering
* Searching
* Sorting
* Pagination

Example:

```text
/products?search=phone
```

Meaning:

> Search for products matching "phone".

---

# 2️⃣6️⃣ Path Parameters

Path parameters are part of the URL path and identify a specific resource.

Example:

```text
/users/10
```

Here:

```text
10
```

can represent the user's ID.

Another example:

```text
/products/50
```

Meaning:

> Product with ID 50.

Compare:

### Path Parameter

```text
/users/10
```

Specific resource.

### Query Parameter

```text
/users?role=admin
```

Filtering or additional options.

---

# 2️⃣7️⃣ Complete HTTP Request Example

Imagine your React application wants user `10`.

It sends:

```text
GET /users/10 HTTP/1.1
Host: api.example.com
Accept: application/json
```

The server processes it.

Response:

```text
HTTP/1.1 200 OK
Content-Type: application/json
```

Body:

```json
{
    "id": 10,
    "name": "Pawan",
    "role": "Developer"
}
```

Complete flow:

```text
React
  │
  │ GET /users/10
  ▼
Node.js + Express
  │
  │ Find User
  ▼
Database
  │
  │ User Data
  ▼
Node.js + Express
  │
  │ 200 OK
  │
  │ JSON
  ▼
React
```

---

# 🔥 2️⃣8️⃣ Complete CRUD API Example

Imagine you are building an Employee Management System.

You might have:

### Create Employee

```text
POST /employees
```

### Get All Employees

```text
GET /employees
```

### Get One Employee

```text
GET /employees/10
```

### Update Employee Completely

```text
PUT /employees/10
```

### Update Some Employee Fields

```text
PATCH /employees/10
```

### Delete Employee

```text
DELETE /employees/10
```

This is the foundation of building REST APIs.

---

# 🛠️ PRACTICAL — STEP 1: GET Request

Open your browser console.

Run:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("Status:", response.status);
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
```

Observe:

```text
Status: 200
```

You have made a:

```text
GET Request
```

---

# 🛠️ PRACTICAL — STEP 2: POST Request

Run:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My First Post",
        body: "Learning HTTP",
        userId: 1
    })
})
.then(response => {
    console.log("Status:", response.status);
    return response.json();
})
.then(data => {
    console.log(data);
});
```

The flow is:

```text
Browser
   │
   │ POST
   │
   │ JSON Data
   ▼
API Server
   │
   ▼
Response
```

You should get a response with a status such as:

```text
201
```

The service is designed for testing and may simulate creation rather than permanently storing the resource.

---

# 🛠️ PRACTICAL — STEP 3: DELETE Request

Try:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(response => {
    console.log("Status:", response.status);
});
```

You have now practiced:

```text
GET
POST
DELETE
```

You can later practice:

```text
PUT
PATCH
```

---

# 🧪 PRACTICAL TASK

Create a table in your notes:

| Operation     | Method | Endpoint    |
| ------------- | ------ | ----------- |
| Get all users | GET    | `/users`    |
| Get one user  | GET    | `/users/10` |
| Create user   | POST   | `/users`    |
| Replace user  | PUT    | `/users/10` |
| Update user   | PATCH  | `/users/10` |
| Delete user   | DELETE | `/users/10` |

Now create your own example for your **Expense Tracker**:

```text
GET    /expenses
GET    /expenses/10
POST   /expenses
PUT    /expenses/10
PATCH  /expenses/10
DELETE /expenses/10
```

Try to understand what each endpoint means.

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is HTTP?

> HTTP is an application-layer protocol used for communication between clients and servers on the Web.

### Q2. What is an HTTP request?

> An HTTP request is a message sent by a client to a server asking for a resource or requesting an operation.

### Q3. What is an HTTP response?

> An HTTP response is a message sent by the server back to the client containing the result of processing the request.

### Q4. What is GET?

> GET is an HTTP method commonly used to retrieve a resource.

### Q5. What is POST?

> POST is commonly used to submit data or create a new resource.

### Q6. PUT vs PATCH?

> PUT is commonly used to replace a resource representation, while PATCH is used for partial modifications.

### Q7. What is a 404 status code?

> 404 Not Found means the requested resource could not be found.

### Q8. 401 vs 403?

> 401 indicates that valid authentication credentials are missing or invalid. 403 indicates that the server understood the request but refuses to authorize access.

### Q9. What is a request body?

> A request body contains data sent by the client to the server, commonly with POST, PUT, or PATCH requests.

### Q10. What are HTTP headers?

> HTTP headers provide additional metadata and instructions about an HTTP request or response.

---

# 📝 YOUR NOTES

```text
WEB FUNDAMENTALS

9. HTTP — HYPERTEXT TRANSFER PROTOCOL
--------------------------------------

HTTP:
HyperText Transfer Protocol.

Used for communication between
clients and servers on the Web.

Basic Flow:

Client
  ↓
HTTP Request
  ↓
Server
  ↓
HTTP Response
  ↓
Client


HTTP METHODS:

GET:
Retrieve data

POST:
Create or submit data

PUT:
Replace a resource

PATCH:
Partially update a resource

DELETE:
Delete a resource


CRUD:

CREATE → POST
READ   → GET
UPDATE → PUT / PATCH
DELETE → DELETE


STATUS CODES:

1xx → Informational

2xx → Success
200 → OK
201 → Created
204 → No Content

3xx → Redirection
301 → Moved Permanently

4xx → Client Error
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found

5xx → Server Error
500 → Internal Server Error
502 → Bad Gateway
503 → Service Unavailable


REQUEST:

Method
URL
Headers
Body


RESPONSE:

Status Code
Headers
Body


QUERY PARAMETER:

/products?category=mobile

Used for:
Filtering
Searching
Sorting
Pagination


PATH PARAMETER:

/users/10

Used to identify a specific resource.


Example:

GET /users/10

POST /users

PUT /users/10

PATCH /users/10

DELETE /users/10
```

---

# ✅ CHECKPOINT

You should now be able to explain this complete flow:

```text
React Frontend
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
       │ 200 OK
       │ application/json
       ▼
React Frontend
```

And for creating data:

```text
React
   │
   │ POST /users
   │
   │ JSON Body
   ▼
Express
   │
   ▼
PostgreSQL
   │
   ▼
201 Created
   │
   ▼
React
```

The most important thing to remember is:

> **HTTP defines the communication rules. The client sends a request containing information such as a method, URL, headers, and possibly a body. The server processes it and sends a response containing a status code, headers, and possibly a body.**

---

# 🔜 NEXT TOPIC — TOPIC 10

## 🔐 HTTPS (HTTP SECURE)

Next we will learn:

```text
HTTP
  ↓
Why HTTP is not secure
  ↓
HTTPS
  ↓
Encryption
  ↓
TLS
  ↓
SSL vs TLS
  ↓
Certificates
  ↓
Public Key
  ↓
Private Key
  ↓
Certificate Authority
  ↓
HTTP vs HTTPS
  ↓
How HTTPS protects data
```

