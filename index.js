var express = require('express')
var app = express()
var fs = require('fs')



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('index.html')
})

app.get('/file', function (req, res) {
  
  var data = fs.readFileSync("./test.json")
  res.send(data)
})

app.listen(3000, function() {
	console.log('Server is running on port 3000');
})



  
