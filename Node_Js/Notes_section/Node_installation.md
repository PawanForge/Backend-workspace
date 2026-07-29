# 📦 Node.js + VS Code Installation — Short Notes

## 1. Install Node.js

Go to the official Node.js website:

[Download Node.js](https://nodejs.org/?utm_source=chatgpt.com)

Download the **LTS (Long-Term Support)** version.

```text
Node.js Website
      │
      ▼
Download LTS Version
      │
      ▼
Run Installer
      │
      ▼
Follow Installation Steps
      │
      ▼
Node.js Installed ✅
```

---

## 2. Verify Node.js Installation

Open **Command Prompt / PowerShell / Terminal** and run:

```bash
node -v
```

Check npm:

```bash
npm -v
```

Expected:

```text
node -v  →  v22.x.x
npm -v   →  10.x.x
```

> Version numbers can be different depending on the installed Node.js version.

---

# 💻 3. Install VS Code

Go to the official Visual Studio Code website:

[Download VS Code](https://code.visualstudio.com/?utm_source=chatgpt.com)

Download and install **Visual Studio Code**.

```text
VS Code Website
      │
      ▼
Download VS Code
      │
      ▼
Run Installer
      │
      ▼
Install VS Code
      │
      ▼
Open VS Code ✅
```

---

## 4. Create Your First Node.js Project

Open VS Code → Create a folder:

```text
node-learning
```

Open this folder in VS Code.

Create a file:

```text
app.js
```

Write:

```js
console.log("Hello Node.js");
```

Open the VS Code terminal:

```text
Terminal → New Terminal
```

Run:

```bash
node app.js
```

Output:

```text
Hello Node.js
```

---

## ⭐ Final Setup

```text
Node.js
   │
   ├── JavaScript Runtime
   └── npm (Package Manager)
          │
          ▼
       VS Code
          │
          ▼
   Write Node.js Code
          │
          ▼
     node app.js
          │
          ▼
   Hello Node.js 🚀
```

### ✅ Required Tools

* **Node.js (LTS)** → Run JavaScript outside the browser
* **npm** → Install and manage packages
* **VS Code** → Write and manage your code
* **Terminal** → Run Node.js commands
