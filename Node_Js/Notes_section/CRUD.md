

# 1. Importing the File System Module

```js
const fs = require('fs');
```

## What it does

* `require()` loads a built-in Node.js module.
* `'fs'` stands for **File System**.
* It provides functions to create, read, update, and delete files.

Think of it like:

```text
Node.js
   │
   ├── HTTP Module
   ├── Path Module
   ├── OS Module
   └── FS Module  ← Used here
```

Without this line, Node doesn't know how to work with files.

---

# 2. Reading Command-Line Arguments

```js
const operation = process.argv[2];
```

## What is `process`?

`process` is a **global object** provided by Node.js.

It contains information about the currently running Node.js program.

Example:

```text
process
│
├── process.argv
├── process.exit()
├── process.cwd()
├── process.env
```

---

## What is `argv`?

`argv` means:

> **Argument Vector**

It stores everything typed after the `node` command.

Example:

```bash
node fsCurd.js write apple.txt "Hello"
```

Node creates:

```js
process.argv = [
    "C:\\Program Files\\node.exe",
    "fsCurd.js",
    "write",
    "apple.txt",
    "Hello"
];
```

Index meanings:

| Index | Value                |
| ----- | -------------------- |
| 0     | Node executable path |
| 1     | Current JS file      |
| 2     | Operation            |
| 3     | File name            |
| 4     | Content              |

So,

```js
const operation = process.argv[2];
```

becomes

```js
operation = "write";
```

---

# 3. IF Statement

```js
if(operation==="write")
```

Checks:

```text
Is operation equal to "write"?
```

If yes,

run the write code.

Otherwise,

move to

```js
else if(...)
```

---

# 4. Write Operation

```js
const name = process.argv[3];
```

Gets the file name.

Example

```bash
node fsCurd.js write apple.txt Hello
```

Result

```js
name = "apple.txt";
```

---

```js
const content = process.argv[4];
```

Gets the text to write.

Result

```js
content = "Hello";
```

---

```js
fs.writeFileSync(`file/${name}`, content);
```

This creates or overwrites a file.

Syntax

```js
fs.writeFileSync(path, data);
```

Parameters

| Parameter | Meaning              |
| --------- | -------------------- |
| path      | Where to create file |
| data      | What to write        |

Example

```js
fs.writeFileSync("file/apple.txt","Hello");
```

Result

```text
file
 └── apple.txt
```

Contents

```text
Hello
```

---

# 5. Console Message

```js
console.log("File created successfully.");
```

Prints

```text
File created successfully.
```

to the terminal.

---

# 6. Read Operation

```js
else if(operation=="read")
```

Runs only when

```bash
node fsCurd.js read apple
```

---

```js
const name=process.argv[3];
```

Gets

```text
apple
```

---

```js
const fullName="file/"+name+".txt";
```

Creates

```text
file/apple.txt
```

This is called **string concatenation**.

---

```js
fs.readFileSync(fullName,"utf-8");
```

Reads file contents.

Syntax

```js
fs.readFileSync(path,encoding)
```

Why `"utf-8"`?

Without it,

Node returns

```text
<Buffer 48 65 6c 6c 6f>
```

With `"utf-8"`

Node converts the bytes into a readable string:

```text
Hello
```

---

```js
console.log(data);
```

Displays file content.

---

# 7. Update Operation

```js
else if(operation==="update")
```

Runs when

```bash
node fsCurd.js update apple " Good"
```

---

```js
fs.appendFileSync(fullName,content);
```

Adds text at the end.

Suppose

Before

```text
Hello
```

After

```text
Hello Good
```

Syntax

```js
fs.appendFileSync(path,data);
```

It **doesn't replace** existing content. It appends to it.

---

# 8. Delete Operation

```js
else if(operation==="delete")
```

Runs when

```bash
node fsCurd.js delete apple
```

---

```js
fs.unlinkSync(fullName);
```

Deletes the file.

Syntax

```js
fs.unlinkSync(path);
```

Before

```text
apple.txt
```

After

```text
Deleted
```

---

# 9. Template Literals

Example

```js
`file/${name}`
```

Instead of

```js
"file/"+name
```

Modern JavaScript uses

```js
`Hello ${name}`
```

which is easier to read.

---

# 10. What does Sync mean?

Functions ending with **Sync** are **synchronous**.

Example

```js
fs.writeFileSync(...)
console.log("Done");
```

Execution order

```text
Write file
     ↓
Finished
     ↓
Print Done
```

Node waits until writing is complete.

---

Without Sync

```js
fs.writeFile(...)
console.log("Done");
```

Execution

```text
Start writing
Print Done
Finish writing later
```

The program doesn't wait.

---

# 11. CRUD Mapping

| CRUD   | Function              |
| ------ | --------------------- |
| Create | `fs.writeFileSync()`  |
| Read   | `fs.readFileSync()`   |
| Update | `fs.appendFileSync()` |
| Delete | `fs.unlinkSync()`     |

---

# 12. Complete Flow

```text
User runs command
        │
        ▼
process.argv stores arguments
        │
        ▼
operation = process.argv[2]
        │
        ▼
if(operation=="write")
        │
        ├── writeFileSync()
        │
        ▼
else if(read)
        │
        ├── readFileSync()
        │
        ▼
else if(update)
        │
        ├── appendFileSync()
        │
        ▼
else if(delete)
        │
        ├── unlinkSync()
        │
        ▼
Program Ends
```

---

# Key Terms

| Term                              | Meaning                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| `require()`                       | Imports a module into your program.                                                |
| `fs`                              | Node.js File System module for working with files.                                 |
| `process`                         | Global object representing the running Node.js process.                            |
| `process.argv`                    | Array containing command-line arguments.                                           |
| `const`                           | Declares a variable whose binding can't be reassigned.                             |
| `if` / `else if`                  | Chooses which block of code to execute based on a condition.                       |
| `writeFileSync()`                 | Creates a new file or overwrites an existing one.                                  |
| `readFileSync()`                  | Reads the contents of a file.                                                      |
| `appendFileSync()`                | Adds new data to the end of an existing file.                                      |
| `unlinkSync()`                    | Deletes a file from the file system.                                               |
| `Sync`                            | Synchronous—Node waits for the operation to finish before moving to the next line. |
| `utf-8`                           | Character encoding used to convert file bytes into readable text.                  |
| Template Literal (`` `...${}` ``) | Modern way to build strings with embedded variables.                               |
| `console.log()`                   | Prints output to the terminal.                                                     |

