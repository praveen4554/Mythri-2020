// closure is used to keep the function scope clean
function addNums(a){
    return function addNums2(b){
        return a + b;
    }
}

var firstNum100 = addNums(100);
var secondNum500 = addNums(500);

console.log(firstNum100(900));
console.log(secondNum500(1000));