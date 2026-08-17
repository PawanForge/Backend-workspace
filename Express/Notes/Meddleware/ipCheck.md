
## `ipCheck` Middleware

```js
function ipCheck(req, resp, next) {
    const ip = req.socket.remoteAddress;
    console.log(ip);

    if (ip.includes('10.128.175.170')) {
        resp.send("Alert! You can not access this page");
    } else {
        next();
    }
}

app.use(ipCheck);
```

### 1. `function ipCheck(...)`

```js
function ipCheck(req, resp, next)
```

We are creating a **middleware function** called `ipCheck`.

Its job is:

> **Check the user's IP address before allowing access.**

---

### 2. `req`

```js
req
```

`req` means **request**.

It contains information about the person/browser making the request.

Think:

> **`req` = information coming IN to the server**

---

### 3. `resp`

```js
resp
```

`resp` means **response**.

It is used to send something back to the user.

Think:

> **`resp` = information going OUT from the server**

---

### 4. `next`

```js
next
```

`next()` means:

> **"Everything is okay. Continue to the next step."**

It allows the request to continue to the next middleware or route.

---

## 5. Getting the IP address

```js
const ip = req.socket.remoteAddress;
```

This line gets the **IP address of the client** that connected to the server.

Let's break it down:

### `const`

```js
const ip
```

`const` creates a variable whose value you don't plan to reassign.

Here we create a variable called `ip`.

### `ip`

```js
const ip
```

`ip` is simply the variable name.

We are storing the user's IP address inside it.

### `req.socket`

```js
req.socket
```

This gives information about the **network connection** used for the request.

### `.remoteAddress`

```js
req.socket.remoteAddress
```

This gives the **remote/client IP address** for that connection.

So:

```js
const ip = req.socket.remoteAddress;
```

basically means:

> **"Get the user's IP address and store it in `ip`."**

---

## 6. `console.log(ip)`

```js
console.log(ip);
```

This prints the IP address in your **terminal/console**.

For example, you might see:

```text
10.128.175.170
```

It is mainly useful for **checking/debugging**.

---

## 7. `if`

```js
if (...)
```

`if` means:

> **"Check this condition."**

Here we want to check:

> "Is this IP address blocked?"

---

## 8. `ip.includes(...)`

```js
ip.includes('10.128.175.170')
```

`includes()` checks whether a string **contains** a particular value.

For example:

```js
"hello world".includes("hello")
```

gives:

```text
true
```

In your code:

```js
ip.includes('10.128.175.170')
```

means:

> **"Does the IP address contain `10.128.175.170`?"**

If yes → `true`.

If no → `false`.

---

## 9. `resp.send()`

```js
resp.send("Alert! You can not access this page");
```

This sends a message to the user.

So if the IP is blocked, the user gets:

```text
Alert! You can not access this page
```

And the request **does not continue to the next route**.

---

## 10. `else`

```js
else {
    next();
}
```

`else` runs when the `if` condition is **false**.

In simple words:

> **If the IP is NOT blocked, allow the request to continue.**

---

## 11. `next()`

```js
next();
```

This tells Express:

> **"This IP is okay. Continue."**

For example:

```js
app.use(ipCheck);

app.get("/home", (req, resp) => {
    resp.send("Welcome!");
});
```

If the IP is allowed:

```text
Request
   ↓
ipCheck
   ↓
Is IP blocked?
   ↓
  NO
   ↓
next()
   ↓
/home
   ↓
Welcome!
```

If the IP is blocked:

```text
Request
   ↓
ipCheck
   ↓
Is IP blocked?
   ↓
 YES
   ↓
Alert!
   ↓
STOP
```

---

## 12. `app.use(ipCheck)`

```js
app.use(ipCheck);
```

This tells Express:

> **"Use the `ipCheck` middleware for requests."**

So the `ipCheck` function runs before the routes that follow it.

---

# ⭐ Whole code in very simple English

```js
function ipCheck(req, resp, next) {
```

👉 Create a middleware called `ipCheck`.

```js
const ip = req.socket.remoteAddress;
```

👉 Get the user's IP address.

```js
console.log(ip);
```

👉 Show the IP address in the terminal.

```js
if (ip.includes('10.128.175.170')) {
```

👉 Check if the IP is the blocked IP.

```js
resp.send("Alert! You can not access this page");
```

👉 If blocked → show an alert/message.

```js
} else {
    next();
}
```

👉 If not blocked → allow the request to continue.

```js
app.use(ipCheck);
```

👉 Tell Express to use this middleware.

### 🧠 One-line memory trick

**`ipCheck` = Get IP → Check IP → Block or `next()`**

> ⚠️ Small practical note: `remoteAddress` can sometimes be an IPv6-formatted address (for example `::ffff:10.128.175.170`), which is one reason `includes()` may appear to work here. In a real application, IP handling should be normalized/validated rather than relying only on `includes()`.
