const http = require('http');

const age = 25;

const server = http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");

    resp.write(`
        <html>
        <head>
            <title>Response</title>
        </head>
        <body>
            <h1>Hello..</h1>
            <h2>` + age + `</h2>
            <h3>` + new Date().toLocaleString() + `</h3>
        </body>
        </html>
    `);

    resp.end();
    process.exist();
});

server.listen(4800);