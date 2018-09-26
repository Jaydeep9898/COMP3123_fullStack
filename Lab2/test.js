var ft = require('./AreNumberEqual.js');
var fd =require('./Calculator.js');
module.exports = {
    comparer:function(a,b){
        return ft.AreNumberEqual(a,b);
    },

    calculator:function(a,b){
        console.log("comparing two numbers: "+a+","+b);
        if(this.comparer(a,b)){
            console.log("number are equal");
            console.log(fd.Add(a,b));
        }
        else{
            console.log("number are not equal");
            console.log(fd.Subtract(a,b));
        }
    }

};
