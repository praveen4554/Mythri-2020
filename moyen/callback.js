function hello(someFunction){
    setTimeout(
        ()=>{
            console.log('hello'); // executes this before calling someFunction 
            someFunction();
        }
    ,1000);
}

function world(){
    console.log('world');
}