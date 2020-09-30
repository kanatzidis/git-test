const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT, (err) => { if(err) throw err; console.log('listening') }); // recommended to always use PORT env var to bind server
