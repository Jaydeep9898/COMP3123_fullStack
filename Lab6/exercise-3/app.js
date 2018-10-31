var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://<admin>:<console1log>@ds147723.mlab.com:47723/local_library');

var port = process.env.PORT || 3000;


var Schema = mongoose.Schema;
var userSchema=new Schema({name: String, status: String});
var User = mongoose.model('User',userSchema);

var john = User({name:'John',status:'active'});

john.save(function(err){
    if(err) throw err;


    console.log('**** User Saved! ********');
});
app.listen(port);