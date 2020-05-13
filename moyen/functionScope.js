var number = 100;

function printNum(){
    var number = 50;
    console.log(number); // prints 50

    // self executing function, do not have to call it from outside
    // will automatically remove memory after finishing 
    (function selfExecute(){
        var number = 20000;
        console.log(this.number); // prints 100, this keyword reads from parent always
        console.log(number); // 20000
    })();
}


var human = {
    name: "moyen khan",
    printFullName: function(){
        console.log(this.name);
    }
}

// .call invokes immdeatly // this does not change the actual object
human.printFullName.call( {name: "mango apple"} ); // prints name value immeditely but cannot store data

// .bind can be invoked later
// bind can be used to similarly as call but data can be stored and recalled 
var fullName = human.printFullName.bind({name: "shakria shakira"});
fullName();

// .apply can be used similar to call but takes in array object as the argument 

