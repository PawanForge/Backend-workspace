# 📘 `npm init` & `node_modules` – Simple Notes

---

# 🎯 What is `npm init`?

`npm init` is used to **create a new Node.js project**.

It creates a **`package.json`** file that stores your project's information and dependencies.

### Quick Command

```bash
npm init -y
```

* `-y` means **Yes to all default questions**.
* Creates `package.json` instantly.

---

# 📄 What is `package.json`?

`package.json` is the **heart of a Node.js project**.

It stores:

* Project name
* Version
* Scripts
* Installed dependencies

Example:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^5.1.0",
    "colors": "^1.4.0"
  }
}
```

---

# 📦 Installing Packages

To install a single package:

```bash
npm install express
```

or

```bash
npm i express
```

To install **all dependencies** listed in `package.json`:

```bash
npm install
```

or simply:

```bash
npm i
```

### ✅ What does `npm i` do?

It reads the **`package.json`** file and automatically downloads **all required packages** into the `node_modules` folder.

---

# 📁 What is `node_modules`?

`node_modules` is the folder where npm stores **all installed external packages**.

Example:

```text
Project
│
├── node_modules/
│     ├── express
│     ├── colors
│     └── other dependencies
│
├── package.json
└── index.js
```

---

# ❓ Why Don't We Push `node_modules` to GitHub?

We **do not upload `node_modules`** because:

* It is very large.
* It can be created again anytime.
* It makes the repository heavy.

Instead, we upload:

* ✅ `package.json`
* ✅ `package-lock.json`

and ignore:

* ❌ `node_modules`

---

# 📄 `.gitignore`

Create a `.gitignore` file and add:

```text
node_modules/
```

This tells Git:

> **"Do not upload the `node_modules` folder to GitHub."**

---

# 🔄 How Another Developer Runs Your Project

```text
Clone Project
      │
      ▼
package.json Found
      │
      ▼
Run: npm i
      │
      ▼
node_modules Created
      │
      ▼
Project Ready
```

---

# 💡 Easy Way to Remember

```text
package.json
      │
      ▼
List of required packages 📋

npm i
      │
      ▼
Downloads all packages

node_modules
      │
      ▼
Stores the actual package files 📦
```

---

# 📌 Key Points

* `npm init -y` → Creates a new Node.js project.
* `package.json` → Stores project information and dependencies.
* `npm i package-name` → Installs one package.
* `npm i` → Installs **all packages** from `package.json`.
* `node_modules` → Contains the actual installed packages.
* Never push `node_modules` to GitHub.
* Add `node_modules/` to `.gitignore`.
* Anyone who clones your project only needs to run **`npm i`** to recreate `node_modules`.
