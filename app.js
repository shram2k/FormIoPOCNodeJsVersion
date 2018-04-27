var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'TalentFirst/TalentFirstV3'))); //https://expressjs.com/en/starter/static-files.html

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + 'index.html'));
});
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

//handle unhandled exception
process.on('uncaughtException', (err) => {
  console.log(err);
});

// setTimeout(() => {
//   nonexistentFunc();
// }, 500);



