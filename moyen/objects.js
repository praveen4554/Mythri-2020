// some object examples

var person = { // person is a object 
    name: "moyen", // name is a key
    favFruit: "mango", // favFruit is a key
}

person.name; // gives value of name
person['name']; // gives value of name

var personArray = [
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
