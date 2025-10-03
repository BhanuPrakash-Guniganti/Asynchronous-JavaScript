// how to produce a promise

let myPromise = new Promise(function(resolve, reject) {
    const a =4;
    const b =3;

    setTimeout(() => {
        if(a === b) {
            resolve("Values are equal");
        } else {
            reject("Values are not equal");
        }    
    }, 1000);
} )

// pending state
//console.log(myPromise);
// consuming promise
//Fulfilled- then method


myPromise.then(function(result) {
console.log(result) 
}) //Fulfilled State

myPromise.catch(function(FailedResult) {
    console.log(FailedResult)
}) //Rejected State

// Your promise wil get settled