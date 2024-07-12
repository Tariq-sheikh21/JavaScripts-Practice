function listArrayItems(arr) {
 for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 }
}
let colors =["green", "red", "white", "black", "blue", "yellow", "pink"];
listArrayItems(colors);

function fruitsArrays(arr) {
    for(let i = 0; i < arr.length; i ++) {
        console.log(i, arr[i]);
    }
}

let fruits = ['Banana', 'Mango', 'Apple', 'Orange', 'Watermilon']
fruitsArrays(fruits);

//Practicing with exercise
function  letterFinder(word, match) {
    for(let i = 0; i < word.length; i ++){
        if (word[i] === match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test", "t");