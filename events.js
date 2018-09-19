var events = require('events');
var eventEmitter = new events.EventEmitter();

var myevent = function(){
    console.log('I hear a scream');
}

eventEmitter.on('scream',myevent);

eventEmitter.emit('scream');












/*var fs = require('fs');
var rs = fs.createReadStream('./textfile.txt')
rs.on('open',function(){
    console.log("Opened!");
});
rs.on('close',function(){
    console.log("Closed!");
});*/
