const http = require("http");
const fs = require("fs");

const port = process.argv[2] || 1000;

http.createServer((req, resp) => {

    console.log(req.url);

    // HTML
    if (req.url === "/") {

        fs.readFile("Notes_app/notes.html", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                resp.end("HTML Not Found");
                return;
            }

            resp.writeHead(200, {
                "Content-Type": "text/html"
            });

            resp.end(data);
        });

    }

    // CSS
    else if (req.url === "/style.css") {

        fs.readFile("Notes_app/style.css", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                resp.end("CSS Not Found");
                return;
            }

            resp.writeHead(200, {
                "Content-Type": "text/css"
            });

            resp.end(data);
        });

    }

    // JavaScript
    else if (req.url === "/script.js") {

        fs.readFile("Notes_app/script.js", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                resp.end("JS Not Found");
                return;
            }

            resp.writeHead(200, {
                "Content-Type": "text/javascript"
            });

            resp.end(data);
        });

    }

    // Wrong URL
    else {

        resp.writeHead(404, {
            "Content-Type": "text/plain"
        });

        resp.end("404 Not Found");
    }

}).listen(port);

console.log(`Server running on http://localhost:${port}`);