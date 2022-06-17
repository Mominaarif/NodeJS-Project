const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome to the server");
// });

// Using Event Emitter API

const server = http.createServer()
// emit request event
// subscribe to / listen for it / response to it
server.on('request', (req, res) => {
    res.end('Welcome to the server with Event Emitter API');
})

server.listen(5000);
