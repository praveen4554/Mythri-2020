// .reverse() -- reverses array  
var array = [1, 2, 3, 5, 6];
array.reverse(); // reverses array

// can add to an index furter up the chain but will create empty spaces
// example
array[6] = 10;
console.log(array); // will show that array[5] is empty or undefined

// to delete element in array delete can be used
delete array[6]; // will delete element in index 6

// to check if index is empty 
array[6] === undefined;


// .join(charSeprator) -- use to join arrays into string, can add how to seprate characters 
array.join(); // will output 1,2,3,5,6
array.join(''); // will give 12356
array.join('a'); // will give 1a2a3a5a6

// .toString() will always seprate characters using comma
array.toString(); // will give 1,2,3,5,6

// array methods can be used in chain with string to get specific output
var someString = "my name is moyen";
var charArray = someString.split(''); 
var charArrayReversed = someString.split('').reverse(); // split string into array of chars then reverse the array
var stringAfterChaining = someString.split('').reverse().join(''); // split string into array of chars then reverse the array and added chars back together


var s = [133, 42, 29, 12];
// .push(value) -- adds element to end of array
s.push(233);
// can also use arrar[array.length] = someValue to add element to the end;
s[s.length] = 500;
// .pop() -- removes last element
s.pop();
// .shift() -- removes element in the beginning
s.shift(); // removes 133 which is the first element
// .unshift(value) -- adds element in the beginning
s.unshift(133); // adds 133 back in the beginning

// Arrays are considered objects in JS, to check if something is array
Array.isArray(s); // true

// .slice(startIndex, endIndex) -- only outputs between given indexes, does not change the array

// Arrays can be edited with splice
// .splice(startIndex, numberOfElementsToDelete, replaceValue(s)) -- can be used to edit array permenantly 

// foreach array can be used to iterate through array 
array.forEach( (element, index)=> {
    console.log("Index " + index + " " + "Element " + element);
});