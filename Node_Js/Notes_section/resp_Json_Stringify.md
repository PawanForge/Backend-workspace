
# 📘 Topic Name

## 🎯 Why are we learning this?

(Simple explanation)

---

## 📌 Quick Revision (Only if needed)

✔ Already learned `http` module

✔ Already learned `createServer()`

✔ Already learned `resp.write()` and `resp.end()`

---

## 💻 Your Code

```javascript
const http = require('http');

const userData = [
    {
        name:'Pawan',
        age:'20',
        email:'pawan@test.com'
    },
    {
        name:'Pranav',
        age:'21',
        email:'pranav@test.com'
    },
    {
        name:'Shivam',
        age:'22',
        email:'shivam@test.com'
    }
];

http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(9300);
```

---

## 🔍 Code Breakdown (Using Your Code)

### 1️⃣ Import HTTP Module

```javascript
const http = require('http');
```

**📝 One-line:** Imports the built-in HTTP module to create a web server.

> 📌 **Revision:** We already learned this in the previous topic.

---

### 2️⃣ Create User Data

```javascript
const userData = [
```

**📝 One-line:** Creates an array that stores multiple user records.

**📖 Explanation:**

* `userData` is an array.
* Each item inside the array is an object.
* Each object represents one user with `name`, `age`, and `email`.

---

### 3️⃣ Create Server

```javascript
http.createServer((req, resp) => {
```

**📝 One-line:** Creates a server that runs whenever a client sends a request.

> 📌 **Revision:** Already covered in the previous topic.

---

### 4️⃣ Set Response Header

```javascript
resp.setHeader("Content-Type", "application/json");
```

**📝 One-line:** Tells the client that the response contains JSON data.

**📖 Explanation:**
Explain only the new concept here (`application/json`).

---

### 5️⃣ Convert and Send Data

```javascript
resp.write(JSON.stringify(userData));
```

**📝 One-line:** Converts the JavaScript array into a JSON string and prepares it to send.

**📖 Explanation:**
Explain `JSON.stringify()` deeply because it is the new concept.

---

### 6️⃣ End Response

```javascript
resp.end();
```

**📝 One-line:** Finishes the response and sends all data to the client.

> 📌 **Revision:** Already explained in the previous topic.

---

## ⚙️ Execution Flow

(Flow diagram)

---

## 🌐 Real Project Usage

(Where this concept is used)

---

## ⚠️ Common Mistakes

(Only mistakes related to the current topic)

---

## 💡 Memory Trick

(Simple shortcut)

---

## 📝 Topic Summary

---

## 🗺️ Roadmap Position

(Current topic highlighted)

---