// setTimeout allows to call a function after a certain amount of time
setTimeOut(()=>(console.log("my name is moyen")), 5000);



function printHello(){
    console.log("hello");
}

// setInterval(functionName, time) allows to set time between each function call 
var setIntTest = setInterval(printHello, 5000); // calls printHello function after every 5 seconds

// clearInterval(functionName) can be used to stop setInterval
clearInterval(setIntTest);


for(var i=0; i<5; i++){
    setTimeout(()=>{console.log(i)}, 5000); // this will only print 5 because method is invoked after 5 seconds
}

// to change to self invoked function 
for(var i=0; i<5; i++){
    (function(index){
        setTimeout(()=>(console.log(index)), 5000);
    })(i);
}