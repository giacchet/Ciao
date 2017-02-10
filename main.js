var http = require("http");

http.createServer(function (request, resonse) {
response.writehead(200, {Content-Type': 'text/plain'};
respose.end('Hello word\n);
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
