"use strict";

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

// length
const len = firstName.length;

console.log(`${firstName} is ${len} characters long.`);

// length and [index]
const firstLetter = firstName[0];
console.log(`The first letter of ${firstName} is ${firstLetter}.`);

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