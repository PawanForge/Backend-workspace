const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    if (req.url === "/") {

        fs.readFile("web/web.html", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(500, { "Content-Type": "text/plain" });
                resp.end("Internal Server Error");
                return;
            }

            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(data);

        });

    } else if (req.url === "/style.css") {

        fs.readFile("web/style.css", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(404, { "Content-Type": "text/plain" });
                resp.end("CSS file not found");
                return;
            }

            resp.writeHead(200, { "Content-Type": "text/css" });
            resp.end(data);

        });

    } else {

        resp.writeHead(404, { "Content-Type": "text/plain" });
        resp.end("Page Not Found");

    }

}).listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});