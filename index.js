var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/sort.html'));
});

app.get('/quick_sort', function(req, res) {
    res.sendFile(path.join(__dirname + '/quick_sort.html'));
});

app.get('/bubble_sort', function(req, res) {
    res.sendFile(path.join(__dirname + '/bubble_sort.html'));
});

app.get('/heap_sort', function(req, res) {
    res.sendFile(path.join(__dirname + '/heap_sort.html'));
});
app.get('/insertion_sort', function(req, res) {
    res.sendFile(path.join(__dirname + '/insertion_sort.html'));
});

app.listen(8000);