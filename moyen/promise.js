var promise = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        resolve('moyen');
    }, 2000);
});

promise.then((response)=>{console.log(response);});


var promise = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        rejected('moyen');
    }, 2000);
});

// need to try catch method 
