const fs = require("fs");

console.log("Start");

const users = fs.readFileSync("users.txt", "utf8");
console.log(users);

const products = fs.readFileSync("products.txt", "utf8");
console.log(products);

const cities = fs.readFileSync("cities.txt", "utf8");
console.log(cities);

console.log("End");

const fs = require("fs");

console.log("Start");

fs.readFile("users.txt", "utf8", (err, data) => {
    console.log("Users:", data);
});

fs.readFile("products.txt", "utf8", (err, data) => {
    console.log("Products:", data);
});

fs.readFile("cities.txt", "utf8", (err, data) => {
    console.log("Cities:", data);
});

console.log("End");

function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Users"), 2000);
    });
}

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Products"), 3000);
    });
}

function getCities() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Cities"), 1000);
    });
}

Promise.all([
    getUsers(),
    getProducts(),
    getCities()
]).then(result => {
    console.log(result);
});

 function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Users"), 2000);
    });
}

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Products"), 3000);
    });
}

function getCities() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Cities"), 1000);
    });
}

async function loadData() {
    const users = await getUsers();
    console.log(users);

    const products = await getProducts();
    console.log(products);

    const cities = await getCities();
    console.log(cities);
}

loadData();

function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Users"), 2000);
    });
}

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Products"), 3000);
    });
}

function getCities() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Cities"), 1000);
    });
}

async function loadData() {
    const [users, products, cities] = await Promise.all([
        getUsers(),
        getProducts(),
        getCities()
    ]);

    console.log(users);
    console.log(products);
    console.log(cities);
}

loadData();