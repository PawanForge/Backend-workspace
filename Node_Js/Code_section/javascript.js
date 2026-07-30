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