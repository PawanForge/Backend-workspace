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
const querystring = require("querystring");

http.createServer((req, resp) => {

    // Home Page
    if (req.url === "/" && req.method === "GET") {

        fs.readFile("./html/form.html", "utf-8", (err, data) => {
            if (err) {
                resp.writeHead(500, { "Content-Type": "text/plain" });
                return resp.end("Internal Server Error");
            }

            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(data);
        });

    }

    // Form Submit
    else if (req.url === "/submit" && req.method === "POST") {

        let body = "";

        // Data chunk
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            console.log("Raw Data:");
            console.log(body);

            // String to object conversion
            const formData = querystring.parse(body);

            console.log("Parsed Data:");
            console.log(formData);

            console.log("Name:", formData.name);
            console.log("Email:", formData.email);
            console.log("Age:", formData.age);

            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(`
                <h1>Data Submitted Successfully</h1>
                <p>Name: ${formData.name}</p>
                <p>Email: ${formData.email}</p>
                <p>Age: ${formData.age}</p>
            `);

        });

    }

    else {
        resp.writeHead(404, { "Content-Type": "text/plain" });
        resp.end("Page Not Found");
    }

}).listen(3200, () => {
    console.log("Server running at http://localhost:3200");
});