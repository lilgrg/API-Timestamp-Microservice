// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/timestamp/:date?", function (req, res) {
  var datestring = req.params.date;
  datestring = datestring.split(',');
  if ((new Date(datestring)).getTime() > 0) {
    var date = new Date(datestring);
    res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
  } else {
    datestring = req.params.date;
    var date = new Date(+datestring);
    res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
  }
});

//app.set('port', process.env.PORT || 3000);
// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});