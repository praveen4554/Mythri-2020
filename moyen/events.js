// onsubmit -- used with forms with combination method and action
// onclick -- button event when clicked
// onmouseover -- event when hovering over button
// onmouseout -- event when out of scope of where the button is 
// onfocus -- when focused in input box/element
// onblur -- when out of foucus of input box/element


// Function to check if numbers are greater than 0
function validate(){
    var num1 = parseInt(document.getElementById('first-number').value);
    var num2 = parseInt(document.getElementById('second-number').value);
    if(num1 < 0)
        console.log('first numner is less than 0');
    if(num2 < 0)
        console.log('first numner is less than 0');
}

function mouseOver(){
    console.log("Mouse is now hovering on top of button");
}

function mouseOut(){
    console.log("Mouse is now outside of button");
}


//console.log("Focused on this element after clicked on");
function focusedOn(){
    document.getElementById('first-number').style.background = "pink";
    document.getElementById('second-number').style.background = "pink";
}


//console.log("Now out of the scope of the element");
function outOfScope(){
    document.getElementById('first-number').style.background = "lightblue";
    document.getElementById('second-number').style.background = "lightblue";
}