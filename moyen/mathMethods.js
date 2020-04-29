Math.PI; // 3.14.... constant value
Math.sqrt(81); // 9
Math.pow(4, 2); // 16


Math.abs(-2); // 2

Math.ceil(2.1); // 3 
Math.floor(2.1); // 2
Math.round(4.5); // 5 
Math.round(2.3); // 2
Math.round(2.6); // 3

Math.max(40, 233, 100, 100, 400); // 400
Math.min(40, 233, 100, 100, 400); // 40

Math.random(); // gives random decimal number between 0 and 1

// .toFixed(digitsAfterDecimal) -- can be used to specify how many digits after decimal
// ** toFixed(numberOfDigits) gives resilt in string
Math.random().toFixed(4); // 4 digits after decimal
Math.random().toFixed(2); // 2 digits
parseFloat(Math.random().toFixed(2)); // will generate random number and conver to number
parseInt(Math.random().toFixed(5)); // will generate random number and convert to number, this wont show anything bcause number gets rounded

// .toPrecesion(totalNumberOfDigits) -- used to specify total number of digits
// output is still string -- need to convert
var number = 1.234556;
number.toPrecision(1); // 1
number.toPrecision(3); // 1.23
number.toPrecision(5); // 1.2346


