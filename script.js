let playerScore = 0;
let compScore = 0;
let roundWinner = "";
//let computerChoice = computerPlay(); //ComputerZug

//SpielButtons:
//Stein Button
let steinButton = document.getElementById("stein");
steinButton.addEventListener("click", function(){
    PlayRound(computerPlay(), "rock");
});
//Schere Button
let schereButton = document.getElementById("schere");
schereButton.addEventListener("click", function(){
    PlayRound(computerPlay(), "scissor");
});
//Papier Button
let papierButton = document.getElementById("papier");
papierButton.addEventListener("click", function(){
    PlayRound(computerPlay(), "paper");
});



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

function addToScoreboard() {
    const container = document.querySelector("#list");

        const content = document.createElement("p");
        content.appendChild(document.createTextNode(roundWinner));
        if (roundWinner == "Spieler!") { //einfärben des Scoreboards
            content.className = "playerRound";
        }
        else if (roundWinner == "Computer!") {
            content.className = "computerRound";
        }
        else {
            content.className = "tied";
        }
        container.prepend(content);
}

function gameEnd() {
    if(compScore === 5 || playerScore === 5) {  //H1 Überschrift mit Endstand hinzufügen
        if(compScore >=5) {
             gameWinner = "Computer";
         
         }
         else if(playerScore >= 5) {
             gameWinner = "Spieler";
         
         }
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    
    h1.appendChild(document.createTextNode("Ende!"));
    h2.appendChild(document.createTextNode(gameWinner + " gewinnt mit " + compScore + " : " + playerScore));
    document.body.prepend(h2);
    document.body.prepend(h1);
    
    //Spiel muss noch beendet werden refresh Button?
    }
}


function PlayRound(computer, player) {
    computer = computer.toLowerCase();
   
   
    if(computer === player) { //Unentschieden
        roundWinner = "Unentschieden!"
        addToScoreboard();  
    }
    else if (computer === "rock" && player === "scissor" || computer === "paper" && player === "rock" || computer === "scissor" && player === "paper") { //Computer gewinnt
        compScore++;
        roundWinner = "Computer!";  
        addToScoreboard();
    }
    else { //Spieler gewinnt
        playerScore++;
        roundWinner = "Spieler!";
        addToScoreboard();    
    }
    gameEnd();
}