/**
 * Created by ravi.hamsa on 7/16/16.
 */
var express = require('express');
var app = express();

/*app.get('/', function (req, res) {
    res.send('Hello World!');
});*/

var proxy = require('express-http-proxy');

app.use(express.static('public'));

// app.use('/api', proxy('ec2-54-169-221-202.ap-southeast-1.compute.amazonaws.com:10000'));

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});