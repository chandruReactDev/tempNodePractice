const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to Home Page');
    }
    if(req.url === '/about'){
        res.end('Here is our history');
    }
})

server.listen(8080);