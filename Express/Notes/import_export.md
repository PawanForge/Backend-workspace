# Node.js Modules: `require()` and `import`

## 1. What is a Module?

A **module** is a separate file or package that contains code which can be used in another file.

Example:

```js
const express = require('express');
```

Here, we are importing the **Express module/package** into our Node.js program.

---

# 2. Why do we need `require()` or `import`?

Node.js applications use many packages and files.

For example, if we want to use Express:

```js
const express = require('express');
```

or:

```js
import express from 'express';
```

Without importing Express, we cannot directly use:

```js
const app = express();
```

So, **`require()` and `import` are used to bring modules/packages into our program.**

---

# 3. `require()` — CommonJS

### Syntax

```js
const express = require('express');
```

`require()` is part of the **CommonJS module system**.

### Example

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3200);
```

### Important points

* `require()` → **CommonJS**
* Traditional Node.js module system
* Very common in older Node.js projects and tutorials
* Does not normally require `"type": "module"` in `package.json`

---

# 4. `import` — ES Modules

### Syntax

```js
import express from 'express';
```

`import` is part of the **ES Modules (ESM)** system.

### Example

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3200);
```

For a `.js` file, Node.js can be configured to use ES Modules by adding:

```json
{
    "type": "module"
}
```

in `package.json`.

### Important points

* `import` → **ES Modules**
* Modern JavaScript module system
* Uses `import` and `export`
* Commonly preferred for new projects

---

# 5. Main Difference

| `require()`                | `import`                  |
| -------------------------- | ------------------------- |
| CommonJS                   | ES Modules                |
| Traditional Node.js system | Modern JavaScript system  |
| `require()`                | `import`                  |
| `module.exports`           | `export`                  |
| Common in older projects   | Common in modern projects |

---

# 6. `require()` Example with Your Own File

### `math.js`

```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

### `server.js`

```js
const add = require('./math');

console.log(add(10, 20));
```

Output:

```text
30
```

Here:

```js
require('./math')
```

imports the `math.js` file.

---

# 7. `import` Example with Your Own File

### `math.js`

```js
export function add(a, b) {
    return a + b;
}
```

### `server.js`

```js
import { add } from './math.js';

console.log(add(10, 20));
```

Output:

```text
30
```

Here:

```js
import { add } from './math.js';
```

imports the `add` function.

---

# 8. Why is `import` Preferred?

For **new modern JavaScript/Node.js projects**, `import` is generally preferred because:

### 1. Modern standard

ES Modules are the standard module system of modern JavaScript.

### 2. Cleaner syntax

```js
import express from 'express';
```

is the modern way to import a package.

### 3. Works with `export`

You can easily create and share functions:

```js
export function add(a, b) {
    return a + b;
}
```

and use them:

```js
import { add } from './math.js';
```

### 4. Better consistency with modern JavaScript

The same `import/export` syntax is widely used in modern JavaScript applications.

---

# 9. Important: Don't Mix Them Randomly

If your project is using **CommonJS**, normally use:

```js
const express = require('express');
```

If your project is using **ES Modules**, normally use:

```js
import express from 'express';
```

The choice depends on the **module system of your project**.

---

# 10. Simple Way to Remember

```text
require()
     ↓
CommonJS
     ↓
Traditional Node.js
```

```text
import
   ↓
ES Modules
   ↓
Modern JavaScript
```

### One-line exam definition

> **`require()` and `import` are used to load modules or packages into a Node.js application. `require()` belongs to CommonJS, while `import` belongs to ES Modules (ESM).**
