/**
 * @author : pranalipatil209
 * @file : server.js
 * @purpose : server for monitoring user logs on git using git API*/

/**
 * @define : dependencies */
var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,request = require('request')
    ,port = process.env.PORT || 8086;

/**
 * middleware*/
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use('/',function(req,res){
//    console.log(req.url);
//     res.sendFile(__dirname+ '/index.html');
// });

/**
 * get the commits of github repository of respective user
 * */
app.get('/',function(req,res){
    console.log('inside demo');
    request.get('https://api.github.com/repos/pranalipatil209/git-monitor/commits',{headers:{'User-Agent':'pranalipatil209'}},function(err,data,body){
        res.json({"data":JSON.parse(data.body)});
        var a = JSON.parse(data.body);
        console.log(a[0].commit);
        console.log(a.length);

        // console.log("data"+JSON.stringify(data.body));

    });
});

/**
 * starting server*/
app.listen(port,function(){
   console.log('server started @'+port,app.get('env'));
});