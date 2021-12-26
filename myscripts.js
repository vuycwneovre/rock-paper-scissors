/* rock beats scissors 1-->3
scissors beats paper 3-->2
paper beats rock 2-->1*/
const rock = 1;
const paper = 2;
const scissors = 3;

let score_computer = 0;
let computer = document.getElementById('computer');

let score_player = 0;
let player = document.getElementById('player');


// player input
function playerPlay(input) {
    console.log(input);
    return input;
}
const playerSelection = playerPlay();


function playRound(playerSelection) {
    // random generator for computer
    function computerPlay(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const computerSelection = computerPlay(1,3);
    console.log(computerSelection);
    
    // Tie
    if (computerSelection === playerSelection){
        console.log("Tie!");
    }
        
    //Computer wins
    if (computerSelection === 1 && playerSelection === 3 ||
        computerSelection === 3 && playerSelection === 2 ||
        computerSelection === 2 && playerSelection === 1) {
        score_computer++;
        computer.innerHTML=score_computer;
        console.log("Computer wins");
    }

    //Player wins
    if (computerSelection === 3 && playerSelection === 1 ||
        computerSelection === 2 && playerSelection === 3 ||
        computerSelection === 1 && playerSelection === 2) {
        score_player++;
        player.innerHTML=score_player;
        console.log("Player wins");
    }
    

    if (score_computer > score_player && score_computer >= 5){
        alert("Computer wins, press restart");
    } else if (score_computer < score_player && score_player >= 5) {
        alert("Player wins, press restart");
    }

    return 0;
} 

function restart () {
    score_player = 0;
    score_computer = 0;
    player.innerHTML = 0;
    computer.innerHTML = 0;
}