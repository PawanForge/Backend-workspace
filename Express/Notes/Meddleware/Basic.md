
1. What is Middleware?

Middleware is a function that runs between the HTTP request and the final response.

Simple flow:

Client
   ↓
HTTP Request
   ↓
Middleware
   ↓
Route Handler
   ↓
HTTP Response
   ↓
Client

For example, when the user visits:

http://localhost:1000/

the request first goes through middleware and then reaches the / route.


---

2. Basic Middleware Syntax

app.use((req, res, next) => {
    // middleware code

    next();
});

There are 3 important parts:

Part	Meaning

req	Request coming from client
res	Response that will be sent to client
next()	Pass control to the next middleware/route


Most important:

next();

means:

> "Middleware ka kaam complete ho gaya, ab request ko aage bhejo."



⚠️ next and next() are different.

next;    // function ko call nahi kiya
next();  // function call kiya ✅


---

3. Why Do We Need Middleware?

Suppose you have many routes:

app.get("/", ...);
app.get("/about", ...);
app.get("/login", ...);
app.get("/contact", ...);

And you want to perform the same task for every request, such as:

logging

authentication

checking data

modifying request

checking permissions

error handling


Instead of writing the same code in every route, we use middleware.

Without middleware

app.get("/", (req, res) => {
    console.log("User visited /");
    res.send("Home");
});

app.get("/about", (req, res) => {
    console.log("User visited /about");
    res.send("About");
});

Repeated code ❌

With middleware

app.use((req, res, next) => {
    console.log("User visited " + req.url);
    next();
});

Now it can work for multiple routes. ✅


---

4. Understanding req, res, and next

req — Request

Contains information about the request.

Example:

req.url

gives the requested URL.

If user visits:

/about

then:

req.url

is:

/about


---

res — Response

Used to send something back to the client.

res.send("Hello");


---

next() — Continue

It tells Express:

Middleware finished
       ↓
Go to next middleware/route

Without next(), the request can get stuck.


---

5. Your Middleware Example

Your image contains code similar to:

app.use((req, res, next) => {
    console.log("user is accessing " + req.url + " Page");
    next();
});

Suppose the user visits:

/about

Flow:

Browser
   ↓
GET /about
   ↓
app.use() Middleware
   ↓
console.log()
   ↓
next()
   ↓
app.get("/about")
   ↓
About Page Response

Console:

user is accessing /about Page


---

6. app.use() in Middleware

The most common way to register middleware is:

app.use(middlewareFunction);

Example:

app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.use() means:

> Use this middleware in the request-processing flow.




---

7. Middleware Runs Before the Route

Consider:

app.use((req, res, next) => {
    console.log("Middleware");
    next();
});

app.get("/", (req, res) => {
    console.log("Route");
    res.send("Home Page");
});

When / is requested:

Request
   ↓
Middleware
   ↓
next()
   ↓
Route Handler
   ↓
Response

Console:

Middleware
Route

So remember:

> Middleware can perform some work before the route handler runs.




---

8. What Happens If We Don't Use next()?

Example:

app.use((req, res, next) => {
    console.log("Middleware");
});

There is no:

next();

and no response:

res.send(...);

So Express doesn't know what to do next.

Request
   ↓
Middleware
   ↓
STOP ❌

The browser may keep loading.

Therefore:

Middleware should normally either:

next();

or send a response:

res.send("Access denied");


---

9. Middleware Can Also Stop a Request

Middleware doesn't always have to call next().

Example:

app.use((req, res, next) => {
    const login = false;

    if (login) {
        next();
    } else {
        res.send("Please login first");
    }
});

Flow when user is not logged in:

Request
   ↓
Middleware
   ↓
login = false
   ↓
Response
"Please login first"

The route doesn't execute.

Important rule

next()       → continue
res.send()   → stop and respond


---

10. Real-Life Example — Security Guard

Think of middleware as a security guard.

┌──────────────┐
Request ───────────→│  Middleware  │
                    │ Security     │
                    │ Check        │
                    └──────┬───────┘
                           │
                     Authentication
                           │
                    ┌──────┴───────┐
                    ↓              ↓
                 Allowed         Denied
                    ↓              ↓
                  Route         Response

If allowed:

next();

If denied:

res.send("Access denied");


---

11. Common Uses of Middleware

1. Authentication

Check whether user is logged in.

app.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.send("Login required");
    }
});


---

2. Logging

Track incoming requests.

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

Example output:

GET /
GET /about
POST /login


---

3. Request Modification

Middleware can modify request data.

app.use((req, res, next) => {
    req.username = "Pawan";
    next();
});

Then a route can use:

app.get("/", (req, res) => {
    res.send(req.username);
});


---

4. Data Parsing

Express middleware can process incoming request data.

For example:

app.use(express.json());

This allows Express to understand JSON request bodies.


---

5. Error Handling

Middleware can handle errors centrally instead of writing error logic in every route.


---

12. Types of Middleware

For learning Express, remember these main types:

A. Application-level Middleware

Applied to the whole application.

app.use((req, res, next) => {
    console.log("Request received");
    next();
});


---

B. Route-level Middleware

Applied to a particular route.

const checkLogin = (req, res, next) => {
    console.log("Checking login...");
    next();
};

app.get("/profile", checkLogin, (req, res) => {
    res.send("Profile");
});

Flow:

/profile request
      ↓
checkLogin
      ↓
next()
      ↓
/profile route


---

C. Built-in Middleware

Express already provides some middleware.

Example:

app.use(express.json());

and:

app.use(express.urlencoded({ extended: true }));


---

D. Third-party Middleware

Middleware created by other developers/packages.

Example:

import cors from "cors";

app.use(cors());

Another common example is morgan for logging.


---

E. Error-handling Middleware

Special middleware has four parameters:

app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong");
});

Notice:

err, req, res, next

The err parameter tells Express that this middleware handles errors.


---

13. Multiple Middleware

You can have more than one middleware.

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get("/", (req, res) => {
    res.send("Home");
});

Flow:

Request
   ↓
Middleware 1
   ↓
next()
   ↓
Middleware 2
   ↓
next()
   ↓
Route
   ↓
Response

Console:

Middleware 1
Middleware 2


---

14. Middleware Order is Important ⭐

Express executes middleware in the order in which you write it.

app.use(middleware1);
app.use(middleware2);

app.get("/", route);

Execution:

middleware1
     ↓
middleware2
     ↓
route

If you change the order, execution also changes.

Therefore:

> Middleware order matters.




---

15. Middleware for Specific Paths

You can also specify a path:

app.use("/admin", (req, res, next) => {
    console.log("Admin middleware");
    next();
});

This middleware runs for requests beginning with:

/admin

For example:

/admin
/admin/users
/admin/settings


---

16. Middleware vs Route Handler

Middleware

app.use((req, res, next) => {
    console.log("Checking...");
    next();
});

Main purpose:

> Process/check the request and pass it forward.



Route Handler

app.get("/", (req, res) => {
    res.send("Home Page");
});

Main purpose:

> Handle a particular route and normally send the final response.




---

17. Complete Example

import express from "express";

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("User is accessing:", req.url);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// About route
app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(1000, () => {
    console.log("Server running on http://localhost:1000");
});

Request /about

Browser
   ↓
GET /about
   ↓
app.use() Middleware
   ↓
console.log("/about")
   ↓
next()
   ↓
app.get("/about")
   ↓
"About Page"
   ↓
Browser


---

⭐ Most Important Points

1. Middleware is a function that runs between request and response.


2. Middleware commonly uses:

(req, res, next)


3. req → request information.


4. res → sends response.


5. next() → moves request to the next middleware/route.


6. app.use() is commonly used to register middleware.


7. Middleware can check, modify, log, authenticate, or process requests.


8. Middleware can either:

call next() → continue

send response → stop



9. Middleware execution order matters.


10. Middleware can be global or applied to a specific route/path.


11. Express has built-in, application-level, route-level, third-party, and error-handling middleware.


12. The most important flow to remember is:



REQUEST
   ↓
MIDDLEWARE
   ↓
next()
   ↓
ROUTE HANDLER
   ↓
RESPONSE

One-line definition for exam

> Middleware in Express.js is a function that executes during the request-response cycle and can process the request, modify it, send a response, or pass control to the next middleware using next().