/**
 * Created by Tom on 11/02/2017.
 */
var http = require('http'); //http is a module
var server = http.createServer(engine)

function engine(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hey there. from node. request from page: ' + request.url);
}

server.listen(1337, () => console.log('server was hit'));