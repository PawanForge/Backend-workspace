## Express + EJS Form — Short Notes

### 1. Form

```html
<form action="/submit-user" method="post">
    <input name="name">
    <input name="age">
    <input name="email">
    <button type="submit">Submit</button>
</form>
```

* `action` → data **kahan** bhejna hai
* `method="post"` → data POST request se jayega
* `name` → data **kis naam** se jayega

---

### 2. Express Form Data Read

```js
app.use(express.urlencoded({ extended: false }));
```

Ye HTML form ka data read karne ke liye hai.

---

### 3. POST Route

```js
app.post("/submit-user", (req, res) => {
    console.log(req.body);
});
```

`req.body` mein form ka data milta hai:

```js
{
    name: "Rahul",
    age: "22",
    email: "rahul@gmail.com"
}
```

---

### 4. EJS ko Data Send

```js
res.render("SubmitUser", req.body);
```

Matlab → `req.body` ka data EJS page ko bhejo.

---

### 5. EJS mein Data Display

```ejs
<h3>Name: <%= name %></h3>
<h3>Age: <%= age %></h3>
<h3>Email: <%= email %></h3>
```

`<%= %>` → variable ki value screen par print karta hai.

---

### ⭐ Remember

```text
Form
 ↓
name=""
 ↓
POST
 ↓
req.body
 ↓
res.render()
 ↓
<%= variable %>
 ↓
Display
```

**Most important:** HTML ka `name` aur EJS ka variable name **same hona chahiye**.
