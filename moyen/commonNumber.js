var arrayOne = [5, 6, 10];
var arrayTwo = [10, 23, 5, 6];
var finalArray = [10, 5, 6, 200, 32, 23];
var arr = [];

for(var i=0; i<finalArray.length; i++){
	if( (arrayOne.indexOf(finalArray[i]) > -1) && (arrayTwo.indexOf(finalArray[i]) > -1) )
      arr.push(finalArray[i]);
}

console.log(arr);