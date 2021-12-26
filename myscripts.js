/* rock beats scissors 1-->3
scissors beats paper 3-->2
paper beats rock 2-->1*/


const rock = 1;
const paper = 2;
const scissors = 3;




/* computerPlay generates 
random rock, paper, scissors

each thing i.e. rock, paper...
has one number associated */


// Computer
function computerPlay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const computerSelection = computerPlay(1,3);


/* playerPlay
player inputs rock, paper or scissors
in the console, save input in playerSelection
to compare and see who wins */


// Player
console.log("Write your choice (paper, rock, scissors): ")

function playerPlay(input) {
    return input
}

const playerSelection = playerPlay();


/* plays one round of rock, paper, scissors
compares numbers, decides who wins */

function who_wins(computerSelection, playerSelection) {
    // Tie
    if (computerSelection === playerSelection){
        return "Tie!";
    }
        
    //Computer wins
    if (computerSelection === 1 && playerSelection === 3){
        score_computer++;
        return "Rock beats scissors, computer wins"
    }
    if (computerSelection === 3 && playerSelection === 2){
        score_computer++;
        return "Scissors beats paper, computer wins"
    }
    if (computerSelection === 2 && playerSelection === 1){
        score_computer++;
        return "Paper beats rock, computer wins"
    }
        
        
    //Player wins
    if(computerSelection === 3 && playerSelection === 1){
        score_player++;
        return "Rock beats scissors, player wins"
    }
    if (computerSelection === 2 && playerSelection === 3){
        score_player++;
        return "Scissors beats paper, player wins"
    }
    if (computerSelection === 1 && playerSelection === 2){
        score_player++;
        return "Paper beats rock, player wins"
    }


    if (score_player > score_computer) {
        return "Player wins"
    } 
    if (score_player < score_computer) {
        return "Computer wins"
    }
    if (score_player === score_computer) {
        return "Tie"
    }
}


// five rounds of the game

// initial values
round = 1;
score_computer = 0;
score_player = 0;

function game (number_of_rounds) {

    while (round<=number_of_rounds){
        
        who_wins(computerSelection, playerSelection);
        console.log(round++);
    }
}



