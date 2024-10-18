// dates in footer
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;