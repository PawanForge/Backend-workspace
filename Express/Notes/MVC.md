**MVC** stands for **Model–View–Controller**. It is a software architecture pattern that helps organize an Express.js application into separate responsibilities.

### MVC in Express.js

![Image](https://images.openai.com/static-rsc-4/S2xdII-2e5FFSMUO7k-kTzle0Hozsqtf1wU9aLWD2NllL492IcBSzWgUMy_31Ksq0SkrKUeLe9yRkerDCu5GPrkuUIDJRV2KrFSCEnt4jWE8wCRMkJV_i5nS0vKt5JaTQA9Ob6i8xkzfHa-SaNyceYe40z-r-H8LjHo5kOnPJ8Xab9b8Hw441gWSJd-1-UIK?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/4mZmcW2Gw6zQ3KHhQkoEJBhVOZ5OlgrGagCBCQ1gx33UuXMa0ZO2S4K0gI_vL2U1VLAmea2p_l7GYG6YqYkl_vRJjlfloZLX_f1fWDGJJksx1fapM4VzrpmO0pwmqADQWlGrg7ZD5jPpOA71S1E2586UgfzNWn9ZvTpcW1EMiFAindN1-Py1Ar4U6Yh2VXnR?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/n3S_c8tctQRW6Lx16GJ5RQgCzct-HK_RJdM8l4TJ709UYSBjdlC3Vsu7TTvqGuteIIuQ9awC_XSG2cuBoUmVHNSMfZXlEyhkeK8yyawHnzo7CySnMQhedvT2qIu81HIEwn5HiWpXj8f0yLTLD_wIi7rMC6zsio7dAr4oqP42ApUibYVp4yH9_rhZo_Hlq5CV?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/yuSSK09geS6G39vhDN2PVOh249jxqIPr0Pk2Jz5E3b08_FTbR3yN9rhz1IwkqzRnYnh0ygQXU7YVVjt_3hKnMVLUsMkq4PmX5qk_bZzSqswAF1kD3A_VSrmIY7fDWcuHG9KcfrGdKgmu4g_xYDEtD-1rvJLf4ePVak5Of1nhxMeaFXRk-o1fYtUe6YyvSopc?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ERg9wZb22VO0yuBfEP9EVgL-x3Rk612_9O7oLfvE4-zLRFhAYUTzxDCZWa6h4mpE4fZGVCHRRmjYmlPkqn2DG8V9jzv-7_A9MRxggma0bzRIotl6ag3LbZoaJTJp5NVdRaayyAOAjeGB2LESEVMgpxQ4KPvXSA5sF6jqYIqRxljswIvmDMixT0gHJAmKpoib?purpose=fullsize)

Think of it like this:

```text
Client / Browser
      ↓
    Routes
      ↓
  Controller
   ↙      ↘
Model     View
   ↓        ↓
Database   Response
```

### 1. Model

The **Model** handles your application's data and database operations.

For example, with a `User` model:

```js
// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model("User", userSchema);
```

The Model is responsible for things like:

* Creating users
* Finding users
* Updating users
* Deleting users
* Communicating with the database

---

### 2. View

The **View** is what the user sees.

In an Express application, this might be an EJS, Pug, or Handlebars template.

Example:

```html
<!-- views/users.ejs -->

<h1>Users</h1>

<% users.forEach(user => { %>
  <p><%= user.name %></p>
<% }) %>
```

If you're building a **REST API**, you may not have traditional Views. Instead, the controller usually sends JSON:

```js
res.json(users);
```

---

### 3. Controller

The **Controller** contains the application's logic. It receives a request, interacts with the Model, and sends a response.

```js
// controllers/userController.js

const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.json(users);
};
```

So the Controller essentially says:

> "The user requested all users. I'll ask the Model for them and then send the result back."

---

### 4. Routes

Routes aren't technically one of the three MVC components, but Express applications normally use them to connect URLs to Controllers.

```js
// routes/userRoutes.js

const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/userController");

router.get("/users", getUsers);

module.exports = router;
```

Then in `app.js`:

```js
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/api", userRoutes);

app.listen(3000);
```

Now:

```text
GET /api/users
       ↓
   userRoutes
       ↓
   getUsers()
       ↓
     User
       ↓
   Database
       ↓
    JSON response
```

### Typical Express MVC folder structure

```text
my-app/
│
├── app.js
│
├── models/
│   └── User.js
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── views/
│   └── users.ejs
│
├── middleware/
│   └── auth.js
│
└── package.json
```

### In simple terms

| Part           | Responsibility                            |
| -------------- | ----------------------------------------- |
| **Model**      | Deals with data/database                  |
| **View**       | Displays the data                         |
| **Controller** | Contains request/response logic           |
| **Route**      | Determines which controller handles a URL |

**Easy way to remember:**

> **Route → Controller → Model → Database → Controller → View/JSON → Client**

For a modern Express **REST API**, the flow is often:

**Route → Controller → Model → Database → Controller → JSON response**.
