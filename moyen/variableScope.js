var a = 20; // global // value of a can also be seen using window.a
function print(){
    console.log(a); // a can still be accessed because it's a global variable
}

function printB(){
    var b = 30; // b is created locally, cannot be accessed outside
    console.log(b);
}
console.log(b); // gives error b is not defined 


var c = 10; //creates global variable
function printC(){
    c = 30; // changes value of c locally in the function
    console.log(c); // prints 30
}
console.log(c); // prints 10 which is the global variable 

///// JS uses Hoisting -- this is when declarations of variables/functions are taken to the top and are initialized /////
/// console.log(someVariable); 
/// var someVariable;
/// printSomething(); // this will still run the function even though it was defined later
/// function printSomething(){ console.log("something"); }