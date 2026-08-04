
# Node.js File System (fs)

The **`fs` (File System)** module is used to create, read, update, delete, and rename files.

```javascript
const fs = require("fs");
```

---

# 1. fs.writeFileSync() (Synchronous)

## Definition

`fs.writeFileSync()` creates a new file or overwrites an existing file **synchronously**.

* Blocks the execution until the file operation is completed.
* The next line of code will execute only after writing is finished.

### Syntax

```javascript
fs.writeFileSync(path, data);
```

### Parameters

* **path** → File name or file path.
* **data** → Content to write into the file.

---

## Example 1: Create a File

```javascript
const fs = require("fs");

fs.writeFileSync("notes.txt", "Welcome to Node.js");

console.log("File Created");
```

### Output

```
File Created
```

### Created File (notes.txt)

```
Welcome to Node.js
```

---

## Example 2: Overwrite Existing File

```javascript
const fs = require("fs");

fs.writeFileSync("notes.txt", "New Content");

console.log("Updated");
```

### Result

Old content:

```
Welcome to Node.js
```

New content:

```
New Content
```

> `writeFileSync()` replaces the existing content.

---

## Execution Flow

```javascript
const fs = require("fs");

console.log("Start");

fs.writeFileSync("demo.txt", "Hello");

console.log("End");
```

### Output

```
Start
End
```

### Explanation

```
Start
   ↓
writeFileSync()
(Program waits)
   ↓
File Created
   ↓
End
```

The program **waits** until the file is completely written.

---

## Advantages

* Easy to understand
* Good for small scripts
* Simple debugging

## Disadvantages

* Blocks the event loop
* Slower for large applications
* Not recommended for servers

---

# 2. fs.writeFile() (Asynchronous)

## Definition

`fs.writeFile()` creates or overwrites a file **asynchronously**.

* Does **not** block the program.
* The remaining code executes immediately.
* Uses a callback function to notify when writing is complete.

---

## Syntax

```javascript
fs.writeFile(path, data, callback);
```

### Parameters

* **path** → File name
* **data** → Data to write
* **callback** → Runs after writing is complete

---

## Example 1

```javascript
const fs = require("fs");

fs.writeFile("notes.txt", "Hello Node.js", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File Created");
});
```

### Output

```
File Created
```

---

## Example 2: Non-Blocking Nature

```javascript
const fs = require("fs");

console.log("Start");

fs.writeFile("demo.txt", "Learning Node", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File Written");
});

console.log("End");
```

### Output

```
Start
End
File Written
```

---

## Execution Flow

```
Start
   ↓
writeFile()
   ↓
Node continues immediately
   ↓
End
   ↓
File writing completes
   ↓
Callback executes
   ↓
File Written
```

Notice that **"End"** prints before **"File Written"** because writing happens in the background.

---

## Error Handling

```javascript
const fs = require("fs");

fs.writeFile("notes.txt", "Node.js", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("Success");
});
```

---

## Advantages

* Non-blocking
* Better performance
* Recommended for web servers and large applications
* Allows multiple operations simultaneously

## Disadvantages

* Slightly more complex because of callbacks (or Promises/async-await)

---

# Comparison Table

| Feature        | `writeFileSync()`       | `writeFile()`                    |
| -------------- | ----------------------- | -------------------------------- |
| Type           | Synchronous             | Asynchronous                     |
| Blocks Program | ✅ Yes                   | ❌ No                             |
| Uses Callback  | ❌ No                    | ✅ Yes                            |
| Performance    | Slower for large apps   | Faster for scalable apps         |
| Best For       | Small scripts, learning | Real-world applications, servers |

---

# Demo Comparing Both

## Synchronous

```javascript
const fs = require("fs");

console.log("1");

fs.writeFileSync("sync.txt", "Synchronous File");

console.log("2");
```

### Output

```
1
2
```

Execution waits until the file is written before printing `2`.

---

## Asynchronous

```javascript
const fs = require("fs");

console.log("1");

fs.writeFile("async.txt", "Asynchronous File", (err) => {
    if (err) throw err;

    console.log("File Created");
});

console.log("2");
```

### Output

```
1
2
File Created
```

Here, the program does **not** wait for the file-writing operation to finish.

---

# Interview Questions

**Q1. What is the difference between `writeFileSync()` and `writeFile()`?**

* `writeFileSync()` is synchronous and blocks the execution until the file is written.
* `writeFile()` is asynchronous, does not block execution, and uses a callback when the operation completes.

**Q2. Which method is recommended for production applications?**

* `fs.writeFile()` because it is non-blocking and scales better for applications handling many requests.

**Q3. What happens if the file already exists?**

* Both `writeFileSync()` and `writeFile()` overwrite the existing file by default.

---

## Summary

* **`fs.writeFileSync()`** → Synchronous, blocking, simple, good for scripts and learning.
* **`fs.writeFile()`** → Asynchronous, non-blocking, callback-based, recommended for real-world Node.js applications.
* Both methods create a new file if it doesn't exist and overwrite it if it already exists.
