// weather
const temp = 23;
const condition = "Clear";
const wind = 11;

// calculate wind chill

function windChill(temp, windSpeed) {
    return Math.round(35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16)))
}

if (temp >= 50 || wind < 3) {
 document.getElementById("windChill").innerHTML = `N/A`;
} else {
let wc = windChill(temp, wind);

document.getElementById("windChill").innerHTML = `${wc} °F`};

document.getElementById("temp").innerHTML = temp;
document.getElementById("condition").innerHTML = condition;
document.getElementById("wind").innerHTML = wind;


// dates in footer
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;
