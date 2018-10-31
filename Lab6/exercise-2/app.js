var express = require('express');
var app = express();
var router = express.Router();
app.listen(3000);

app.get('/html', function (req, res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/json',function(req,res){
    res.json({fristname: 'John', lastname: 'Smith'});
});

router.get('/toronto+team', function (req, res){
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>')
})

app.use('./app.js',app1)