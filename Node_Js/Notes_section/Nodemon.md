# 📘 Nodemon – Complete Beginner Notes



# 🎯 What is Nodemon?

**Nodemon** is a development tool that automatically restarts your Node.js application whenever you save changes to your code.

### Simple Definition

> **Nodemon watches your project files. Wheever you save a file, it automatically restarts the server, so you don't need to restart it manually.**

---

# 🤔 Why Do We Need Nodemon?

Normally, when running a Node.js application using:

```bash
node index.js
```

If you make any changes to `index.js`, **Node.js does not detect them**.

You have to:

1. Stop the server (`Ctrl + C`)
2. Run it again

```bash
node index.js
```

Doing this repeatedly wastes time.

**Nodemon solves this problem** by automatically restarting the server whenever you save the file.

---

# ❌ Without Nodemon

```text
Run Project
      │
      ▼
node index.js
      │
      ▼
Edit Code
      │
      ▼
Save File
      │
      ▼
❌ No Changes Visible
      │
      ▼
Stop Server (Ctrl + C)
      │
      ▼
Run Again
node index.js
```

---

# ✅ With Nodemon

```text
Run Project
      │
      ▼
nodemon index.js
      │
      ▼
Edit Code
      │
      ▼
Save File
      │
      ▼
✅ Nodemon Detects Changes
      │
      ▼
Server Restarts Automatically
```

---

# 📦 How to Install Nodemon

### Install in the current project (Recommended)

```bash
npm i nodemon
```

or

```bash
npm install nodemon
```

This adds Nodemon to your project's dependencies.

---

### Install globally (Optional)

```bash
npm i -g nodemon
```

Now you can use `nodemon` in any project on your computer.

---

# ▶️ Running Your Project

## Using Node

```bash
node index.js
```

* Starts the application once.
* Manual restart required after every change.

---

## Using Nodemon

```bash
npx nodemon index.js
```

or (if installed globally)

```bash
nodemon index.js
```

* Starts the application.
* Automatically restarts after every file save.

---

# 📝 Example

### index.js

```javascript
console.log("Server Started");
```

Run:

```bash
npx nodemon index.js
```

Output:

```text
Server Started
```

Now change the code:

```javascript
console.log("Server Restarted Automatically");
```

Save the file.

Nodemon automatically restarts and shows:

```text
Server Restarted Automatically
```

No need to stop and run the command again.

---

# 🔄 How Nodemon Works

```text
Start Nodemon
       │
       ▼
Watch Project Files
       │
       ▼
Any File Changed?
       │
   ┌───┴────┐
   │        │
  No       Yes
   │        │
Keep      Restart
Running   Server
```

---

# ⭐ Features of Nodemon

* ✅ Automatically restarts the server.
* ✅ Saves development time.
* ✅ No need to run `node filename.js` again and again.
* ✅ Watches project files for changes.
* ✅ Makes development faster and easier.

---

# 📌 Node vs Nodemon

| Node.js                   | Nodemon                          |
| ------------------------- | -------------------------------- |
| Runs the application once | Runs and watches the application |
| Manual restart required   | Automatic restart                |
| Built into Node.js        | External npm package             |
| Best for production       | Best for development             |

---

# 🚀 Common Commands

### Create a project

```bash
npm init -y
```

### Install Nodemon

```bash
npm i nodemon
```

### Run using Node

```bash
node index.js
```

### Run using Nodemon

```bash
npx nodemon index.js
```

or (if installed globally)

```bash
nodemon index.js
```

---

# 💡 Easy Way to Remember

```text
Node
 │
 ▼
Run Once
 │
 ▼
Change Code
 │
 ▼
Restart Manually ❌


Nodemon
 │
 ▼
Run Once
 │
 ▼
Change Code
 │
 ▼
Restart Automatically ✅
```

---

# 📌 Key Points

* **Nodemon is an external npm package.**
* It is used **only during development**.
* It automatically restarts your Node.js application whenever you save changes.
* `node index.js` → Manual restart.
* `npx nodemon index.js` → Automatic restart.
* It improves developer productivity and saves time.

---

# 🎯 Interview Questions

### Q1. What is Nodemon?

**Answer:**
Nodemon is a development tool that automatically restarts a Node.js application whenever project files are changed and saved.

### Q2. Why do we use Nodemon?

**Answer:**
We use Nodemon to avoid manually restarting the server after every code change. It watches project files and restarts the application automatically.

### Q3. What is the difference between `node` and `nodemon`?

* `node index.js` → Runs the application once; manual restart is needed.
* `npx nodemon index.js` → Runs the application and automatically restarts it whenever files change.
