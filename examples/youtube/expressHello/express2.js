/**
 * Created by Tom on 18/02/2017.
 */
var express = require('express');
var app = express();

app.get('/', (request, response) => {
   response.sendfile()
});