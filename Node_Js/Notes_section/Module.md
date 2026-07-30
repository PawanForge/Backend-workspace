# 📘 Node.js Core Modules Notes 

---

# 🌟 What are Core Modules?

**Core Modules** are built-in modules provided by **Node.js**.

> They are already included with Node.js, so **you do not need to install them using npm**.

Examples:

* `fs` → File System
* `os` → Operating System
* `path` → File Paths
* `http` → Web Server
* `events` → Event Handling
* `console` → Logging

---

# 📌 Flow of Your Program

```text
                app.js
                   │
                   ▼
      Import Built-in Modules
                   │
        ┌──────────┼───────────┐
        │          │           │
        ▼          ▼           ▼
       fs         os       console
        │          │           │
        ▼          ▼           ▼
 Create File   Get System   Print Messages
                   │
                   ▼
            Display Information
                   │
                   ▼
             Program Finished
```

---

# 📂 Importing Modules

```javascript
const fs = require("fs");
const os = require("os");
const { log, warn } = require("console");
```

## What is `require()`?

`require()` is used to **import a module** into your current file.

### Syntax

```javascript
const moduleName = require("module-name");
```

### Example

```javascript
const fs = require("fs");
```

Meaning:

> "Import the File System module so I can work with files."

---

# 🗂️ File System Module (`fs`)

## Purpose

The **fs (File System)** module is used to:

* Create files
* Read files
* Update files
* Delete files
* Rename files

---

## Your Code

```javascript
fs.writeFileSync("dummy", "trying with module");
```

### Explanation

* `writeFileSync()` creates a file.
* If the file already exists, it **overwrites** its content.
* `"dummy"` → File name.
* `"trying with module"` → Content written into the file.

### Flow

```text
Node.js
    │
    ▼
writeFileSync()
    │
Creates dummy file
    │
Writes:
trying with module
```

---

# 💻 Operating System Module (`os`)

## Purpose

The `os` module gives information about the computer where Node.js is running.

---

## 1. Platform

```javascript
console.log(os.platform());
```

### Purpose

Returns the operating system.

Example Output

```text
win32
```

Possible Values

| Output | Meaning |
| ------ | ------- |
| win32  | Windows |
| linux  | Linux   |
| darwin | macOS   |

---

## 2. Host Name

```javascript
console.log(os.hostname());
```

### Purpose

Returns the computer's name.

Example

```text
DESKTOP-ABC123
```

---

## 3. CPU Information

```javascript
console.log(os.cpus());
```

### Purpose

Returns detailed information about all CPU cores.

Example

```text
[
  {
    model: 'Intel(R) Core...',
    speed: 2500
  }
]
```

### Why Used?

* Performance monitoring
* System information
* Server diagnostics

---

# ⚙️ Process Object

```javascript
console.log(process.cwd());
```

## What is `process`?

`process` is a **global object** in Node.js that provides information about the currently running Node.js process.

No `require()` is needed.

---

## Current Working Directory

```javascript
process.cwd()
```

Meaning:

Returns the folder from which Node.js is currently running.

Example

```text
C:\Users\Pawan\NodeJS
```

### Why Used?

* Find the current project directory
* Build file paths
* Load configuration files

---

## Process ID

```javascript
console.log(process.pid);
```

### Purpose

Returns the unique ID of the currently running Node.js process.

Example

```text
15248
```

Every running Node.js program has its own Process ID (PID).

---

# 🖥️ Console Module

```javascript
const { log, warn } = require("console");
```

Instead of writing:

```javascript
console.log("Hello");
console.warn("Warning");
```

you can write:

```javascript
log("Hello");
warn("Warning");
```

---

## Your Code

```javascript
log("custom Log");
warn("console.log");
```

Output

```text
custom Log
console.log
```

---

# 🔄 Overall Execution Flow

```text
Start Program
      │
      ▼
Import Modules
(fs, os, console)
      │
      ▼
Create File
(dummy)
      │
      ▼
Get OS Platform
      │
      ▼
Get Host Name
      │
      ▼
Get CPU Details
      │
      ▼
Get Current Folder
      │
      ▼
Get Process ID
      │
      ▼
Print Log Message
      │
      ▼
Print Warning
      │
      ▼
End Program
```

---

# 📋 Complete Code with Comments

```javascript
// Import File System Module
const fs = require("fs");

// Import Operating System Module
const os = require("os");

// Import log() and warn() from Console Module
const { log, warn } = require("console");

// Create a new file named "dummy"
// If the file exists, its content is replaced
fs.writeFileSync("dummy", "trying with module");

// Display Operating System name
console.log(os.platform());

// Display Computer Name
console.log(os.hostname());

// Display CPU Information
console.log(os.cpus());

// Display Current Working Directory
console.log(process.cwd());

// Display Process ID
console.log(process.pid);

// Print a normal log message
log("custom Log");

// Print a warning message
warn("console.warn message");
```

---

# 🎯 Memory Trick

```text
fs      → Files
os      → Operating System
process → Running Node.js Process
console → Print Messages
require → Import Module
```

---

# 📝 Interview Questions

### Q1. What is `require()`?

**Answer:** `require()` imports a built-in, local, or third-party module into a Node.js file.

### Q2. Why do we use the `fs` module?

**Answer:** To create, read, update, delete, and rename files.

### Q3. What does `os.platform()` return?

**Answer:** The operating system on which Node.js is running (e.g., `win32`, `linux`, `darwin`).

### Q4. What is `process.cwd()`?

**Answer:** It returns the current working directory from which the Node.js application is running.

### Q5. What is `process.pid`?

**Answer:** It returns the unique Process ID (PID) of the current Node.js process.

### Q6. Why use the `console` module?

**Answer:** It provides methods such as `log()`, `warn()`, and `error()` for displaying messages, warnings, and errors in the terminal.

---

## 💡 Quick Revision

```text
require()      → Import a module
fs             → File operations
writeFileSync  → Create/Overwrite a file
os.platform()  → Operating System
os.hostname()  → Computer name
os.cpus()      → CPU information
process.cwd()  → Current project folder
process.pid    → Process ID
log()          → Print normal messages
warn()         → Print warning messages
```

