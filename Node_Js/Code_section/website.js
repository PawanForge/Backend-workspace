
const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    // =========================
    // HOME
    // =========================

    if (req.url === "/") {

        fs.readFile("web/web.html", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                resp.end("Home page error");
                return;
            }

            resp.writeHead(200, {
                "Content-Type": "text/html"
            });

            resp.end(data);
        });

    }


    // =========================
    // CART
    // =========================

    else if (req.url === "/cart") {

        fs.readFile("web/cart.html", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                resp.end("Cart page error");
                return;
            }

            resp.writeHead(200, {
                "Content-Type": "text/html"
            });

            resp.end(data);
        });

    }


    // =========================
    // PRODUCTS
    // =========================

    else if (req.url === "/product") {

        fs.readFile("web/product.html", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                resp.end("Product page error");
                return;
            }

            resp.writeHead(200, {
                "Content-Type": "text/html"
            });

            resp.end(data);
        });

    }


    // =========================
    // CSS
    // =========================

    else if (req.url === "/style.css") {

        fs.readFile("web/style.css", "utf-8", (error, data) => {

            if (error) {
                resp.writeHead(404, {
                    "Content-Type": "text/plain"
                });

                resp.end("CSS not found");
                return;
            }

            resp.writeHead(200, {
                "Content-Type": "text/css"
            });

            resp.end(data);
        });

    }


    // =========================
    // 404
    // =========================

    else {

        resp.writeHead(404, {
            "Content-Type": "text/plain"
        });

        resp.end("Page Not Found");
    }

}).listen(4000, () => {

    console.log("Server running at http://localhost:4000");

});

