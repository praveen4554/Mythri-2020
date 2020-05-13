// let allows to create variables that are only available within block scope
function something(){
    a = 23; // global scope
    let b = 100; // block scope
}

something();
this.a; // can still access a because its global
this.b; // undefined 

// use strict mode

const NUM = 100; // constant, can only access
NUM = 12; // DOES NOT WORK

// to return array of elements map can be used, whereas foreach you can only read but doesnt retur anything
var arrayOfObj = [
    {
        score: 67,
        avg: 77
    },{
        score: 41,
        avg: 10
    },{
        score: 92,
        avg: 90
    }
];

// to return an array containing values of score
var scores = arrayOfObj.map( (ele)=>{
    return ele.score;} );

// to return an array based on criteria filter can be used 
var fiftyAndUp = arrayOfObj.filter( (ele)=>{
    return ele.score >= 50;
});

// reduce can be used to sum values in array 
var array = [10,20,30];
array.reduce( (acc, cur)=>acc+cur); 

// string interpolation 
var somestring = 'hello ';
`${somestring} world`; // prints hello world
somestring + " world"; // same as above 

// spread operator
function spreadFunc(...something){
    console.log(something);
}
spreadFunc(array);

// spread can be used with set method for filtering duplicates
var array2 = [2,3,33,3,1,1,5,3,2,4];
[...new Set(array2)];

// array destruction
var arr = [100, 200];
[i, j] = arr;
// i === 100
// j === 200

var arr2 = [10, 20, 30, 40, 50, 60];
[i, j,...k] = arr;
// i 10 j 20
// k everything else    