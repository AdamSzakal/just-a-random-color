const convert = require('color-convert');

// setup
const body = document.querySelector("body");
const codeContainer = document.querySelector("code");
const hue = Math.floor( Math.random()*360);
const saturation = 70;
const lightness = 55;
const bgHSL = [hue, saturation, lightness];

// get bg color
const bgRGB = convert.hsl.rgb(hue, saturation, lightness);
const bgHex = convert.hsl.hex(hue, saturation, lightness);
console.log(bgRGB);
console.log(bgHex);

// set bg color
body.style.backgroundColor = "#" + bgHex;

// print bg color codes
codeContainer.innerHTML += "#" + bgHex + "<br>" + "RGB(" + bgRGB + ")" + "<br>" + "HSL(" + bgHSL + ")";
