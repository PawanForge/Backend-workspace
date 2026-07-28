# 🟢 TOPIC 11 — URL (UNIFORM RESOURCE LOCATOR)

A **URL** is the address used to locate a resource on the Internet.

Example:

```text
https://www.example.com:443/products?id=10#details
```

Let's break it down.

---

## 1️⃣ URL Structure

```text
https://www.example.com:443/products?id=10#details
   │          │       │       │       │
Protocol    Domain   Port    Path    Query
                                      │
                                   Fragment
```

### 1. Protocol / Scheme

```text
https://
```

Tells the browser which protocol to use.

Common examples:

```text
http://
https://
```

---

### 2. Domain

```text
www.example.com
```

Identifies the website/server you want to communicate with.

---

### 3. Port

```text
:443
```

Identifies a specific network service.

Common ports:

```text
HTTP  → 80
HTTPS → 443
```

During development, you often see:

```text
localhost:3000
localhost:5000
localhost:8000
```

For example:

```text
http://localhost:3000
```

Here:

```text
localhost
    ↓
Your computer

3000
    ↓
Port where your application is running
```

---

### 4. Path

```text
/products
```

Identifies the resource or route being requested.

Examples:

```text
/users
/products
/products/10
```

In a backend API:

```text
GET /users
```

might return all users.

```text
GET /users/10
```

might return user `10`.

---

### 5. Query Parameters

```text
?id=10
```

Query parameters start after `?`.

Multiple parameters use `&`:

```text
/products?category=mobile&sort=price
```

Here:

```text
category=mobile
sort=price
```

Query parameters are commonly used for:

* Searching
* Filtering
* Sorting
* Pagination

Example:

```text
/products?search=phone
```

---

### 6. Fragment

```text
#details
```

A fragment identifies a specific section of a resource.

For example:

```text
example.com/page#contact
```

It can point the browser to the `contact` section of the page.

**Important:** The fragment is generally handled by the browser and is not sent to the server as part of the HTTP request.

---

# 🔥 Complete Example

Consider:

```text
https://www.example.com:443/products?id=10#details
```

| Part     | Value             | Purpose                |
| -------- | ----------------- | ---------------------- |
| Protocol | `https`           | Communication protocol |
| Domain   | `www.example.com` | Website/server address |
| Port     | `443`             | Network service        |
| Path     | `/products`       | Requested resource     |
| Query    | `id=10`           | Additional parameters  |
| Fragment | `#details`        | Specific page section  |

---

# 🛠️ PRACTICAL

Open this in your browser:

```text
https://jsonplaceholder.typicode.com/users/1
```

Identify:

```text
Protocol → https
Domain   → jsonplaceholder.typicode.com
Path     → /users/1
```

Now try:

```text
https://jsonplaceholder.typicode.com/users?name=Leanne
```

Identify:

```text
Path  → /users
Query → name=Leanne
```

You can also test the URL using JavaScript:

```javascript
const url = new URL(
  "https://example.com/products?id=10"
);

console.log(url.protocol);
console.log(url.hostname);
console.log(url.port);
console.log(url.pathname);
console.log(url.search);
```

---

# 📝 SHORT NOTES

```text
URL
--------------------------------

URL:
Uniform Resource Locator.

Used to locate a resource on the Internet.

Example:

https://www.example.com:443/products?id=10#details

https://
↓
Protocol

www.example.com
↓
Domain

:443
↓
Port

/products
↓
Path

?id=10
↓
Query Parameter

#details
↓
Fragment


Common Ports:

HTTP  → 80
HTTPS → 443

Query:
Used for filtering, searching,
sorting, pagination, etc.

Path:
Identifies a resource or route.

Fragment:
Identifies a section of a resource
and is generally handled by the browser.
```

---

# 🎯 INTERVIEW QUESTIONS

**Q1. What is a URL?**

> URL stands for Uniform Resource Locator. It specifies the location of a resource and the protocol used to access it.

**Q2. What is the difference between a path and query parameter?**

> A path identifies a resource or route, while query parameters provide additional options such as filtering, searching, or sorting.

Example:

```text
/users/10
```

Path parameter:

```text
10
```

Query parameter:

```text
/users?role=admin
```

**Q3. What is a port?**

> A port identifies a specific network service or application endpoint on a host.

---

# ✅ CHECKPOINT

You should now understand:

```text
https://example.com/products?id=10
   │         │       │      │
Protocol  Domain    Path   Query
```

This is especially important for backend development because you'll frequently work with URLs like:

```text
GET    /api/users
GET    /api/users/10
POST   /api/users
PATCH  /api/users/10
DELETE /api/users/10
```

---

# 🔜 NEXT TOPIC — REST API

This is where your Web Fundamentals start connecting directly to your **React + Node.js backend**.

We'll learn:

```text
What is an API?
What is REST?
REST API
Client ↔ Server
Resources
Endpoints
CRUD
HTTP Methods
JSON
API Testing
Practical API request
```

