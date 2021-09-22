let playerScore = 0;
let compScore = 0;
let roundWinner = "";


function gameEnd() {
    let bool = playerScore === 5 || compScore === 5;
    return bool;

}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}


function computerPlay() {
    let random = getRandomInt(3);

    switch (random){
        case 0:
            return "Rock";
            
        case 1:
            return "Paper";
            
        case 2:
            return "Scissor";                
    }          
}






function PlayRound(computer,player) {
    computer = computer.toLowerCase();
    player = player.toLowerCase();
   
    if(computer === player) {
        //Unentschieden
        roundWinner = "Unentschieden!"
        return roundWinner;
    }
    else if (computer === "rock" && player === "scissor" || computer === "paper" && player === "rock" || computer === "scissor" && player === "paper") {
        //Computer gewinnt
        compScore++;
        roundWinner = "Computer!";
        return roundWinner;
    }
    else {
        //Spieler muss gewinnen, da alle anderen Möglichkeiten nicht eintreffen
        playerScore++;
        roundWinner = "Spieler!";
        return roundWinner;
    }
}




/* Nicht funktionierende GameLoop :(
function game() {
    while (gameEnd === false) {
        let playerChoice = window.prompt("Stein, Schere oder Papier?");
        let computerChoice = computerPlay();
        console.log("Computer: " + computerChoice);
        console.log("Spieler " + playerChoice);
        console.log(PlayRound(computerChoice, playerChoice));


    }

}

game();
*/

let playerChoice = window.prompt("Stein, Schere oder Papier?");
        let computerChoice = computerPlay();
        console.log("Computer: " + computerChoice);
        console.log("Spieler " + playerChoice);
        console.log(PlayRound(computerChoice, playerChoice));