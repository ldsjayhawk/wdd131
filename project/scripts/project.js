// hover icon in nav bar
const baseball = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// baseball.addEventListener('mouseover', (event) => { });
//     event.target.style.color = "orange";

// dates in footer
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;
document.getElementById("draftYear").innerHTML = currentyear;


const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;