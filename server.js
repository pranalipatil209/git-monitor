/**
 * @author : pranalipatil209
 * @file : server.js
 * @purpose : server for monitoring user logs on git using git API*/

/**
 * @define : dependencies */
var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,port = process.env.PORT || 8080;

/**
 * middleware*/
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/',function(req,res){
   console.log(req.url);
    res.sendFile(__dirname+ '/index.html');
});

/**
 * starting server*/
app.listen(port,function(){
   console.log('server started @'+port,app.get('env'));
});