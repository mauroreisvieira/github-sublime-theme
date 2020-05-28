const http = require('http');

const port = 8080;

const startServer = () => {
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }).listen(port);
}

module.exports = {
  start: startServer,
  port
}
