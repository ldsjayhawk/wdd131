// dates in footer
const d = new Date();
const currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const modified = new Date(document.lastModified);
const date = modified.toLocaleDateString()
document.getElementById("lastmodified").innerHTML = date;