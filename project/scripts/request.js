const visits = document.querySelector(".visits");

let requests = Number(window.localStorage.getItem("requests-ls")) || 0;

if (requests !== 0) {
	visits.textContent = `Visits ${requests}`;
} else {
	visits.textContent = `Thank you for submitting your request to be the GM of !`;
}

requests++;
localStorage.setItem("requests-ls", requests);