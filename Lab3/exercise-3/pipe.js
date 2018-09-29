var request = require('request');
var fs = request('fs');

request('http://www.google.com',function(error,res,body){
    console.log('body:',body);
});