
function receivesAFunction(callBackFunction){
    return callBackFunction();
}

function returnsANamedFunction(){
    function namedFunction() {
        console.log(`my function`);
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return (function(){

    });
}

const sum = (num1, num2) => num1 + num2

const result = sum(3,4);
console.log(result);