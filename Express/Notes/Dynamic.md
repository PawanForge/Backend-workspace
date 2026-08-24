# Dynamic Routing in Express.js

## What is Dynamic Routing?

**Dynamic routing** means creating **one route that can work with different values**.

For example:

```text
/user/anil
/user/sam
/user/peter
```

Instead of creating 3 different routes, we create **one route**:

```js
app.get("/user/:name", (req, resp) => {
```

Here, `:name` is called a **route parameter**. It can change.

---

## Why do we use Dynamic Routing?

It is used when the URL contains a value that can be different.

For example, every user has a different name:

```text
/user/anil
/user/sam
/user/peter
```

We don't want to write a separate route for every user.

So we use:

```js
/user/:name
```

This makes the code **shorter and reusable**.

---

## How do we get the value?

We use:

```js
req.params.name
```

### Example:

If the user visits:

```text
/user/anil
```

Then:

```js
req.params.name
```

gives:

```text
anil
```

If the user visits:

```text
/user/sam
```

Then:

```js
req.params.name
```

gives:

```text
sam
```

---

## Simple Example

```js
app.get("/user/:name", (req, resp) => {
    const userName = req.params.name;

    resp.send(`This is ${userName}'s profile page`);
});
```

### Step-by-step:

```text
/user/anil
    ↓
:name = anil
    ↓
req.params.name
    ↓
anil
    ↓
This is anil's profile page
```

For:

```text
/user/peter
```

the result is:

```text
This is peter's profile page
```

---

## Remember This

```js
/user/:name
```

* `/user/` → fixed part
* `:name` → changing part
* `req.params.name` → gets the changing value

### ⭐ Definition

> **Dynamic routing allows us to use one route for different URL values by using route parameters such as `:name`.**
