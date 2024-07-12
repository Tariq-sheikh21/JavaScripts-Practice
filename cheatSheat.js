let greet = "Hello ";
let character = greet.charAt(3);
console.log(character);


//The concat() method joins two strings:  
let firstName = 'Ali';
let lastName = 'Zafar';

let fullName = firstName.concat(' ', lastName);

console.log(fullName);

//The indexOf returns the location of the first position that matches a character: 
let sentence = 'hello how are you'

let position = sentence.indexOf('o');
console.log(position);

//The split method chops up the string into an array of sub-strings:
let sentence1 = "hello how are you";

let word = sentence1.split(' ')
console.log(word);

// To change the text to UpperCase or LowerCase

let sentence2 = 'how are you';

let toUpperCase = sentence2.toUpperCase();

console.log(toUpperCase);


let sentence3 = 'HELLO I AM TARIQ';

let toLowerCase = sentence3.toLowerCase();

console.log(toLowerCase);

let person = 'Aslam';
let lastIndex = person.lastIndexOf('s');
console.log(lastIndex);