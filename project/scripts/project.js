// hover icon in nav bar
const baseball = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// baseball.addEventListener('mouseover', (event) => { });
//     event.target.style.color = "orange";

// dates in footer
const d = new Date();
const currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const modified = new Date(document.lastModified);
const date = modified.toLocaleDateString()
document.getElementById("lastmodified").innerHTML = date;