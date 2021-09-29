let playerScore = 0;
let compScore = 0;
let roundWinner = "";
let gameEnded = false;
let firstRoundPlayed = false;
//let computerChoice = computerPlay(); //ComputerZug

//SpielButtons:
//Stein Button
let steinButton = document.getElementById("stein");
steinButton.addEventListener("click", function(){
    PlayRound(computerPlay(), "rock");
    steinButton.classList.add("spielerWahl");
            setTimeout(function() { 
            steinButton.classList.remove("spielerWahl");
            }, 300);
    

});
//Schere Button
let schereButton = document.getElementById("schere");
schereButton.addEventListener("click", function(){
    PlayRound(computerPlay(), "scissor");
    schereButton.classList.add("spielerWahl");
            setTimeout(function() { 
            schereButton.classList.remove("spielerWahl");
            }, 300);
    
});
//Papier Button
let papierButton = document.getElementById("papier");
papierButton.addEventListener("click", function(){
    PlayRound(computerPlay(), "paper");
    papierButton.classList.add("spielerWahl");
            setTimeout(function() { 
            papierButton.classList.remove("spielerWahl");
            }, 300);
   
});






//Funktion zum Entfernen des Highlights
function removeTransition(e) {
    
    if (e.propertyName !== 'transform') return;
    this.classList.remove('computerWahl');
  }


function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function computerPlay() {
    let random = getRandomInt(3);

    switch (random){
        case 0:
            steinButton.classList.add("computerWahl");
            setTimeout(function() { 
            steinButton.classList.remove("computerWahl");
            }, 300);
            return "Rock";
            
        case 1:
            papierButton.classList.add("computerWahl");
            setTimeout(function() { 
            papierButton.classList.remove("computerWahl");
            }, 300);
            return "Paper";
            
        case 2:
            schereButton.classList.add("computerWahl");
            setTimeout(function() { 
            schereButton.classList.remove("computerWahl");
            }, 300);
            
            return "Scissor";  
                          
    }          
}

function addToScoreboard() {
    if (gameEnded === false){ 
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
}

function gameEnd() {
    if((compScore === 5 || playerScore === 5) && gameEnded === false) {  //H1 Überschrift mit Endstand hinzufügen
        gameEnded = true;
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
    
    let elem = document.getElementById("nächsteRunde"); 

   //Refresh Button
    const endButt = document.createElement("BUTTON");
    endButt.setAttribute("id", "endButton");
    endButt.innerText = "Neue Runde?";
    elem.parentNode.append(endButt);
    elem.parentNode.prepend(h2);
    elem.parentNode.removeChild(elem); 
    
    let elem2 = document.getElementById("Score");
    elem2.parentNode.prepend(h1);
    elem2.parentNode.removeChild(elem2);
    

    //Spiel Neustart
    endButt.addEventListener("click", function(e) {
        window.location.reload("Refresh");
    });
   

    
    
    }
}


function addToRoundScore() {
    if(((compScore === 0 && playerScore === 0) || (compScore === 1 && playerScore === 0) || (compScore === 0 && playerScore === 1) ) && firstRoundPlayed === false)
    {
        firstRoundPlayed = true;
        const zwischenstand = document.getElementById("Score");
    
        const content = document.createElement("p");
        content.setAttribute("id", "currScore");
        content.appendChild(document.createTextNode("Computer " + compScore + " : " +  playerScore + " Spieler" ))
        zwischenstand.append(content);
    }
    else { 
        document.getElementById("currScore").innerHTML = "Computer " + compScore + " : " +  playerScore + " Spieler";
    }
    
}

function PlayRound(computer, player) {
    computer = computer.toLowerCase();
    let divWin = document.getElementById("buttonDiv");
   
    if(computer === player) { //Unentschieden
        roundWinner = "Unentschieden!"
        addToScoreboard(); 
        //addToRoundScore();
        divWin.style.backgroundColor ="#5e81ac";
        setTimeout(function() { 
            divWin.style.backgroundColor ="#434c5e";
            }, 300);
    }
    else if (computer === "rock" && player === "scissor" || computer === "paper" && player === "rock" || computer === "scissor" && player === "paper") { //Computer gewinnt
        compScore++;
        roundWinner = "Computer!";  
        addToScoreboard();
        addToRoundScore();
        divWin.style.backgroundColor ="#bf616a";
        setTimeout(function() { 
            divWin.style.backgroundColor ="#434c5e";
            }, 300);
    }
    else { //Spieler gewinnt
        playerScore++;
        roundWinner = "Spieler!";
        addToScoreboard();    
        addToRoundScore();
        divWin.style.backgroundColor ="#a3be8c";
        setTimeout(function() { 
            divWin.style.backgroundColor ="#434c5e";
            }, 300);
    }
    
    gameEnd();
}


/*

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

key.classList.add('playing');


*/