const http = require('http')
const OS_APIConnector = require('./osinfo')
const hostname = '127.0.0.1'
const port = 3000
var os = require('os');
var fireWall = require('./osinfo/firewall.js');
var SystemInfo = require('./osinfo/systeminfo.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json'});

  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    res.end('No data found');
  }

  else if(req.url === '/api/systeminfo') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var s1 = SystemInfo.getSysteminfo();
    console.log(s1);

    res.end(JSON.stringify(s1));
  }
  else if(req.url === '/api/userinfo') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var s1 = SystemInfo.getUserInfo();
    console.log(s1);

    res.end(JSON.stringify(s1));
  }
  else if(req.url === '/api/firewall') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var s2 = fireWall.getStatues();
    console.log(s2);

    res.end(JSON.stringify(s2));
  }
 
  else {
        // request not found, send back 404
        var errorMessage = 'Error - page not found';
        res.writeHead(404, errorMessage);
        res.end(errorMessage);
  }
  
}).listen(1337, '127.0.0.1');