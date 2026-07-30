# 🧑‍💻 JavaScript Practice Code (Before Node.js)

```javascript
// ==============================
// Variables
// ==============================

const userName = "Pawan";
let age = 21;
let isStudent = true;

// ==============================
// Condition
// ==============================

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

// ==============================
// Loop
// ==============================

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// ==============================
// Function
// ==============================

function greet(name) {
    return `Welcome ${name}`;
}

console.log(greet(userName));

// ==============================
// Arrow Function
// ==============================

const square = (num) => num * num;

console.log(square(5));

// ==============================
// Array
// ==============================

const fruits = ["Apple", "Mango", "Banana"];

fruits.forEach((fruit) => {
    console.log(fruit);
});

// ==============================
// Object
// ==============================

const user = {
    name: "Pawan",
    age: 21,
    city: "Lucknow"
};

console.log(user.name);

// ==============================
// Destructuring
// ==============================

const { name, city } = user;

console.log(name);
console.log(city);

// ==============================
// Spread Operator
// ==============================

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

// ==============================
// Rest Operator
// ==============================

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));

// ==============================
// Template Literal
// ==============================

console.log(`My name is ${userName}`);
```

---

# 📦 Module Practice (Most Important for Node.js)

### 📄 user.js

```javascript
const userName = "Pawan";
const age = 21;

module.exports = {
    userName,
    age
};
```

### 📄 app.js

```javascript
const data = require("./user");

console.log(data);
```

Output:

```text
{ userName: 'Pawan', age: 21 }
```

---

### Import Specific Values (Recommended)

```javascript
const { userName, age } = require("./user");

console.log(userName);
console.log(age);
```

Output:

```text
Pawan
21
```

---

# 📁 Recommended Folder Structure

```text
JavaScript-Practice/
│
├── app.js
├── user.js
└── package.json   (after learning npm)
```

---

# 🎯 Final JavaScript Checklist Before Node.js

```text
✅ Variables (let, const)
✅ Data Types
✅ Operators
✅ Conditions (if, else, switch)
✅ Loops (for, while, for...of)
✅ Functions
✅ Arrow Functions
✅ Arrays
✅ Objects
✅ Destructuring
✅ Template Literals
✅ Spread & Rest Operators
✅ module.exports
✅ require()
✅ Basic JSON
✅ Small Practice Program
```

> **Rule to remember:** If you understand this checklist and can write these examples without looking at the notes, you're well prepared to start learning Node.js, Express.js, and backend development.
