const http=require('http');
 const userData=[
    {
    name:'Pawan',
    age:'20',
    email:'pawan@test.com'
    },{
        name:'Pranav',
        age:'21',
        email:'pranav@test.com'
    },{
        name:'Shivam',
        age:'22',
        email:'shivam@test.com'
    }
 ]
 http.createServer((req,resp)=>{
    resp.setHeader("content-Type","application/json");
    resp.write(JSON.stringify(userData));
    resp.end();

 }).listen(9300);