// mon 14 feb
// don't need to know what parameters are called, only what order they come in
// let number1 = 2;
// let theOtherNumber = 35;
// let result;

// multiply(2, 3);

// function multiply(num1, num2) {
//     result = num1 * num2;
// }

// console.log("result", result);

// let firstName = "Kalle";

// function sayHello(firstName) {
//     console.log(`hello ${firstName}`);
// }

// let sayWhat = function(firstName) { console.log(`what ${firstName}`); }

// let sayBye = firstName => { console.log(`bye ${firstName}`) }

// // functions declared as variables can't be called before they're defined
// sayWhat("but");
// sayHello("joe");
// sayBye("guy");

//sayHello2("George");

// function sayHello2(firstName2) {
//     console.log(`hello ${firstName2}`)
// }

// function presentPet(firstName, animaltype, animalName) {
//     console.log(
//         `My name is ${firstName}. I have an ${animaltype} called ${animalName}.`
//     );
// }

// presentPet();
greeting("Billy");

function greeting(firstName) {
    let theGreeting = `hello ${firstName}`;
    console.log(theGreeting);
}