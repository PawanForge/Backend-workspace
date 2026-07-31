

# 📘 Node.js – Your First HTTP Server

## Before Writing Code

Imagine you open Chrome and type

```text
http://localhost:4800
```

What actually happens?

Most beginners think,

> "The browser directly shows the webpage."

But that's **not true.**

The browser first asks someone,

> "Can you give me this page?"

Who answers?

👉 **The Server.**

Without a server, the browser has nothing to display.

---

## Real-Life Example

Imagine you visit a restaurant.

```text
You
 │
 ▼
Order Food
 │
 ▼
Waiter takes order
 │
 ▼
Kitchen prepares food
 │
 ▼
Waiter brings food
```

Now compare it with Node.js.

```text
Browser
 │
 ▼
Sends Request
 │
 ▼
Node.js Server
 │
 ▼
Processes Request
 │
 ▼
Sends Response
 │
 ▼
Browser Displays Result
```

Here,

* Browser = Customer
* Node.js Server = Kitchen
* Request = Order
* Response = Food

This is exactly what every website does.

---

# Now Let's Create Our Own Server

```javascript
const http = require("http");
```

### Question

Where did **http** come from?

Did we install it?

No.

It is already available inside Node.js.

Node.js provides many built-in modules.

```text
Node.js

├── fs
├── os
├── path
├── events
└── http
```

The **http module** knows how to create a web server.

So before creating a server, we first import it.

```javascript
const http = require("http");
```

Think of it as saying:

> "Node.js, I want to use your HTTP tools."

---

# Step 2 – Create the Server

```javascript
http.createServer((req, resp)=>{
```

Now we are telling Node.js,

> "Please create a server."

But notice something.

Inside `createServer()`, we passed a function.

Why?

Because the server doesn't know **when** someone will visit our website.

Maybe after

* 2 seconds
* 2 minutes
* 2 hours

So the server simply waits.

```text
Program Starts

↓

Server Created

↓

Waiting...

↓

Waiting...

↓

Waiting...
```

Suddenly...

Someone opens

```text
http://localhost:4800
```

Now Node.js says,

> "Someone has arrived!"

and immediately executes this function.

```javascript
(req, resp)=>{

}
```

This function runs **every single time** a request comes.

---

# Step 3 – What is `req`?

When someone visits your website,

they also send information.

Example:

```text
http://localhost:4800/about
```

Node.js stores everything about that visitor inside

```javascript
req
```

Think of `req` as a **Visitor Information Card**.

```text
Visitor Information

URL

Method

Headers

Browser Details
```

For example,

```javascript
console.log(req.url);
```

Output

```text
/about
```

So,

**req = Information coming FROM the browser.**

---

# Step 4 – What is `resp`?

Now the browser is waiting.

It asked,

> "Please give me a webpage."

How do we answer?

Using

```javascript
resp
```

Think of `resp` as a **Reply Box**.

Everything we put inside it will go back to the browser.

---

# Step 5 – Send Some Data

```javascript
resp.write("<h1>Hello Your Brother Here</h1>");
```

Here we are writing HTML.

Notice the `<h1>` tag.

Because it is HTML,

the browser doesn't display

```text
<h1>Hello</h1>
```

Instead it understands,

> "Oh! This is a Heading."

So it displays

# Hello Your Brother Here

---

You can even send multiple pieces.

```javascript
resp.write("<h1>Welcome</h1>");

resp.write("<p>Learning Node.js</p>");

resp.write("<h3>Pawan</h3>");
```

Think of `write()` as adding pages into an envelope.

```text
Envelope

↓

Page 1 Added

↓

Page 2 Added

↓

Page 3 Added
```

The envelope is **still open**.

Nothing has been delivered yet.

---

# Step 6 – Finish the Response

Now we close the envelope.

```javascript
resp.end("Hello");
```

`end()` means

> "I'm done sending data."

Now Node.js sends everything to the browser.

```text
write()

↓

write()

↓

write()

↓

end()

↓

Browser Receives Everything
```

Without `end()`

the browser keeps waiting forever because it thinks

> "Maybe more data is coming."

---

# Step 7 – Start the Server

Finally,

```javascript
.listen(4800);
```

This tells Node.js

> "Start listening on Port 4800."

Now open

```text
http://localhost:4800
```

The browser and server can communicate.

---

# Complete Story of the Program

```text
You run

node server.js

        │
        ▼

Node.js loads the HTTP module

        │
        ▼

A server is created

        │
        ▼

The server starts listening on Port 4800

        │
        ▼

You open Chrome

http://localhost:4800

        │
        ▼

Chrome sends a request

        │
        ▼

Node.js receives the request

        │
        ▼

The callback function runs

        │
        ▼

req stores the visitor's information

        │
        ▼

resp.write() prepares the response

        │
        ▼

resp.end() finishes the response

        │
        ▼

The browser displays the webpage
```

---

# 🧠 One-Line Memory Trick

| Keyword          | Remember it as                           |
| ---------------- | ---------------------------------------- |
| `require()`      | Bring a module into the project          |
| `http`           | Module used to create web servers        |
| `createServer()` | Creates a server that waits for requests |
| `req`            | Information coming **from** the browser  |
| `resp`           | Information going **to** the browser     |
| `write()`        | Add data to the response                 |
| `end()`          | Finish and send the response             |
| `listen()`       | Start the server on a specific port      |

## 📚 I recommend using this teaching style for all your Node.js notes:

* Start with **"Why do we need this?"**
* Explain with a **real-life analogy**.
* Introduce **one new concept at a time**.
* Show a **visual flow diagram**.
* Explain the **code line by line**.
* End with **execution flow**, **memory tricks**, **common interview questions**, and **where the topic fits in the Node.js roadmap**.

