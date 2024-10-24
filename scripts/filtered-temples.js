const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
];


temple.templeName = "San Diego California";
temple.location = "San Diego, California, United States";
temple.dedicated = "25 April 1993";
temple.area = 72000;
temple.imageUrl
= "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/1280x800/san-diego-temple-765109-wallpaper.jpg";

temple.templeName = "Hong Kong China";
temple.location = "Hong Kong, China";
temple.dedicated = "26 May 1996";
temple.area = 51921;
temple.imageUrl =
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/1200x1920/hong-kong-china-temple-lds-39528-wallpaper.jpg";

temple.templeName = "St. Louis Missouri";
temple.location = "St. Louis, Missouri, United States";
temple.dedicated = "1 June 1997";
temple.area = 58749;
temple.imageUrl =
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-louis-missouri/1280x800/st-louis-temple-lds-903363-wallpaper.jpg";

	temples.foreach(temple => {

		document.getElementById("name").innerHTML = temple[templename]."San Diego";
		document.getElementById("location").innerHTML = temple[location]."San Diego";
		document.getElementById("dedicated").innerHTML = temple[dedicated]."San Diego";
		document.getElementById("area").innerHTML = temple[area]."San Diego";
		document.getElementById("url").innerHTML = temple[imageurl]."San Diego";
		
		for ([key, value] of temples) {
			document.getElementById("name").innerHTML = temple[templename]
		}
	});

	let temple = 



// dates in footer
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;



