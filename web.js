var fs  = require('fs');

//var bufcontent = fs.readFileSync('index.html');
//var len = bufcontent.length;


//console.log(bufcontent.toString('utf8',0,len));

var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

  //response.send('Hello World21!');
   var bufcontent = fs.readFileSync('index.html');
   var len = bufcontent.length;
   response.send(bufcontent.toString('utf8',0,len)); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



/*
fs.readFile('index.html','utf-8',function (err,data){
    if (err) throw err;
    console.log(data);
});
*/

//var bufcontent  = new Buffer();
/*
var bufcontent = fs.readFileSync('index.html');
var len = bufcontent.length;

console.log(bufcontent.toString('utf8',0,len));*/
