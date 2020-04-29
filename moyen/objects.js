// some object examples

var person = { // person is a object 
    name: "moyen", // name is a key
    favFruit: "mango", // favFruit is a key
}

person.name; // gives value of name
person['name']; // gives value of name

var personArray = [ // json object
    { 
        name: "moyen",
        favFruit: "mango",
    },
    { 
        name: "mike",
        favFruit: "apple",
    }
];

// to access some keys in array of objects
personArray[0].name;
personArray[1].name;

// to search through arrays .find() can be used on arrays 
personArray.find( (ele)=> ele.name === 'moyen' ); // searches array of objs and finds where name is moyen
personArray.find(function(ele){
    return ele.name === 'moyen';
});

// to find index of element can use .findIndex()
personArray.findIndex(function(ele){
    return ele.name === 'moyen';
});


// to get list of keys in object Object.keys(objectName);  
Object.keys(personArray); // returns array(strings) of keys from personArray object

// to get list of values in object
Object.values(personArray); // returns array(strings) of values from personArray object

// to view keys in array or array or keys
for(var x=0; x<Object.keys(personArray).length; x++){
    console.log(Object.keys(personArray)[x]);
}

// to get a string with the whole object
JSON.stringify(personArray); // does not change original object

// to copy an object // this is deep copy, new object is not refrencing the original object
var personArray2 = JSON.parse(JSON.stringify(personArray)); // have to parse the stringified object

// another way to deep copy 
var personArray2 = Object.assign({}, personArray);


// shallow copy of object
var object1 = { name: "apple" };
var object2 = object1;  // object2 is pointing to the same memory location as object1
object1.name = "mango"; // now object2.name is also mango 

// to not allow modyfying of object
Object.freeze(object1); // now object1 and object2 cant be modified

// to check if object is freezed
Object.isFrozen(object1); // true
Object.isFrozen(object2); // true

object1.name = "sfasjdkfjksdh"; // does not change name value in object 1

 
var obj3 = {name:"moyen"};
obj3.fruit = "mango"; // this will add new property called fruit 
delete obj3.fruit; // deletes fruit property from object

// to stop objects from adding new properties **still change existing property values
Object.seal(obj3); // now new properties cannot be added
Object.isSealed(obj3); // true


