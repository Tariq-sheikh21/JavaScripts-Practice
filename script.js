/* Arthimatic operators in Js
   + addition
   - subtraction
   * multiplication
   / division
*/

/* Comparision Operator in JS
  > Greater than
  < Less than
  == equal
  = assign
*/


console.log(2 + 2);
console.log(20 - 10);
console.log(2 * 2);
console.log(20 / 2);
console.log(20 > 2);
console.log(10 < 2);
console.log(20 == 20);


// The logical AND operator in JavaScript: &&

let currentTime = 10;

console.log(currentTime > 9 && currentTime < 12);

console.log(true && true);

//The logical OR operator in JavaScript: ||

let number = 7;

console.log(number < 10 || number > 17);


//The logical NOT operator: !

let petHungry = true;
console.log('Pet is Hungry:', !petHungry);

// Conditional Statmensts in JS
let result = 50;
if (result > 30) {
  console.log("Congratulation's You Passed!");
} else{
  console.log("Unfortunatly You Failed!");
}

let food = 'Hot'
if (food == 'Hot'){
  console.log("To hot");
} else if(food == "cold"){
  console.log('To cold');
}
else{
  console.log('Just right');
}


let place = 'first';

if(place == 'first'){
  console.log("Gold");
} else if(place == "second"){
  console.log("Silver");
} else if(place == "third"){
  console.log("Bronze");
}else{
  console.log("No medal");
}

let age = 'first';
if(age >= 65){
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18){
    console.log("Each month you get a salary");
} else if (age < 18 ){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numerical");
}