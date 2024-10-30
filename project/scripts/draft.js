const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
});

players = [
    {rank: "1",
    player:  "Charlie Condon",
    pos: "OF"},
    {rank: "2",
    player:  "Travis Bazzana",
    pos: "2B"},
    {rank: "3",
    player:  "JJ Wetherholt",
    pos: "SS"},
    {rank: "4",
    player:  "Chase Burns",
    pos: "P"},
    {rank: "5",
    player:  "Jac Caglianone",
    pos: "1B"},
    {rank: "6",
    player:  "Hagen Smith",
    pos: "P"},
    {rank: "7",
    player:  "Braden Montgomery",
    pos: "OF"},
    {rank: "8",
    player:  "Nick Kurtz",
    pos: "1B"},
    {rank: "9",
    player:  "Konnor Griffin",
    pos: "OF"},
    {rank: "10",
    player:  "Bryce Rainer",
    pos: "SS"}        
]

const playerList = document.querySelector('#playerList')
const button = document.querySelector('.button');
const teamList = document.querySelector('#teamList');

players.forEach(item => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    // li.textContent = item.player;
    button.textContent = item.player;
    li.append(button);
    playerList.appendChild(li);
    button.onclick = () => {
        alert(`You have selected ${item.player}.  Please click ok to confirm selection`); // Example action on click
        teamList.appendChild(li);
        playerList.removeChild('li');
    };
});

// dates in footer
const d = new Date();
const currentyear = d.getFullYear();
document.getElementById("draftyear").innerHTML = currentyear;
document.getElementById("currentyear").innerHTML = currentyear;

const modified = new Date(document.lastModified);
const date = modified.toLocaleDateString()
document.getElementById("lastmodified").innerHTML = date;