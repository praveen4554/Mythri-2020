// string reverse prototype
String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

// example 
'moyen'.reverse();

// sum of array prototype
Array.prototype.sum = function(){
    var sum = 0;
    for(var i=0; i<this.length; i++){
        sum += this[i];
    }
    
    return sum;
}