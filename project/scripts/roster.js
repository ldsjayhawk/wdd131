players = 
    [
        {pos: "C", player: "Freddy Fermin", contract: "P-2026", salary: "0.5", imageUrl: "images/fermin.webp"},
        {pos: "1B", player: "Nolan Schanuel", contract: "P-n/a", salary: "0.5", imageUrl: "images/schanuel.webp"},
        {pos: "2B", player: "Jose Iglesias", contract: "2025", salary: "1", imageUrl: "images/iglesias.webp"},
        {pos: "SS", player: "Ketel Marte", contract: "2027", salary: "10", imageUrl: "images/marte.webp"},
        {pos: "3B", player: "Ty France", contract: "2027", salary: "14", imageUrl: "images/france.webp"},
        {pos: "OF", player: "Brandon Marsh", contract: "2029", salary: "0.5", imageUrl: "images/marsh.webp"},
        {pos: "OF", player: "Brandon Nimmo", contract: "2025", salary: "5", imageUrl: "images/nimmo.webp"},
        {pos: "OF", player: "Giancarlo Stanton", contract: "2025", salary: "10.5", imageUrl: "images/stanton.webp"},
        {pos: "SP", player: "Zac Gallen", contract: "2027", salary: "6.5", imageUrl: "images/gallen.webp"}
    ]


	players.forEach(player => {
		const playercard = document.getElementById('playercard');
		playercard.innerHTML += 
    	`<div class="player">
		<figure>
        <img src=${player.imageUrl} loading="lazy" width="100px" height="150px">
        </figure>
		<h2>${player.pos}</h2>
    	<p>Player: ${player.player}</p>
		<p>Contract: ${player.contract}</p>
    	<p>Salary: $${player.salary}m</p>
		</div>`;
    });

// dates in footer
const d = new Date();
const currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

const modified = new Date(document.lastModified);
const date = modified.toLocaleDateString()
document.getElementById("lastmodified").innerHTML = date;