// hover icon in nav bar
const baseball = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');




temples.forEach(temple => {
    const templecard = document.getElementById('templecard');
    templecard.innerHTML += 
    `<div>
    <h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Size: ${temple.area} sq ft </p>
    <figure>
    <img src=${temple.imageUrl} alt="Kanssas City Temple ">
    </figure>
    </div>`;
}
);

// baseball.addEventListener('mouseover', (event) => { });
//     event.target.style.color = "orange";

// dates in footer
const d = new Date();
const currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const modified = new Date(document.lastModified);
const date = modified.toLocaleDateString()
document.getElementById("lastmodified").innerHTML = date;