try{
    throw new ReferenceError();
} catch(err){
    console.log(err);
    console.log('there was a refrence error');
}

console.log('my program does not stop');

// let user = {
//     name: 'Ahmad',
//     age: 23,
//     email: 'ahmad@gmail.com'
// }

//ReferenceError
console.log(user.age);

//SyntaxError
// let a 'A quick brown for jumped over the lazy dog'

//TypeError
"hello".pop() 