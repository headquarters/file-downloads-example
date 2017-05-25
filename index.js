'use strict';
var express = require('express');
var path = require('path');
var helmet = require('helmet');
var app = express();

app.use(helmet({
  frameguard: false,
  // will force IE11 to prompt the user to download a PDF instead of previewing it
  ieNoOpen: false
}));

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/iframe', function(req, res) {
  res.sendFile(path.join(__dirname, 'iframe.html'));
})

app.get('/file', function(req, res) {
  res.download('static/sample.docx');
});

app.get('/view-file', function(req, res) {
  const options = {
    headers: {
      'Content-Disposition': 'inline; filename="sample.pdf"'
    }
  };

  res.sendFile(path.join(__dirname, 'static/sample.pdf'), options);
});

app.listen(5000, function() {
  console.info('Server listening on port 5000');
});