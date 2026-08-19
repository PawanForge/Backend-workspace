# Express.js Error Handling — Short & Easy Notes

## 1. Why Error Middleware?

**Error middleware** is used to:

> **Handle errors in one common place and send a proper response to the user.**

### Real Use

If an error occurs in `/login`, `/product`, `/payment`, `/order`, etc.:

```text
Different Routes
      ↓
 next(error)
      ↓
Common Error Handler
      ↓
  Response
```

👉 **Multiple errors can be handled by one common error handler.**

---

## 2. Creating an Error

```js
app.get("/error", (req, res, next) => {

    const error = new Error("Something went wrong");
    error.status = 404;

    next(error);
});
```

### What happens?

```text
new Error("Something went wrong")
        ↓
   Error object created
        ↓
error.status = 404
        ↓
next(error)
        ↓
Sent to Error Handler
```

### ⭐ Important

```text
next()        → Normal flow
next(error)   → Error flow
```

🧠 **Easy hint:**
`next(error)` means:

> **"There is a problem. Send it to the error handler."**

---

## 3. Error-Handling Middleware ⭐

```js
app.use((error, req, res, next) => {

    res.status(error.status || 500)
       .send(error.message);

});
```

This is called **Error-Handling Middleware**.

### Special Point

Normal middleware:

```js
(req, res, next)
```

Error-handling middleware:

```js
(error, req, res, next)
```

👉 It has **4 parameters**.
👉 The **first parameter is `error`**.

---

## 4. `error.status || 500`

```js
res.status(error.status || 500)
```

Meaning:

```text
Is error.status available?
        ↓
      YES → Use it
        ↓
       NO → Use 500
```

Example:

```js
error.status = 404;
```

Response status:

```text
404
```

If no status is provided:

```text
500 Internal Server Error
```

### Easy Meaning

> **Known error → use its status**
> **Unknown error → use 500**

---

## 5. `error.message`

If we create:

```js
const error = new Error("Product not found");
```

Then:

```js
error.message
```

gives:

```text
Product not found
```

So we can send it to the user:

```js
res.send(error.message);
```

---

## 6. Complete Working ⭐

```text
User requests /error
        ↓
Error occurs
        ↓
Create Error object
        ↓
next(error)
        ↓
Express finds Error Middleware
        ↓
(error, req, res, next)
        ↓
Handle the error
        ↓
Send Response
```

---

## 7. Common Error Handler — Main Idea ⭐⭐⭐

```text
/login       ── error ──┐
/product     ── error ──┤
/payment     ── error ──┤
/order       ── error ──┤
                         ↓
                    next(error)
                         ↓
              COMMON ERROR HANDLER
                         ↓
                      Response
```

### 🧠 One-line memory

> **"Error happens anywhere → `next(error)` → common handler handles it."**

---

## 8. Where to Write Error Middleware?

Generally, write it **after all routes / at the end**:

```js
app.get("/error", ...);

app.get("/product", ...);

// Error middleware LAST
app.use((error, req, res, next) => {
    res.status(error.status || 500)
       .send(error.message);
});
```

### Why?

Express generally processes middleware **from top to bottom**.

```text
Route
  ↓
Route
  ↓
Route
  ↓
Error Middleware
```

So the error handler is normally placed **last**.

---

## 9. ⚠️ Correction in Your Code

You wrote:

```js
.sned(...)
```

Correct:

```js
.send(...)
```

---

# 🔥 Exam Revision Box

> **ERROR MIDDLEWARE**
>
> * Used to handle errors.
> * Send errors using `next(error)`.
> * Has **4 parameters**: `error, req, res, next`.
> * `error.status || 500` decides the status code.
> * `error.message` gives the error message.
> * Usually written **after all routes**.
> * Multiple route errors can be handled by **one common handler**.

### Final Memory

```text
ERROR
  ↓
next(error)
  ↓
COMMON ERROR MIDDLEWARE
  ↓
STATUS + MESSAGE
  ↓
RESPONSE
```
