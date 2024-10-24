const reviews = document.querySelector(".numReviews");

let visits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (visits !== 0) {
	reviews.textContent = `Review #: ${visits}`;
} else {
	reviews.textContent = `Thank you for submitting your first review!`;
}

visits++;
localStorage.setItem("visits-ls", visits);

