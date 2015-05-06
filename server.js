var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/fonts', express.static(path.join(__dirname, '/fonts')));
app.use('/video', express.static(path.join(__dirname, '/video')));

app.listen(4000);