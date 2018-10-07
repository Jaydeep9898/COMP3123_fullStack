module.exports = {
    multiplyTwoNumbers:function(x, y){
        if(Number.isInteger(x)&&Number.isInteger(y)){
            return (x*y);
        }
        else{
            return "Not an Integer.";
            
        }
    },
    evenDoubler:function(x){
        if(Number.isInteger(x)){
            if(x%2==0){
                return x*x;
            }
            else{
                return 0;
            }
        }
        else{
            return "Not an Integer.";
        }
    }
}