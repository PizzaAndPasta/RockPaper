function getRandomInt (min, max) {
    min= Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissor = "Scissor";
    let random = getRandomInt(1, 4)

    if (random == 1) {
        return rock;

    }
    else if (random == 2) {
        return paper;
    }
    else {return scissor;}

}
console.log( computerPlay() );