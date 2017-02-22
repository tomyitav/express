/**
 * Created by Tom on 22/02/2017.
 */
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));
app.use(multer({dest:'./tmp/'}).any());

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/file_upload', function (req, res) {
    console.log(req.files)
    console.log('filename: ')
    console.log(req.files[0])
    console.log(req.files[0].filename);
    console.log(req.files[0].path);
    console.log(req.files[0].type);
    var file = __dirname + "/" + req.files[0].filename;

    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].filename
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})