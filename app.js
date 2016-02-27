var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.render('index', { title: 'hey', message: 'Hello'});
  // res.send('Hello World!');
});

app.listen(3000, function () {
  // console.log('Example app listening on port 3000!');
});

// Server static files
app.use(express.static(__dirname + '/public'));
// Template engine
app.set('view engine', 'jade');
