// weather
const temp = 23;
const condition = "Clear";
const wind = 11;

// calculate wind chill
function windChill(temp, wind) {
     return 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16))
};

let wc = windChill(temp, wind);

document.getElementById("temp").innerHTML = temp;
document.getElementById("condition").innerHTML = condition;
document.getElementById("wind").innerHTML = wind;
document.getElementById("windChill").innerHTML = Math.round(wc);


// dates in footer
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;
