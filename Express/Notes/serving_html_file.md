
# Express.js File Serving — Visual Notes

## 1. First Understand the Big Picture ⭐

Suppose your project looks like this:

```text
📁 my-project
│
├── 📄 server.js
│
└── 📁 html_file
    ├── 📄 home.html
    ├── 📄 login.html
    └── 📄 about.html
```

Your server receives URLs:

```text
Browser
   │
   ├── GET /
   │
   ├── GET /login
   │
   └── GET /about
   │
   ▼
Express Server
   │
   ├── "/"      → home.html
   ├── "/login" → login.html
   └── "/about" → about.html
```

### ⭐ KEY CONCEPT

> **Route decides WHICH file to send.**
> **Path finds WHERE the file is.**
> **sendFile() actually SENDS the file.**

Remember this relationship:

```text
app.get()
   ↓
Which page?
   ↓
path.resolve()
   ↓
Where is that page?
   ↓
sendFile()
   ↓
Send the page
```

---

# 2. Your Code Visually

```js
app.get("/", (req, resp) => {

    const absPath = path.resolve("html_file/home.html");

    resp.sendFile(absPath);

});
```

Think of it like this:

```text
GET "/"
   │
   ▼
app.get("/")
   │
   │  "I need the home page"
   ▼
path.resolve("html_file/home.html")
   │
   │  "Where exactly is home.html?"
   ▼
Absolute Path
   │
   ▼
resp.sendFile(absPath)
   │
   │  "Send this file"
   ▼
🌐 Browser
```

---

# 3. Three Important Things ⭐⭐⭐

This is the **most important section**.

### 🟦 1. `app.get()`

```js
app.get("/", ...)
```

**Purpose:** Handle a GET request.

It answers:

> **Which URL was requested?**

Example:

```text
/        → Home
/login   → Login
/about   → About
```

---

### 🟨 2. `path.resolve()`

```js
path.resolve("html_file/home.html")
```

**Purpose:** Find the complete/absolute path of the file.

It answers:

> **Where is the file?**

---

### 🟩 3. `sendFile()`

```js
resp.sendFile(absPath);
```

**Purpose:** Send the file to the browser.

It answers:

> **What should the server send back?**

---

# 4. The Complete Connection ⭐⭐⭐

Don't learn these separately. Connect them:

```text
              USER ENTERS URL
                    │
                    ▼
          http://localhost:3200/login
                    │
                    ▼
              Express Server
                    │
                    ▼
             app.get("/login")
                    │
             "Login requested"
                    │
                    ▼
       path.resolve("html_file/login.html")
                    │
             "Find login.html"
                    │
                    ▼
        C:\...\html_file\login.html
                    │
                    ▼
          resp.sendFile(absPath)
                    │
                    ▼
              login.html
                    │
                    ▼
                 Browser
```

### ⭐ Remember:

```text
URL → Route → Path → File → Browser
```

---

# 5. Relative Path vs Absolute Path

This is another important concept.

## Relative Path

```text
html_file/home.html
```

It gives a location **relative to the current working location**.

Visual:

```text
📁 project
│
├── server.js
│
└── 📁 html_file
    └── home.html
         ▲
         │
   html_file/home.html
```

---

## Absolute Path

Example:

```text
C:\Users\Pawan\project\html_file\home.html
```

It gives the **complete location**.

Visual:

```text
C:
 ↓
Users
 ↓
Pawan
 ↓
project
 ↓
html_file
 ↓
home.html
```

### ⭐ Easy Difference

```text
Relative Path
      ↓
"html_file/home.html"

        path.resolve()
              ↓

Absolute Path
      ↓
"C:\Users\...\html_file\home.html"
```

---

# 6. What Exactly Does `path.resolve()` Do?

You write:

```js
const absPath = path.resolve("html_file/home.html");
```

Before:

```text
html_file/home.html
```

After:

```text
C:\Users\Pawan\project\html_file\home.html
```

So:

```text
Relative Path
      │
      ▼
 path.resolve()
      │
      ▼
Absolute Path
```

### ⭐ IMPORTANT

`path.resolve()` **does NOT send the file.**

It only gives you the file's location.

```text
path.resolve()
     ↓
"Here is the file's location"
```

Then:

```js
resp.sendFile(absPath);
```

actually sends it.

---

# 7. What is `sendFile()`?

```js
resp.sendFile(absPath);
```

Think:

```text
Server
  │
  │ "I found the file."
  ▼
sendFile()
  │
  │ "Send it to the browser."
  ▼
Browser
```

### ⭐ Important Difference

```js
resp.send("Hello");
```

sends **text**.

```js
resp.send("<h1>Hello</h1>");
```

sends **HTML content directly**.

```js
resp.sendFile(absPath);
```

sends an **actual file**.

---

# 8. `req` and `resp` Visually

```js
app.get("/", (req, resp) => {
```

Think:

```text
             Browser
                │
                │ Request
                ▼
              req
                │
                ▼
          Express Server
                │
                │ Response
                ▼
              resp
                │
                ▼
             Browser
```

### `req`

**Request from client → server**

Example:

```js
req.url
req.method
```

### `resp`

**Response from server → client**

Example:

```js
resp.send()
resp.sendFile()
resp.json()
```

### ⭐ Memory Trick

```text
req  = request  → comes IN
resp = response → goes OUT
```

---

# 9. What is `__dirname`?

Imagine:

```text
📁 project
│
├── 📄 server.js
│
└── 📁 html_file
    └── home.html
```

`__dirname` means:

> **The directory where the current JavaScript file is located.**

If `server.js` is here:

```text
C:\Users\Pawan\project\server.js
```

then:

```js
__dirname
```

represents:

```text
C:\Users\Pawan\project
```

Visual:

```text
C:\Users\Pawan\project\server.js
              │
              └────── __dirname
                     ↓
              C:\Users\Pawan\project
```

---

# 10. `__dirname` + `path.join()`

If you want to build the file path:

```js
path.join(__dirname, "html_file", "home.html")
```

Visual:

```text
__dirname
   │
   ▼
project/
   │
   +── html_file/
          │
          +── home.html
```

Result:

```text
project/html_file/home.html
```

---

# 11. Why `__dirname` Doesn't Work Directly Here ⚠️

You are using:

```js
import express from "express";
```

This is **ES Module syntax**.

In ES Modules:

```js
__dirname
```

is **not automatically available**.

So:

```js
console.log(__dirname);
```

can give:

```text
ReferenceError: __dirname is not defined
```

### ⭐ Why?

There are two module systems you will encounter:

```text
CommonJS
   ↓
require()
__dirname available

ES Modules
   ↓
import
__dirname not directly available
```

---

# 12. Your Current Method vs `__dirname`

### Your current method ✅

```js
const absPath = path.resolve("html_file/home.html");
resp.sendFile(absPath);
```

Flow:

```text
html_file/home.html
        ↓
   path.resolve()
        ↓
   Absolute Path
        ↓
     sendFile()
```

You **don't need `__dirname`** here.

---

### Using `__dirname`

You would need extra ES Module setup:

```js
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Then:

```js
const filePath = path.join(
    __dirname,
    "html_file",
    "home.html"
);

resp.sendFile(filePath);
```

---

# 13. `path.resolve()` vs `__dirname`

Don't think they are the same thing.

```text
__dirname
   ↓
Tells you:
"Where is my current JS file's folder?"

path.resolve()
   ↓
Tells you:
"What is the absolute path of this location?"
```

### Example

```js
__dirname
```

could represent:

```text
C:\project
```

while:

```js
path.resolve("html_file/home.html")
```

could produce:

```text
C:\project\html_file\home.html
```

---

# 14. `path.join()` vs `path.resolve()`

### `path.join()`

Think:

> **Join pieces together.**

```js
path.join(__dirname, "html_file", "home.html");
```

```text
project
  +
html_file
  +
home.html
  ↓
project/html_file/home.html
```

### `path.resolve()`

Think:

> **Resolve the location into an absolute path.**

```js
path.resolve("html_file/home.html");
```

```text
html_file/home.html
        ↓
C:\...\project\html_file\home.html
```

### ⭐ Memory

```text
join()    → JOIN pieces
resolve() → ABSOLUTE location
```

---

# 15. All Important Concepts Together ⭐⭐⭐

```text
                    🌐 Browser
                        │
                        │ GET /login
                        ▼
                 ┌─────────────┐
                 │   Express   │
                 └─────────────┘
                        │
                        ▼
                app.get("/login")
                        │
                        │
                        ▼
            "Which page do I need?"
                        │
                        ▼
       path.resolve("html_file/login.html")
                        │
                        │
                        ▼
              📍 Absolute Path
                        │
                        ▼
               resp.sendFile()
                        │
                        ▼
                  📄 login.html
                        │
                        ▼
                    🌐 Browser
```

---

# ⭐ 16. Final Cheat Sheet

```text
┌─────────────────────────────────────────┐
│              EXPRESS.JS                 │
├─────────────────────────────────────────┤
│ app.get()                                │
│ → Handles GET request                   │
│ → Decides which URL/route               │
│                                         │
│ path                                     │
│ → Node.js module for file paths         │
│                                         │
│ Relative Path                            │
│ → html_file/home.html                   │
│                                         │
│ Absolute Path                            │
│ → C:\...\html_file\home.html            │
│                                         │
│ path.resolve()                           │
│ → Converts/resolves to absolute path    │
│                                         │
│ path.join()                              │
│ → Joins path pieces                     │
│                                         │
│ __dirname                               │
│ → Current JS file's directory           │
│ → Not directly available in ES Modules  │
│                                         │
│ sendFile()                               │
│ → Sends actual file to browser          │
│                                         │
│ req                                      │
│ → Request coming from browser           │
│                                         │
│ resp                                     │
│ → Response going to browser             │
│                                         │
│ app.listen()                             │
│ → Starts server                          │
└─────────────────────────────────────────┘
```

## 🔥 The 4 things to remember most

```text
1. app.get()       → Which URL?
2. path.resolve()  → Where is the file?
3. sendFile()      → Send the file
4. app.listen()    → Start the server
```

And the entire topic can be remembered with just:

> **URL → Route → Path → File → Response → Browser**
