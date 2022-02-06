"use strict";

// backslashes to 'escape', retain formatting/text without starting or stopping a string
console.log("\u{1f385}");

console.log("\\");

// line break
const longline = " wow such an extremely \n very very very very very very very very long line";

console.log(longline);

// Template Literals: accent grave ``

const name = "Peter";
const drink = "Pepsi";

// with backticks
console.log(`Hello ${name}, would you like a ${drink}?`);

// with classic concatenation
console.log("Hello " + name + ", would you like a " + drink + "?");

// or as variable after others are declared
const text = `Hello ${name}, would you like a ${drink}?`;

console.log(text);

// backticks also allow line-breaks without escaping!

// const firstName = "Peter";
// const petSpecies = "cat";
// const petName = "Mandu";

// console.log(`My name is ${firstName}.
// I have a ${petSpecies} called ${petName}.`);

const firstName = "Kalle";
const petSpecies = "dog";
const petName = "Tapio";

console.log(`My name is ${firstName}.
I have a ${petSpecies} called ${petName}.`);


// String methods - like a function that belongs to an object, and affects the object in some way
// .trim - removes space  and line breaks from beginning and end of string

const str1 = " There is   space here \n  wow  \n  "
const str2 = str1.trim();

// underscores make it easier to see if there are spaces

console.log(`_${str1}_`);
console.log(`__${str2}_`);

// method parameters
const exampleFullName = "Peter Heronimous Lind";
const exampleFirstName = exampleFullName.substring(0, 5);
const lastSomething = exampleFullName.substring(5);

console.log(exampleFullName, exampleFirstName + "_", "_" + lastSomething);

// substring exercises
const wizard = "Albus Percival Wulfric Brian Dumbledore";
const totalLength = wizard.length;
console.log(`The total number of characters is ${totalLength}.`);

const index2 = wizard[2];
console.log(`The character at index 2 is ${index2}.`);

const index6 = wizard[6];
console.log(`The character at index 6 is ${index6}.`);

const firstD = wizard.length - 10;
console.log(`the index of the first "D" in "dumbledore" is ${firstD}`);
console.log(wizard.indexOf("D"));

const lastLetter = wizard[wizard.length - 1];
console.log(`The index of the last 'e' in 'Dumbledore' is ${totalLength}.`);
// why doesn't this match?
console.log(wizard.lastIndexOf("e"));

console.log("_" + wizard.substring(0, 5) + "_");
console.log("_" + wizard.substring(29) + "_");
console.log("_" + wizard.substring(15, (15 + 7)) + "_");
console.log("_" + wizard.substring(14, (15 + 8)) + "_");
console.log("_" + wizard.substring(25, 28) + "_");
console.log("_" + wizard.substring(2, 5) + "_");