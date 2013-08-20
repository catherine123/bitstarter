 var express = require("express");
  var app = express();
var fs=require('fs');
var htmlfile= "index.html";
app.get('/',function (request,response){
 var html=fs.readFileSync(htmlfile).toString();
 response.send(html);
});

var port=process.env.PORT || 8080;
app.listen(port,function(){
 console.log("listening on"  + port);
});
app.on('error', function (err) {
  console.log( 'error', err);
});
