// Scope in Js
let gobalVar = 'i am global variable';

function exampleFunction(){
    let funtionalVar = 'i am functional varibel';
    
    if(true){
        let blockVar = 'i am block variable';
        console.log(gobalVar);
        console.log(funtionalVar);
        console.log(blockVar);
    }

    console.log(gobalVar);
    console.log(funtionalVar);
    // console.log(blockVar); not accessible here 
}

exampleFunction();
console.log(gobalVar);
// console.log(funtionalVar); not accessible here 
// console.log(blockVar); not accessible


 