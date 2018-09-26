var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function(){
    console.log('cal me.');
}
var alarm = function(){
    console.log('Alaram has been triggered!');
}
eventEmitter.on('call',fn);
eventEmitter.once('alarm',alarm);
eventEmitter.emit('call');
eventEmitter.emit('alarm');
eventEmitter.emit('call');
eventEmitter.emit('alarm');