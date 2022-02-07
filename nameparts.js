const fullName = "Kalle Schleicher Tiihonen"

const firstName = fullName.substring(0, fullName.indexOf(" "));
const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

console.log("_" + firstName + "_");
console.log("_" + middleName + "_");
console.log("_" + lastName + "_");