/* rock beats scissors 1-->3
scissors beats paper 3-->2
paper beats rock 2-->1*/
const rock = 1;
const paper = 2;
const scissors = 3;

let score_computer = 0;
let computer = document.getElementById('computer');
computer.innerHTML=score_computer;
let score_player = 0;
let player = document.getElementById('player');
player.innerHTML=score_player;

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
        return console.log("Tie!");
    }
        
    //Computer wins
    if (computerSelection === 1 && playerSelection === 3 ||
        computerSelection === 3 && playerSelection === 2 ||
        computerSelection === 2 && playerSelection === 1) {
        score_computer = score_computer + 1;
        return "Computer wins";
    }

    //Player wins
    if (computerSelection === 3 && playerSelection === 1 ||
        computerSelection === 2 && playerSelection === 3 ||
        computerSelection === 1 && playerSelection === 2) {
        score_player = score_player + 1;
        return "Player wins";
    }
    

    if (score_computer > score_player && score_computer >= 5){
        alert("Computer wins");
    } else if (score_computer < score_player && score_player >= 5) {
        alert("Player wins");
    }

    console.log("done");
    return 0;
} 