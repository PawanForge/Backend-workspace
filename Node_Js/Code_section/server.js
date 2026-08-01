const http=require('http');
http.createServer((req,resp)=>{
    // resp.write("These side Pawan");
    resp.write("<h1>Yes Your  Brother is  Here</h1>");
resp.end("Hello");
}).listen(4800);

const https=require('http');
https.createServer((req,resp)=>{
    // resp.write("These side Pawan");
    resp.write("<h2>Yes Your  Brother is  Here 2</h2>");
resp.end("Hello");
}).listen(4500);
