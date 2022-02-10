// indexOf

// The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

// console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"


// String.prototype.lastIndexOf()

// The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';

// console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"


// 'for' loops
// let counter = 0;
// for (lcounter = 0; counter < 10; counter++) {
//     console.log(counter);
// }
// console.log(`after the loop, counter is ${counter}`);

// 0 to 9
// for (let counter = 0; counter <= 9; counter++) {
//     console.log(counter);
// }

// 1 to 10
// for (let counter = 1; counter <= 10; counter++) {
//     console.log(counter);
// }

// from 10 to 0
// for (let counter = 10; counter >= 0; counter--) {
//     console.log(counter);
// }

// 10 to 0, liftoff
// for (let counter = 10; counter >= 0; counter--) {
//     console.log(counter);
// }
// console.log("liftoff");

//  1 to 19, odd numbers only
// for (let counter = 1; counter <= 19; counter += 2) {
//     console.log(counter);
// }
// console.log("liftoff");

// 1 to 16777216, doubles each time
// for (let counter = 1; counter <= 16777; counter *= 2) { console.log(counter); }

// 111 to 138 in steps of 3
// for (let counter = 111; counter <= 138; counter += 3) { console.log(counter); }

// 100 to 0 in steps of 10
// for (let counter = 100; counter >= 0; counter -= 10) { console.log(counter); }