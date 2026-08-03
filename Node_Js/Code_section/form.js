// const http = require('http');

// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'text/html' });
//     console.log(req.url);
//     if(req.url=="/"){
//     resp.write(`
//         <form action="/submit" method="post">
//             <input type="text" placeholder="Enter name" name="name" />
//             <input type="text" placeholder="Enter email" name="email" />
//             <button type="submit">Submit</button>
//         </form>
//     `);
//     } else if(req.url=="/submit"){
//         resp.write('<h1>Data Submitted </h1>')
//     }
//     resp.end();
// }).listen(3100);

// console.log("Server running at http://localhost:3100");


const http = require("http");
const fs = require("fs");

http.createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
        if (err) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("Internal Server Error");
        } else {
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.write(data);
            resp.end();
        }
    });
}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
}); 