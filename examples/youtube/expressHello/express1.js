/**
 * Created by Tom on 18/02/2017.
 */
var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/helloThere', (request, response) => {
    response.send('Hello from express..!');
})

app.listen(1337, () => {
    console.log('Listening on port 1337');
})