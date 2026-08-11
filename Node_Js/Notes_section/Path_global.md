
### Simple Notes

| Topic                | What is it?                                                     | Need to import? |
| -------------------- | --------------------------------------------------------------- | --------------- |
| **Path Module**      | Built-in Node.js module used to work with file and folder paths | **Yes**         |
| **Global Constants** | Built-in values already available in Node.js                    | **No**          |

### 1. Path Module

* `path` is a **built-in module** in Node.js.
* We **need to import/require it** before using it.
* It is used to work with **file and directory paths**.

```js
const path = require('path');

console.log(path.join('folder', 'file.txt'));
```

**Remember:**
👉 **Path = Built-in module + Need to import**

### 2. Global Constants

* Global constants are **already available** in Node.js.
* We **do not need to import** them.
* Examples: `__dirname`, `__filename`

```js
console.log(__dirname);
console.log(__filename);
```

**Remember:**
👉 **Global constants = Already available + No import**

**One-line difference:**

> **Path module needs to be imported, while global constants can be used directly without importing.**
