"use strict";

// const people = ["Harry", "Ron", "Neville", "Hermione"];

// people.sort();
// people.reverse();
// console.log(people);

const animals = [
    { name: "Mandu", type: "cat" },
    { name: "Mia", type: "cat" },
    { name: "Leeloo", type: "dog" },
    { name: "Fredder", type: "dog" },
];

function compareName(a, b) {
    if (a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
}

animals.sort(compareName);
console.log(animals);

let filteredArray = animals.filter((animal) => {
    if (animal.type === "cat") {
        return true;
    } else {
        return false;
    }
});

console.log(filteredArray);

filteredArray.sort(compareName);