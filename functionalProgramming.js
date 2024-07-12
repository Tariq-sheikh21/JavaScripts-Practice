// Example of functional programming 
const shoesPrice = 200;
const stateTaxRate = 1.1;

const totalPrice = (price, total) => price * total

finalPrice = totalPrice(shoesPrice, stateTaxRate);

console.log(finalPrice);

// Second Example with currencyChange
let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

const convertCurrency = (amount, rate) => amount * rate

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

 //Function calling
 function greet(name){
    console.log('Hello,'+ name + '!');
 }

 greet('Tariq Sheikh')

 // Recursive Function
function factorial(n){
    if(n === 0){
        return 1
    }
    return n * factorial (n - 1);
}

console.log(factorial(5));