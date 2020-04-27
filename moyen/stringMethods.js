// length -- gives length
var someString = 'my name is moyen';
console.log(someString.length);

// .indexOf(string/char) -- gives location(index) of character or string, left to right search, -1 if not found
consloe.log(someString.indexOf('moyen'));

// .lastIndexOf(string/char) -- same as indexOf but search is from right to left
console.log(someString.lastIndexOf('n'));

// .toLowerCase() -- converts string to lower case -- does not change original string
var camelCaseString = "MyNameIsMoyen";
console.log(camelCaseString.toLowerCase());
console.log(camelCaseString);

// .toUpperCase() -- converts string to upper case
console.log(camelCaseString.toUpperCase());

// example of chaining functions/methods
camelCaseString.toUpperCase().indexOf("IS");

// + or .concat can be used to add strings
var addStrings = someString.concat(", and I'm learning JS");
var anotherString = someString + camelCaseString;
console.log(addStrings);
console.log(anotherString);

// .trim() -- removes spaces from beginning and end of string
"    the spaces are removed from the beginning/end only  ssfddsf    ".trim();

// .charAt(index) -- takes given index and searches string to find the char at given index
"some random words here".charAt(5);

// .charCodeAt(index) -- takes given index and searches string to find the char at given index but returns the ascii code of char
"some random words here".charCodeAt(5); // results in 114 decimal value of ascii char

// characters in string can also be accessed like in arrays 
var word = "mango";
word[0];
word[word.length-1];

// .split(char) -- will split/divide string based on char given, this will create an array from string
'my favorite fruit is mango'.split(''); // will split string into array, will have each character
// m y  f a v o r i t e  f r u i t  i s  m a n g o -- this can be acceesed as well
'my favorite fruit is mango'.split('')[0]; //m

// .replace(/char/g) replace char or parts of string, g is for global(search whole string)
"yummy".replace(/y/, 't'); // replaces first occurance of y with t
"yummy".replace(/m/g, 'd'); // replaces all occurances of m with d
"yuMMy".replace(/m/ig, 'd') // ingores case sensitivity and replaces all m with d

// .slice(startIndex, endIndex) return subtring from given start and end, does not include end index but until end-1
// ** with slice negative values are also accepted from start and end index
"moyen moyen".slice(0, 5); // returns moyen
"moyen moyen".slice(-5); // returns moyen starting from -5 to the end
"these are some words".slice(-10, -6); // returns some

// .substring(startIndex, endIndex) return substring based on given start and end index, negative values do not work 
"moyen moyen".substring(0, 5); // return moyen

// .substr(startIndex, length) return string based on given start index and length(how many characters to go on to)
// this also takes negative values
"moyen moyen".substr(0, 5);
"moyen moyen".substr(-5, 5); // also returns moyen, the second one

// .toString(radix/base(this is optional)) converts to string
var number = 124 + 123;
console.log(number.toString());
var num2 = 10;
number.toString(8);

//*********// 0.2 + 0.1 does not equal 0.3
// floating point answers are not accurate always and may give incorrect answer
//*********/


/////// isNaN(arg) -- checks if argument passed is number or not returns true or false
// can be useful when checking if input given is number or string
isNaN(5); //false
isNaN("5"); //false
isNaN("5" + "5" + 4); //false
isNaN("5" + "5" + 's'); // true
isNaN(true); // false, boolean values are converted to number 0 or 1
isNaN(false); // false, boolean values are converted to number 0 or 1