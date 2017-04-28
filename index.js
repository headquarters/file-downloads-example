'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: '/tmp' });

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/forms', function(req, res) {
    res.sendFile(path.join(__dirname, 'forms.html'));
});

app.get('/file', function(req, res) {
  res.download('static/sample.docx');
});

app.get('/get', function(req, res) {
  console.log('GET req.body', req.body);
  res.send(req.body);
});

app.post('/post', upload.any(), function(req, res) {
  console.log('POST req.body', req.body);
  res.send(req.body);
});

app.listen(5000, function() {
    console.info('Server listening on port 5000');
});