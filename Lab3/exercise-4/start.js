exports.handleCounter = function (result){
    console.log('The callback count is'+ result);
}

exports.callbackLoop = function (num,handleCounter){
    for (let i = 0 ; i < num ; i++){
        handleCounter(i);
    }
    console.log('***** exiting callbackLoop ******')
}

