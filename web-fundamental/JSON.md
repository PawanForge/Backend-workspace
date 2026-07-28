# 🟢 TOPIC 13 — JSON

JSON is **very important for your backend journey** because your React frontend and Node.js backend will exchange data using JSON very frequently.

---

## 1️⃣ What is JSON?

**JSON** stands for:

> **JavaScript Object Notation**

JSON is a lightweight text format used to **store and exchange structured data**.

Example:

```json
{
  "name": "Pawan",
  "age": 22,
  "role": "Developer"
}
```

A common API flow is:

```text
React
  ↓
HTTP Request
  ↓
Node.js API
  ↓
JSON Response
  ↓
React
```

---

# 2️⃣ JSON Object

A JSON object uses:

```text
{
  "key": "value"
}
```

Example:

```json
{
  "name": "Pawan",
  "age": 22
}
```

Here:

```text
name → key
Pawan → value

age → key
22 → value
```

### Important

JSON keys must be written using **double quotes**:

```json
{
  "name": "Pawan"
}
```

This is valid JSON.

---

# 3️⃣ JSON Data Types

JSON supports these main data types:

```text
String
Number
Boolean
Object
Array
null
```

Example:

```json
{
  "name": "Pawan",
  "age": 22,
  "isDeveloper": true,
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": {
    "city": "Lucknow"
  },
  "middleName": null
}
```

---

# 4️⃣ JSON String

Strings use double quotes.

```json
{
  "name": "Pawan"
}
```

Correct:

```text
"Pawan"
```

Not valid JSON:

```text
'Pawan'
```

---

# 5️⃣ JSON Number

Numbers don't use quotes.

```json
{
  "age": 22,
  "salary": 50000
}
```

Correct:

```text
22
```

Not:

```text
"22"
```

Because `"22"` is a string.

---

# 6️⃣ JSON Boolean

Boolean values are:

```text
true
false
```

Example:

```json
{
  "isLoggedIn": true,
  "isAdmin": false
}
```

Don't use quotes:

```json
{
  "isLoggedIn": "true"
}
```

That is a string, not a Boolean.

---

# 7️⃣ JSON Array

An array uses square brackets:

```text
[]
```

Example:

```json
{
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]
}
```

Array of numbers:

```json
{
  "marks": [80, 90, 85]
}
```

---

# 8️⃣ Nested JSON Object

JSON objects can contain other objects.

Example:

```json
{
  "name": "Pawan",
  "address": {
    "city": "Lucknow",
    "country": "India"
  }
}
```

Structure:

```text
User
 ├── name
 └── address
       ├── city
       └── country
```

This is very common in API responses.

---

# 9️⃣ JSON Array of Objects

This is extremely common in APIs.

Example:

```json
[
  {
    "id": 1,
    "name": "Pawan"
  },
  {
    "id": 2,
    "name": "Rahul"
  }
]
```

The API returns multiple users.

```text
Users
 ├── User 1
 │     ├── id
 │     └── name
 │
 └── User 2
       ├── id
       └── name
```

---

# 🔟 JSON vs JavaScript Object

This is important.

### JavaScript Object

```javascript
const user = {
  name: "Pawan",
  age: 22
};
```

### JSON

```json
{
  "name": "Pawan",
  "age": 22
}
```

Main difference:

```text
JavaScript Object
↓
Used directly inside JavaScript code

JSON
↓
Text-based data format
↓
Used for data exchange
```

JSON requires double-quoted keys.

---

# 1️⃣1️⃣ JSON.stringify()

`JSON.stringify()` converts a JavaScript value into a JSON string.

Example:

```javascript
const user = {
  name: "Pawan",
  age: 22
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
```

Output:

```text
{"name":"Pawan","age":22}
```

Flow:

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
JSON String
```

---

# 1️⃣2️⃣ JSON.parse()

`JSON.parse()` converts a JSON string into a JavaScript value.

Example:

```javascript
const jsonData = '{"name":"Pawan","age":22}';

const user = JSON.parse(jsonData);

console.log(user.name);
```

Output:

```text
Pawan
```

Flow:

```text
JSON String
      ↓
JSON.parse()
      ↓
JavaScript Object
```

Remember:

```text
Object → JSON String
↓
JSON.stringify()

JSON String → Object
↓
JSON.parse()
```

---

# 1️⃣3️⃣ JSON in Your Full Stack Application

Suppose React sends data to your Node.js backend.

### React

```javascript
const user = {
  name: "Pawan",
  age: 22
};
```

Request:

```text
POST /api/users
```

JSON body:

```json
{
  "name": "Pawan",
  "age": 22
}
```

Backend processes it.

Response:

```json
{
  "success": true,
  "message": "User created",
  "user": {
    "id": 1,
    "name": "Pawan",
    "age": 22
  }
}
```

Flow:

```text
React
  │
  │ JSON Request
  ▼
Node.js + Express
  │
  ▼
Database
  │
  ▼
Node.js + Express
  │
  │ JSON Response
  ▼
React
```

This is something you'll do constantly when building full-stack applications.

---

# 🛠️ PRACTICAL

Run this JavaScript:

```javascript
const user = {
  name: "Pawan",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript", "React"]
};

const jsonData = JSON.stringify(user);

console.log(jsonData);

const convertedUser = JSON.parse(jsonData);

console.log(convertedUser.name);
console.log(convertedUser.skills);
```

Observe:

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
JSON String
      ↓
JSON.parse()
      ↓
JavaScript Object
```

---

# 📝 SHORT NOTES

```text
JSON
--------------------------------

JSON:
JavaScript Object Notation.

Used for:
Data exchange between applications.

Common in:
REST APIs
Frontend ↔ Backend communication

JSON Data Types:

String
Number
Boolean
Object
Array
null


Example:

{
  "name": "Pawan",
  "age": 22,
  "isDeveloper": true,
  "skills": ["HTML", "CSS", "React"]
}


JavaScript Object
      ↓
JSON.stringify()
      ↓
JSON String


JSON String
      ↓
JSON.parse()
      ↓
JavaScript Object


Important:

JSON keys use double quotes.

"age": 22
↓
Number

"age": "22"
↓
String
```

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is JSON?

> JSON is a lightweight text-based format used to exchange structured data between applications.

### Q2. What is JSON.stringify()?

> It converts a JavaScript value into a JSON string.

### Q3. What is JSON.parse()?

> It parses a JSON string and converts it into a JavaScript value.

### Q4. JSON vs JavaScript Object?

> A JavaScript object is a data structure used directly in JavaScript, while JSON is a text-based format commonly used for exchanging data between systems.

---

# ✅ CHECKPOINT

You should remember these three things:

```text
1. JSON
↓
Data exchange format

2. JSON.stringify()
↓
JavaScript Object → JSON String

3. JSON.parse()
↓
JSON String → JavaScript Object
```

And the full-stack flow:

```text
React
  ↓
JSON Request
  ↓
REST API
  ↓
Node.js Backend
  ↓
Database
  ↓
JSON Response
  ↓
React
```

---

# 🔜 NEXT TOPIC — POSTMAN & API TESTING

Before writing your own Node.js backend, you should learn how to **test APIs independently of React**.

We'll learn:

```text
What is Postman?
Create Request
GET
POST
PUT
PATCH
DELETE
Headers
JSON Body
Status Codes
Test REST APIs
```

After that, we'll start your **actual backend development**:

```text
Node.js
   ↓
npm
   ↓
Modules
   ↓
Express.js
   ↓
Routes
   ↓
Controllers
   ↓
Middleware
   ↓
REST API
```
