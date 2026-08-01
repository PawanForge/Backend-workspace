const http=require('http');
http.createServer((req,resp)=>{
    // console.log(req.url);
    // console.log(req.headers.host);
    // console.log(req.method);
    if(req.url=="/"){
        resp.write("<h1>Hello url</h1>")
    }
    else if(req.url=="/login"){
        resp.write("<h1>Login Page</h1>")
    }
    else{
        resp.write("Other Page")
    }
    resp.write("<h1>Home page</h1>")
    resp.end();
}).listen(4500)