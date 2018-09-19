var moment = require('moment');
function greet(){
    var i = 10;
    var wrapped = moment(new Date());
    while (i != 0){
        console.log(i+'. Hello Wolrd');
        //console.log(getCurrentDateAndTime());
        console.log(wrapped);
        i--;
    }
}
function getCurrentDateAndTime(){
    var d = new Date();
    return "Current Date: "+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" Current Time: "+d.getHours()+":"+d.getMinutes();
}
greet();