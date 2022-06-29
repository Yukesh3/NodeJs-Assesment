const http = require('http');

const Server =http.createServer(function(req, res) {
    res.write("Hello Postman 😁")
    
    res.write(JSON.stringify({Name:"Yukesh"}))

    res.end("<h1>Close Postman 😁</h1>")
});
Server.listen(4000)

