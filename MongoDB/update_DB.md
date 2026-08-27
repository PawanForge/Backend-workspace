# MongoDB + Express + EJS — UPDATE Notes

These notes are based on your **`student.ejs`**, **`update-student.ejs`**, and **Express server code**.

## 1. Complete Update Flow

```text
student.ejs
     ↓
Click Update
     ↓
GET /ui/student/:id
     ↓
MongoDB → findOne()
     ↓
update-student.ejs
     ↓
User changes data
     ↓
POST /update-student/:id
     ↓
MongoDB → updateOne()
     ↓
$set
     ↓
redirect("/ui")
```

Update has **two routes**:

```text
1. GET  → Open the update page
2. POST → Actually update the data
```

---

# 2. Update Link in `student.ejs`

```ejs
<a href="/ui/student/<%= student._id %>">
    Update
</a>
```

Suppose the student's ID is:

```text
68abc123
```

EJS creates:

```html
<a href="/ui/student/68abc123">
    Update
</a>
```

When the user clicks **Update**:

```text
GET /ui/student/68abc123
```

is sent to the server.

---

# 3. GET Route — Open Update Page

```js
app.get("/ui/student/:id", async (req, resp) => {

    const collection = db.collection("my_information");

    const result = await collection.findOne({
        _id: new ObjectId(req.params.id)
    });

    if (!result) {
        return resp.send("Student not found");
    }

    resp.render("update-student", { result });

});
```

This route **does not update anything**.

Its job is only:

> Find the student and open the update form.

---

# 4. What is `:id`?

```js
app.get("/ui/student/:id", ...)
```

`:id` means a **dynamic value**.

For example:

```text
/ui/student/68abc123
```

Here:

```text
:id = 68abc123
```

We get it using:

```js
req.params.id
```

---

# 5. `req.params`

`req.params` gets data from the **URL**.

Example:

```text
/ui/student/68abc123
```

Then:

```js
req.params.id
```

gives:

```text
68abc123
```

Remember:

```text
req.body   → data from form
req.params → data from URL
```

---

# 6. Why `ObjectId()`?

The ID coming from the URL is a string.

```js
req.params.id
```

MongoDB's `_id` is normally an `ObjectId`.

So we convert it:

```js
new ObjectId(req.params.id)
```

Then MongoDB can correctly find the student.

---

# 7. `findOne()`

```js
const result = await collection.findOne({
    _id: new ObjectId(req.params.id)
});
```

Meaning:

> Find one student whose `_id` matches this ID.

The result contains:

```text
result
 ├── _id
 ├── name
 ├── age
 └── email
```

---

# 8. If Student Does Not Exist

```js
if (!result) {
    return resp.send("Student not found");
}
```

If no student is found, `result` will be empty/null.

`return` means:

> Stop the function here.

---

# 9. `resp.render()`

```js
resp.render("update-student", { result });
```

This opens:

```text
views/
   └── update-student.ejs
```

And sends the student data to EJS.

So EJS can use:

```ejs
<%= result.name %>
<%= result.age %>
<%= result.email %>
<%= result._id %>
```

---

# 10. `update-student.ejs`

Your form:

```ejs
<form action="/update-student/<%= result._id %>" method="POST">

    <input
        type="text"
        name="name"
        value="<%= result.name %>"
    >

    <input
        type="number"
        name="age"
        value="<%= result.age %>"
    >

    <input
        type="email"
        name="email"
        value="<%= result.email %>"
    >

    <button type="submit">
        Update
    </button>

</form>
```

---

# 11. How `value` Works

Suppose:

```js
result.name = "Pawan"
result.age = 20
result.email = "pawan@gmail.com"
```

Then:

```ejs
value="<%= result.name %>"
```

becomes:

```html
value="Pawan"
```

So the existing data automatically appears in the form.

---

# 12. Form Action

```ejs
<form action="/update-student/<%= result._id %>" method="POST">
```

Suppose:

```text
result._id = 68abc123
```

The form becomes:

```html
<form action="/update-student/68abc123" method="POST">
```

When the user clicks **Update**:

```text
POST /update-student/68abc123
```

is sent to the server.

---

# 13. POST Route — Actual Update

```js
app.post("/update-student/:id", async (req, resp) => {

    const { name, age, email } = req.body;

    const collection = db.collection("my_information");

    await collection.updateOne(
        {
            _id: new ObjectId(req.params.id)
        },
        {
            $set: {
                name: name,
                age: age,
                email: email
            }
        }
    );

    resp.redirect("/ui");

});
```

This is where the **actual database update happens**.

---

# 14. `req.body`

The form sends:

```text
name
age
email
```

because the inputs have:

```html
name="name"
name="age"
name="email"
```

Express reads them using:

```js
req.body
```

Example:

```js
{
    name: "Pawan Kumar",
    age: "21",
    email: "new@gmail.com"
}
```

Then:

```js
const { name, age, email } = req.body;
```

extracts those values.

---

# 15. `updateOne()`

```js
collection.updateOne(
    FILTER,
    UPDATE
);
```

Your code has two parts:

### First part → Which student?

```js
{
    _id: new ObjectId(req.params.id)
}
```

This identifies the student.

### Second part → What should change?

```js
{
    $set: {
        name: name,
        age: age,
        email: email
    }
}
```

This tells MongoDB what values to change.

---

# 16. `$set`

`$set` is a MongoDB **update operator**.

```js
$set: {
    name: name,
    age: age,
    email: email
}
```

It means:

> Set these fields to the new values.

Example:

### Before

```js
{
    name: "Pawan",
    age: 20,
    email: "old@gmail.com"
}
```

### After

```js
{
    name: "Pawan Kumar",
    age: 21,
    email: "new@gmail.com"
}
```

---

# 17. Why `redirect("/ui")`?

After updating:

```js
resp.redirect("/ui");
```

means:

> Go back to the student list page.

Flow:

```text
Update
  ↓
MongoDB updated
  ↓
redirect("/ui")
  ↓
GET /ui
  ↓
find()
  ↓
student.ejs
  ↓
Updated data appears
```

---

# 18. Why Two Routes?

This is very important.

### Route 1 — Open the form

```js
app.get("/ui/student/:id", ...)
```

Purpose:

```text
Find old data
     ↓
Show update form
```

### Route 2 — Update the database

```js
app.post("/update-student/:id", ...)
```

Purpose:

```text
Receive new data
     ↓
Update MongoDB
```

---

# 19. Complete Example

Suppose database has:

```js
{
    _id: ObjectId("123"),
    name: "Pawan",
    age: 20,
    email: "pawan@gmail.com"
}
```

### Step 1 — Click Update

```text
GET /ui/student/123
```

### Step 2 — Find student

```js
findOne({
    _id: ObjectId("123")
})
```

### Step 3 — Open update page

```js
resp.render("update-student", { result });
```

### Step 4 — Form shows

```text
Name:  Pawan
Age:   20
Email: pawan@gmail.com
```

### Step 5 — User changes data

```text
Name:  Pawan Kumar
Age:   21
Email: pk@gmail.com
```

### Step 6 — Form sends

```text
POST /update-student/123
```

### Step 7 — Server gets new data

```js
req.body
```

### Step 8 — MongoDB updates

```js
updateOne(
    { _id: ObjectId("123") },
    {
        $set: {
            name: "Pawan Kumar",
            age: 21,
            email: "pk@gmail.com"
        }
    }
)
```

### Step 9 — Return to list

```js
resp.redirect("/ui");
```

---

# 20. Quick Revision Sheet ⭐

```text
STUDENT.EJS
    ↓
Click Update
    ↓
GET /ui/student/:id
    ↓
req.params.id
    ↓
ObjectId()
    ↓
findOne()
    ↓
result
    ↓
render("update-student", { result })
    ↓
UPDATE-STUDENT.EJS
    ↓
Form
    ↓
POST /update-student/:id
    ↓
req.body
    ↓
updateOne()
    ↓
$set
    ↓
MongoDB updated
    ↓
redirect("/ui")
```

### Remember these 6 things:

| Code            | Meaning                |
| --------------- | ---------------------- |
| `req.params.id` | Get ID from URL        |
| `ObjectId()`    | Convert ID for MongoDB |
| `findOne()`     | Find one student       |
| `req.body`      | Get form data          |
| `updateOne()`   | Update database        |
| `$set`          | Set new field values   |

**Main idea:**
**GET route opens the update form. POST route actually updates MongoDB.**
