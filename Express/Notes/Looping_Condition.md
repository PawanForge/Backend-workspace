### Short Explanation

```js id="xj4n6f"
const users = ["Pawan", "Kumar", "Yadav"];

res.render("users", { users });
```

* `users` → data/array
* `res.render("users")` → `users.ejs` page open karta hai
* `{ users }` → array ko EJS page ko bhejta hai

EJS:

```ejs id="b0gqzt"
<% for (let i = 0; i < users.length; i++) { %>
    <li><%= users[i] %></li>
<% } %>
```

* `<% %>` → JavaScript/logic run
* `<%= %>` → value browser par display
* `users[i]` → array ka current item

**Flow:**

```text
Array → render() → EJS → HTML → Browser
```
