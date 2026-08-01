// const arg=process.argv;
// console.log("_____,",arg[0]);
const http = require('http');

const arg = process.argv;
const port = Number(arg[2]);

http.createServer((req, resp) => {
    resp.write("testing");
    resp.end();
}).listen(port);