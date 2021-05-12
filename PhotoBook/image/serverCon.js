const http = require('http');

const hostname = '192.168.0.4';
const port = 3000;

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    res.end('hello world');
});

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}`);
});