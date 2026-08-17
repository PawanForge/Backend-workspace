# Express.js Middleware — Clear Notes

## 1. What is Middleware?

Middleware is a **function that runs between the request and the route handler**.

It can:

* Check data
* Authenticate a user
* Log requests
* Modify the request or response
* Allow or stop a request

### Basic Structure

```js
function middleware(req, res, next) {
    // middleware work

    next();
}
```

### `next()`

`next()` tells Express:

> "The middleware has finished. Continue to the next function."

---

# 2. Application-Level Middleware

Application-level middleware is added using:

```js
app.use(middleware);
```

It is applied to the routes that come after it and match the middleware's path.

### Example

```js
import express from "express";

const app = express();

function AgeRoute(req, res, next) {
    const age = Number(req.query.age);

    if (age < 18) {
        return res.send("You are not allowed");
    }

    next();
}

// Application-level middleware
app.use(AgeRoute);

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/login", (req, res) => {
    res.send("Login Page");
});

app.listen(3200);
```

### How it works

```text
Request
   ↓
AgeRoute
   ↓
Route Handler
   ↓
Response
```

For example:

```text
/home?age=20
      ↓
  AgeRoute
      ↓
  /home handler
      ↓
  Home Page
```

Because we used:

```js
app.use(AgeRoute);
```

the middleware is applied to the routes below it.

---

# 3. Route-Level Middleware

Route-level middleware is attached to a **specific route**.

### Syntax

```js
app.get("/route", middleware, handler);
```

### Example

```js
import express from "express";

const app = express();

function AgeRoute(req, res, next) {
    const age = Number(req.query.age);

    if (age < 18) {
        return res.send("You are not allowed");
    }

    next();
}

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.get("/about", AgeRoute, (req, res) => {
    res.send("About Page");
});

app.get("/login", AgeRoute, (req, res) => {
    res.send("Login Page");
});

app.listen(3200);
```

### How it works

For `/home`:

```text
/home
  ↓
Home Handler
  ↓
Home Page
```

For `/about`:

```text
/about?age=20
       ↓
   AgeRoute
       ↓
   About Handler
       ↓
   About Page
```

For `/login`:

```text
/login?age=15
       ↓
   AgeRoute
       ↓
   Age < 18
       ↓
   "You are not allowed"
```

`AgeRoute` is **not used for `/home`** because we did not attach it to `/home`.

---

# 4. Application-Level vs Route-Level

| Application-Level                  | Route-Level                            |
| ---------------------------------- | -------------------------------------- |
| Uses `app.use()`                   | Uses middleware inside a route         |
| `app.use(AgeRoute)`                | `app.get("/about", AgeRoute, handler)` |
| Used broadly for routes            | Used for specific routes               |
| Middleware can run for many routes | Middleware runs only where attached    |
| More general                       | More specific                          |

### Application-Level

```js
app.use(AgeRoute);

app.get("/home", handler);
app.get("/about", handler);
app.get("/login", handler);
```

Concept:

```text
AgeRoute
   ↓
/home
/about
/login
```

### Route-Level

```js
app.get("/home", handler);

app.get("/about", AgeRoute, handler);

app.get("/login", AgeRoute, handler);
```

Concept:

```text
/home
  ↓
No middleware

/about
  ↓
AgeRoute

/login
  ↓
AgeRoute
```

---

# 5. Important Difference

### Application-Level

```js
app.use(AgeRoute);
```

Means:

> Apply this middleware broadly to the routes handled after this middleware.

### Route-Level

```js
app.get("/about", AgeRoute, handler);
```

Means:

> Apply this middleware only to the `/about` route.

---

# 6. Do Not Use Both Unnecessarily

If you write:

```js
app.use(AgeRoute);

app.get("/about", AgeRoute, handler);
```

then `/about` can pass through `AgeRoute` **twice**:

```text
Request /about
      ↓
AgeRoute
(app.use)
      ↓
AgeRoute
(route-level)
      ↓
About Handler
```

So, when learning **route-level middleware**, use:

```js
app.get("/about", AgeRoute, handler);
```

and do not add:

```js
app.use(AgeRoute);
```

unless you specifically want application-level middleware.

---

## Quick Revision

```text
Middleware
    ↓
Function between request and handler
    ↓
next() → continue to next function

Application-Level
    ↓
app.use(AgeRoute)
    ↓
Broadly applied to routes

Route-Level
    ↓
app.get("/about", AgeRoute, handler)
    ↓
Applied only to that route
```

### Easy Rule

**`app.use()` → Application-Level**

**`app.get("/route", middleware, ...)` → Route-Level**
