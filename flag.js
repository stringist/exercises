"use strict";

// haveIDrowned(200, true, true);

// function haveIDrowned(seaLevel, wetSuit, positionIsUp) {
//     if (seaLevel >= 200) {
//         let returnFlag = true;
//         if (!wetSuit) {
//             returnflag = true;
//         } else if (seaLevel < 100) {
//             if (!positionIsUp) {
//                 returnFlag = true;
//             }
//         }
//     }
//     return returnFlag;
// }

// function haveIDrowned(seaLevel, wetSuit, positionIsUp) {
//     if (seaLevel >= 200 || !wetSuit) {
//         returnFlag = true;
//     } else { returnFlag = false; }
// } else if (seaLevel < 100) || !positionIsUp)
// }

const years = [
    900, 1900, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008,
    2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
];
const leapYears = years.filter(isALeapYear);
console.log(leapYears);


function isALeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 400 === 0 || year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}