// const http=require('http');

// const file=require('fs')

// http.createServer(function(request,response){
//     fs.readFile('./index.html',function(err,data){
//         response.write(data);
//         response.end();
//     },
// }).listen(8000)
// console.log("DONE");

const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    fs.readFile('./index.html', function(err, data) {
        if (err) {
            response.writeHead(200,{"Content-Type":'text/html'});
            console.write(err);
            response.end('Error');
        } else {
            response.writeHead(200,{"Content-Type":'text/html'});
            response.write(data);
            response.end();
        }
    });
}).listen(8000);

console.log("Server is running on http://localhost:8000/");
