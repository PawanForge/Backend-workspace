# Express.js — External Middleware Notes

Your code is using **Morgan**, which is an example of **external (third-party) middleware**.

---

## 1. What is Middleware?

Middleware is a function that comes **between the request and the final response**.

### Basic flow

```text
Client
  ↓
Request
  ↓
Middleware
  ↓
Route Handler
  ↓
Response
```

For example:

```js
app.use(morgan("dev"));
```

When a request comes to the server:

```text
GET /
 ↓
Morgan middleware
 ↓
app.get("/")
 ↓
"Home Page"
```

---

# 2. External / Third-Party Middleware

**External middleware** means middleware that is **not built into Express**.

We install it using npm and then import/use it in our application.

### General pattern

```js
import middlewareName from "package-name";

app.use(middlewareName());
```

### Example

```js
import morgan from "morgan";

app.use(morgan("dev"));
```

Here:

* `morgan` → external middleware
* `morgan("dev")` → creates/configures the middleware
* `app.use()` → registers it with Express

---

# 3. Morgan Middleware

**Morgan** is a popular external middleware used for **HTTP request logging**.

It tells us information about requests received by our server.

### Installation

```bash
npm install morgan
```

### Import

```js
import morgan from "morgan";
```

### Use

```js
app.use(morgan("dev"));
```

---

## 4. Why Do We Use Morgan?

Without Morgan:

```text
Browser → Server → Response
```

We don't automatically see useful request information in the terminal.

With Morgan:

```text
Browser
   ↓
GET /users
   ↓
Morgan
   ↓
Route Handler
   ↓
Response
```

Morgan prints information such as:

```text
GET /users 200
GET / 200
GET /wait 200
```

The exact output also includes the response time and other request details.

---

# ⭐ MOSTLY USED EXTERNAL MIDDLEWARE

| Middleware             | Main Use                           |
| ---------------------- | ---------------------------------- |
| **Morgan**             | HTTP request logging               |
| **cors**               | Allows cross-origin requests       |
| **helmet**             | Adds security-related HTTP headers |
| **cookie-parser**      | Reads cookies easily               |
| **express-session**    | Session management                 |
| **compression**        | Compresses HTTP responses          |
| **multer**             | File uploads                       |
| **jsonwebtoken (JWT)** | Authentication/token handling      |
| **express-rate-limit** | Limits repeated requests           |
| **dotenv**             | Loads environment variables        |

> **Important:** Not all of these are middleware in exactly the same way. Some are packages commonly used *with* Express applications for related functionality.

---

# 5. `app.use()` — Important Concept

```js
app.use(morgan("dev"));
```

`app.use()` tells Express:

> "Use this middleware for incoming requests."

If it is written before your routes:

```js
app.use(morgan("dev"));

app.get("/", (req, resp) => {
    resp.send("Home Page");
});
```

Morgan runs before the route handler.

### Logic

```text
Request
   ↓
app.use(morgan("dev"))
   ↓
app.get("/")
   ↓
Response
```

---

# 6. Your Complete Code Explained

```js
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, resp) => {
    resp.send("Home Page");
});

app.get("/users", (req, resp) => {
    resp.send("User page");
});

app.get("/wait", (req, resp) => {
    setTimeout(() => {
        resp.send("result after 1 sec");
    }, 1000);
});

app.listen(3200);
```

### Connection between each part

```text
express
   ↓
Creates Express application
   ↓
const app = express()

morgan
   ↓
External middleware
   ↓
app.use(morgan("dev"))

Routes
   ↓
/       → Home Page
/users  → User page
/wait   → response after 1 second

app.listen(3200)
   ↓
Starts server
```

---

# 7. What Happens When `/users` Is Called?

Suppose you open:

```text
http://localhost:3200/users
```

### Step-by-step

```text
1. Browser sends GET /users
              ↓
2. Morgan receives the request
              ↓
3. Morgan logs the request
              ↓
4. Express checks routes
              ↓
5. /users route matches
              ↓
6. resp.send("User page")
              ↓
7. Browser receives "User page"
```

---

# 8. Middleware Can Do Different Jobs

Middleware is not necessarily responsible for sending the final response.

It can:

```text
Request
   ↓
[Middleware]
   ↓
Check / modify / log / authenticate
   ↓
next()
   ↓
[Another Middleware]
   ↓
next()
   ↓
[Route]
   ↓
Response
```

For example, a custom middleware:

```js
app.use((req, res, next) => {
    console.log("Request received");
    next();
});
```

`next()` means:

> "I have finished my middleware work. Continue to the next middleware/route."

---

# 9. External vs Built-in vs Custom Middleware

This is **very important for exams**.

### 🟢 Built-in Middleware

Provided by Express itself.

Example:

```js
app.use(express.json());
```

Used to parse JSON request bodies.

---

### 🟡 Custom Middleware

Middleware that **we write ourselves**.

```js
app.use((req, res, next) => {
    console.log("Hello Middleware");
    next();
});
```

---

### 🔵 External / Third-Party Middleware

Installed from npm.

Example:

```bash
npm install morgan
```

```js
import morgan from "morgan";

app.use(morgan("dev"));
```

### Easy memory trick

```text
Express gives it       → Built-in
We write it            → Custom
npm package gives it   → External
```

---

# 10. Exam Definition ⭐

> **External middleware in Express.js is middleware provided by third-party npm packages. It is installed separately and used in an Express application to perform tasks such as logging, security, CORS handling, file uploads, sessions, and request processing.**

### Example:

```js
import morgan from "morgan";

app.use(morgan("dev"));
```

**Morgan is an external middleware used for HTTP request logging.**

---

# 11. Key Points to Remember ⭐

> **External Middleware**
>
> * Comes from a third-party npm package.
> * Usually installed using `npm install`.
> * Imported into the application.
> * Registered using `app.use()`.
> * Can execute before route handlers.
> * Can inspect/modify requests and responses.
> * Middleware can call `next()` to continue the request chain.
> * Morgan is a common example.
> * `morgan("dev")` logs HTTP requests in a developer-friendly format.

### One-line logic

```text
Request → External Middleware → Route → Response
```

### Your code's main concept

```js
import morgan from "morgan";

app.use(morgan("dev"));
```

**This is the key example of external middleware in your program.**
