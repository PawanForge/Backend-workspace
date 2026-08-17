
### Code

```js
function ageCheck(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        resp.send("Alert! You can not access this page");
    } else {
        next();
    }
}

app.use(ageCheck);
```

### 1. `function ageCheck(req, resp, next)`

This creates a **middleware function** called `ageCheck`.

* `ageCheck` → name of the middleware.
* `req` → **request** object. It contains information sent by the user/browser.
* `resp` → **response** object. It is used to send a response back to the user.
* `next` → a function that tells Express:
  **"The current middleware is finished. Go to the next middleware/route."**

So:

> `req` = What user sends
> `resp` = What server sends back
> `next` = Move forward

---

### 2. `req.query.age`

`req.query` contains values sent in the **URL query string**.

For example:

```text
http://localhost:3000/home?age=20
```

Here:

```js
req.query.age
```

will give:

```text
20
```

Another example:

```text
http://localhost:3000/home?age=15
```

Then:

```js
req.query.age
```

is `15`.

---

### 3. `!req.query.age`

The `!` means **NOT**.

So:

```js
!req.query.age
```

means:

> "Is the age missing or empty?"

For example:

```text
/home
```

There is no `age`, so:

```js
req.query.age
```

doesn't have a value, and:

```js
!req.query.age
```

becomes `true`.

---

### 4. `req.query.age < 18`

This checks whether the user's age is **less than 18**.

```js
req.query.age < 18
```

Examples:

```js
15 < 18   // true
20 < 18   // false
```

So anyone below 18 will not be allowed.

---

### 5. `||` (OR operator)

```js
if (!req.query.age || req.query.age < 18)
```

`||` means **OR**.

The condition says:

> If the age is missing **OR** the age is below 18, don't allow access.

There are two possible problems:

| Situation        | Result        |
| ---------------- | ------------- |
| Age not provided | ❌ Not allowed |
| Age = 15         | ❌ Not allowed |
| Age = 17         | ❌ Not allowed |
| Age = 18         | ✅ Allowed     |
| Age = 25         | ✅ Allowed     |

---

### 6. `resp.send(...)`

```js
resp.send("Alert! You can not access this page");
```

`resp.send()` sends a message back to the browser.

So if the user enters:

```text
/home?age=15
```

They receive:

```text
Alert! You can not access this page
```

---

### 7. `else`

```js
else {
    next();
}
```

`else` runs when the `if` condition is **false**.

For example:

```text
/home?age=20
```

* Age exists ✅
* Age is not below 18 ✅
* `if` becomes false
* `else` runs

---

### 8. `next()`

```js
next();
```

This is **very important in middleware**.

It means:

> "The user passed the age check. Continue to the next middleware or route."

For example:

```js
app.use(ageCheck);

app.get("/home", (req, resp) => {
    resp.send("Welcome to the home page");
});
```

If the user visits:

```text
/home?age=20
```

Flow is:

```text
Request
   ↓
ageCheck middleware
   ↓
Age >= 18 ?
   ↓
   YES
   ↓
next()
   ↓
/home route
   ↓
"Welcome to the home page"
```

But if age is 15:

```text
Request
   ↓
ageCheck middleware
   ↓
Age >= 18 ?
   ↓
   NO
   ↓
resp.send(...)
   ↓
Stop
```

---

### 9. `app.use(ageCheck)`

```js
app.use(ageCheck);
```

`app.use()` tells Express:

> "Use this middleware for incoming requests."

Because it is written like this:

```js
app.use(ageCheck);
```

the middleware is applied to **all routes that come after it**.

Example:

```js
app.use(ageCheck);

app.get("/home", ...);
app.get("/about", ...);
app.get("/profile", ...);
```

The `ageCheck` middleware will run before these routes.

---

## ⭐ Easy way to remember

Think of `ageCheck` as a **security guard** 🚪:

```text
User → Security Guard → Check Age
                         ↓
                   Age < 18?
                    /      \
                  YES       NO
                   ↓         ↓
                STOP       next()
                             ↓
                          Website
```

**Middleware = checkpoint between the user's request and the final route.**

And the three most important terms are:

* **`req`** → receives information from the user
* **`resp`** → sends information to the user
* **`next()`** → allows the request to continue to the next step
