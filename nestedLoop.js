//Nested loop in Js
for(let i = 1; i <= 2; i ++){
    for(let j = 1; j <= 5; j++){
        console.log("week" + i + "day" + j);
    }
}

console.log('This is nested Loop console output');


for(let i = 2023; i < 2025; i ++){
    console.log(i);
    for(let j = 6; j < 9; j ++){
        console.log("-----" , j);
    }
}

for (let firstNum = 0; firstNum < 2; firstNum++) {
    for(let secondNum = 0; secondNum < 10; secondNum ++){
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

for (let i = 100; i > 10; i = i - 10) {
    for (let j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

let cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (let i = 0; i < 7; i++) {
    let styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

for (let i = 1; i < 10; i++){
    if(i === 1){
        console.log("Gold Medal");
    } else if(i === 2){
        console.log("Silver Medal");
    } else if(i === 3){
        console.log("Bronze Medal");
    } else{
        console.log(i);
    }
}

for(let i = 1; i < 10; i++){
    switch(i){
        case 1: 
           console.log("Cricket Player");
           break;

        case 2: 
           console.log("Football Player");
           break;
        case 3: 
           console.log("Hockey Player");
           break;
        default:
            console.log(i);
    }
}


for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}