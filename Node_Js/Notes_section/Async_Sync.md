## Synchronous Programming (Simple)

**Meaning:** One task finishes before the next one starts.

### Example

```javascript
getUsers();
getProducts();
getCities();
```

### Flow

```
Users
  ↓
Products
  ↓
Cities
```

### What happens?

* Get Users → Wait
* Get Products → Wait
* Get Cities → Wait

If:

* Users = 2 sec
* Products = 3 sec
* Cities = 1 sec

**Total = 6 sec**

### When to use?

When the next task depends on the previous one.

Example:

```
Login
 ↓
Get Token
 ↓
Get Profile
```

You cannot get the profile without the token.

---

# Asynchronous Programming (Simple)

**Meaning:** Start multiple tasks without waiting for each one to finish.

### Example

```javascript
Promise.all([
    getUsers(),
    getProducts(),
    getCities()
]);
```

### Flow

```
     Users
      ↘
Start → Products
      ↗
     Cities
```

All requests start together.

If:

* Users = 2 sec
* Products = 3 sec
* Cities = 1 sec

**Total = 3 sec** (the longest task)

### When to use?

When tasks are independent.

Example:

* Load Users
* Load Products
* Load Cities

None depends on another.

---

# Difference

| Synchronous | Asynchronous                   |
| ----------- | ------------------------------ |
| One by one  | At the same time               |
| Waits       | Doesn't wait                   |
| Slower      | Faster (for independent tasks) |
| Blocking    | Non-blocking                   |

---

# Real-Life Example

**Synchronous:** One cashier serves customers one by one.

```
Customer 1
   ↓
Customer 2
   ↓
Customer 3
```

**Asynchronous:** Three cashiers serve customers simultaneously.

```
Customer 1 → Cashier 1
Customer 2 → Cashier 2
Customer 3 → Cashier 3
```

---

## Easy Interview Answer

* **Synchronous:** "Complete one task, then start the next."
* **Asynchronous:** "Start multiple independent tasks together and continue when they finish."
