// let r = "f3"
// let rAsInteger = parseInt(r, 16);

// console.log("rAsInteger", rAsInteger);

// let green = 244;
// console.log("green", green.toString);
// let numberAsString = "234";
// console.log(parseInt(numberAsString));


// let numberAsHex = "f3";
// let numberAsInteger = parseInt(numberAsHex, 16);

// let someNumberAsInteger = 255;
// let someBase16NumberAsString = someNumberAsInteger.toString(16);

// let simpleNumberAsString = "234";
// let simpleNumber = parseInt(numberAsString);



let hexString = "#c0ffee"
let r;

hexToRGB(hexString);

function hexToRGB(hexString) {
    const rgb = {
        r: parseInt((hexString.substring(1, 3)), 16),
        g: parseInt((hexString.substring(3, 5)), 16),
        b: parseInt((hexString.substring(5, 7)), 16),
    }
    console.log(rgb);
}

// rgb to hex


let sampleRGB = {
        r: 192,
        g: 255,
        b: 238,
    }
    // let sampleRGB = {
    //     r: 129,
    //     g: 230,
    //     b: 220,
    // }

rgbToHex(sampleRGB);

function rgbToHex(rgbObject) {
    const hexCode = "#" + rgbObject.r.toString(16) + rgbObject.g.toString(16) + rgbObject.b.toString(16);
    console.log(hexCode);
}

//  css to rgb
let sampleCSS = "rgb(192, 113, 11)";

cssToRGB(sampleCSS);

function cssToRGB(cssString) {
    let cssNumbers = cssString.substring(4, cssString.lastIndexOf(`)`)).split(", ");
    const rgb = {
        r: parseInt(cssNumbers[0]),
        g: parseInt(cssNumbers[1]),
        b: parseInt(cssNumbers[2]),
    }
    console.log(rgb);
}


// r /= 255;
//    g /= 255;
//    b /= 255;

//    let h, s, l;

//    const min = Math.min(r,g,b);
//    const max = Math.max(r,g,b);

//    if( max === min ) {
//      h = 0;
//    } else
//    if (max === r) {
//      h = 60 * (0 + (g - b) / (max - min) );
//    } else
//    if (max === g) {
//      h = 60 * (2 + (b - r) / (max - min) );
//    } else
//    if (max === b) {
//      h = 60 * (4 + (r - g) / (max - min) );
//    }

//    if (h < 0) {h = h + 360; }

//    l = (min + max) / 2;

//    if (max === 0 || min === 1 ) {
//      s = 0;
//    } else {
//      s = (max - l) / ( Math.min(l,1-l));
//    }
//    // multiply s and l by 100 to get the value in percent, rather than [0,1]
//    s *= 100;
//    l *= 100;

//    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing