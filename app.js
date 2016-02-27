var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.render('index', { title: 'HLS', message: 'HTPP Live Streaming'});
  // res.send('Hello World!');
});

app.listen(3000, function () {
  // console.log('Example app listening on port 3000!');
});

// Serve static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/files'));

// Virtual path
app.use('/static', express.static('files'));

// Template engine
app.set('view engine', 'jade');
