# 📘 Node.js Notes – Using `process.argv` for Dynamic Port

---

# 🎯 What am I Learning?

Today I am learning **how to take command-line arguments using `process.argv`**.

Instead of writing a fixed port number like `4500`, I will make my server **accept the port number from the terminal**.

This makes my application **more flexible and reusable**.

---

# 🤔 Why Do We Need It?

Previously, we started the server like this:

```javascript
.listen(4500);
```

The port was **fixed**.

If we wanted another port, we had to edit the code every time.

```javascript
.listen(4500);

↓

Change Code

↓

.listen(5000);

↓

Save File

↓

Run Again
```

This is not a good practice.

Instead, we can pass the port from the terminal.

```bash
node index.js 4500
```

or

```bash
node index.js 8000
```

Now **without changing the code**, the server runs on different ports.

This is called **Dynamic Port Configuration**.

---

# 🌍 Real-Life Example

Think of a TV.

Old TV

```text
Channel is fixed.

Need to open TV

↓

Change settings

↓

Watch another channel
```

Modern TV

```text
Press Remote Button

↓

Channel Changes

↓

No Need to Open TV
```

Your program works the same way.

Instead of opening the code and changing the port,

you simply pass a different value from the terminal.

---

# 💻 Your Code

```javascript
// const arg=process.argv;
// console.log("_____,",arg[0]);

const http = require('http');

const arg = process.argv;
const port = Number(arg[2]);

http.createServer((req, resp) => {
    resp.write("testing");
    resp.end();
}).listen(port);
```

---

# 🔍 Understanding the Code

---

## Step 1️⃣ Import HTTP Module

```javascript
const http = require('http');
```

📝 **One-line:**

Imports the built-in HTTP module.

> ✔ Already learned.

---

## Step 2️⃣ `process.argv`

```javascript
const arg = process.argv;
```

📝 **One-line:**

Stores all command-line arguments in an array.

### 📖 What is `process`?

`process` is a **built-in global object** in Node.js.

It gives information about the currently running Node.js program.

Think of it as a **control center** for your application.

```text
process

│

├── argv

├── env

├── pid

├── cwd()

└── exit()
```

Today we are learning **`process.argv`**.

---

## Step 3️⃣ What is `process.argv`?

`argv` stands for

> **Argument Vector**

It stores everything you type after the `node` command.

Example

```bash
node index.js 4500
```

Node.js automatically creates an array.

```javascript
process.argv
```

becomes

```javascript
[
  "C:\\Program Files\\nodejs\\node.exe",
  "index.js",
  "4500"
]
```

### Understanding Each Index

| Index     | Value           | Meaning                                 |
| --------- | --------------- | --------------------------------------- |
| `argv[0]` | Path of Node.js | Which Node executable is running        |
| `argv[1]` | File Name       | Which JavaScript file is running        |
| `argv[2]` | User Input      | First value entered after the file name |

Visualization

```text
Terminal

node index.js 4500

      │
      ▼

process.argv

│

├── [0] → Node.js Path

├── [1] → index.js

└── [2] → 4500
```

---

## Step 4️⃣ Understanding the Commented Code

```javascript
// const arg=process.argv;
// console.log("_____,",arg[0]);
```

📝 **One-line:**

Used to understand what values are stored inside `process.argv`.

If you write

```javascript
console.log(arg);
```

Output

```javascript
[
 'C:\\Program Files\\nodejs\\node.exe',
 'index.js',
 '4500'
]
```

If you write

```javascript
console.log(arg[0]);
```

Output

```text
C:\Program Files\nodejs\node.exe
```

It tells you **where Node.js is installed**.

💡 Mostly used for learning and debugging.

---

## Step 5️⃣ Reading the Port

```javascript
const port = Number(arg[2]);
```

📝 **One-line:**

Reads the port number from the terminal and converts it into a number.

Suppose you run

```bash
node index.js 4500
```

Internally,

```javascript
arg[2]
```

contains

```javascript
"4500"
```

Notice the quotes.

It is a **string**, not a number.

```javascript
typeof arg[2]
```

Output

```text
string
```

So we convert it.

```javascript
Number(arg[2])
```

Now

```javascript
port
```

becomes

```javascript
4500
```

Type

```text
number
```

---

## Why Use `Number()`?

Without it,

```javascript
const port = arg[2];
```

Port remains a string.

Although Node.js may still accept it, converting it to a number is a **good programming practice** because a port is naturally a numeric value.

---

## Step 6️⃣ Create Server

```javascript
http.createServer((req, resp) => {
```

📝 **One-line:**

Creates a web server.

> ✔ Already learned.

---

## Step 7️⃣ Send Response

```javascript
resp.write("testing");
```

📝 **One-line:**

Writes data to the browser.

> ✔ Already learned.

---

## Step 8️⃣ End Response

```javascript
resp.end();
```

📝 **One-line:**

Ends the response.

> ✔ Already learned.

---

## Step 9️⃣ Listen on Dynamic Port

```javascript
.listen(port);
```

📝 **One-line:**

Starts the server using the port entered from the terminal.

Instead of

```javascript
.listen(4500);
```

we now write

```javascript
.listen(port);
```

where `port` comes from:

```javascript
const port = Number(arg[2]);
```

Example

Run

```bash
node index.js 3000
```

Server starts on

```text
http://localhost:3000
```

Run again

```bash
node index.js 5000
```

Server starts on

```text
http://localhost:5000
```

No code changes required.

---

# ⚙️ Complete Working Flow

```text
Terminal

↓

node index.js 4500

↓

process.argv

↓

Reads arg[2]

↓

"4500"

↓

Number()

↓

4500

↓

port Variable

↓

.listen(port)

↓

Server Starts

↓

http://localhost:4500
```

---

# 🌐 Where Is This Used?

Dynamic ports are used in almost every real-world Node.js application.

Examples:

* Development Servers
* Express.js Applications
* Production Deployment
* Cloud Platforms (Render, Railway, Heroku)
* Docker Containers

Many cloud providers automatically provide a port through an environment variable, and your application reads it instead of using a fixed value.

---

# ⭐ Main Terms to Remember

| Term             | Meaning                                                                   |
| ---------------- | ------------------------------------------------------------------------- |
| **`process`**    | Built-in object that gives information about the running Node.js program. |
| **`argv`**       | Stores command-line arguments in an array.                                |
| **Argument**     | A value passed from the terminal to the program.                          |
| **Port**         | A communication endpoint where the server listens for requests.           |
| **Dynamic Port** | A port provided at runtime instead of being hard-coded.                   |
| **`Number()`**   | Converts a string into a number.                                          |

---

# 📝 What Did I Learn Today?

✅ What `process` is.

✅ What `process.argv` is.

✅ Why `argv` is an array.

✅ Meaning of `argv[0]`, `argv[1]`, and `argv[2]`.

✅ How to read values from the terminal.

✅ Why we convert the port using `Number()`.

✅ How to create a server with a **dynamic port**.

---

# 🗺️ Node.js Roadmap

```text
Node.js Basics
      │
      ▼
HTTP Module
      │
      ▼
Creating Server
      │
      ▼
Routing
      │
      ▼
⭐ process.argv (Current Topic)
      │
      ▼
Environment Variables
      │
      ▼
File System (fs)
      │
      ▼
Express.js
```

# 🎯 Final Understanding

Earlier, your server always listened on one fixed port:

```javascript
.listen(4500);
```

Now you've made it flexible:

```text
Terminal
      │
      ▼
User enters a port
      │
      ▼
process.argv reads it
      │
      ▼
Number() converts it
      │
      ▼
.listen(port)
      │
      ▼
Server starts on that port
```

