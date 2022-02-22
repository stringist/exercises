// Exercise - Capitalization function

capitalize("petEr");

function capitalize(string) {
    let capitalized = string[0].toUpperCase() + string.substring(1).toLowerCase();
    // console.log(capitalized);
    return capitalized;

}
// Exercise - Name-parts function
getNameParts("Kalle Tiihonen");

function getNameParts(string) {
    const firstName = string.substring(0, string.indexOf(" "));
    const lastName = string.substring(string.lastIndexOf(" "));
    if (string.indexOf(" ") === string.lastIndexOf(" ")) {
        const middleName = null;
        // console.log(firstName, middleName, lastName);
    } else {
        const middleName = string.substring(
            string.indexOf(" "),
            string.lastIndexOf(" ")
        );
        // console.log("_" + firstName + "_", middleName, lastName);
    }
}
// Exercise - FullName function

fullName("Potter", "Harry", "James");

fullName("Potter", "Harry");

fullName("Harry", "Potter");

fullName("Potter", "Harry", "James", "Pottypotpot");
console.log(fullName("Potter", "Harry", "James", "Potty"));

function fullName(lastName, firstName, middleName) {
    //   const fullName = firstName + " " + middleName + " " + lastName;
    //   console.log(fullName);
    let orderedFullName;

    if (middleName) {
        let orderedFullName = `${firstName} ${middleName} ${lastName}`
            // console.log(orderedFullName);
        return orderedFullName;
    } else {
        let orderedFullName = `${firstName} ${lastName}`
            // console.log(orderedFullName);
        return orderedFullName;
    }
}

let r = "f3"
let rAsInteger = parseInt(r, 16);

// console.log("rAsInteger", rAsInteger);

let green = 244;
// console.log("green", green.toString);
let numberAsString = "234";
// console.log(parseInt(numberAsString));


let numberAsHex = "f3";
let numberAsInteger = parseInt(numberAsHex, 16);

let someNumberAsInteger = 255;
let someBase16NumberAsString = someNumberAsInteger.toString(16);

let simpleNumberAsString = "234";
let simpleNumber = parseInt(numberAsString);


// ff = 55 full color