const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

//event: when click +1, the 1 score adds to the <span id="p1Score"> and updates everytime
//let(changable) vs const(unchangable)
let winningScore = 5;
let isGameOver = false;

//generic score to update either p1 or p2 score
function updateScore(player, opponent){
    if(!isGameOver){ //if the game isn't over
        player.score ++;
        if(player.score === winningScore){
            isGameOver = true; //none click is working
            player.display.classList.add('has-text-danger'); //set color Bulma
            opponent.display.classList.add('has-text-info');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }

}

//if either of the player hits winning score, the game is over
p1.button.addEventListener('click', function() {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function() {
    updateScore(p2, p1);
})

//when choose winning score from 5,10,15..options, winning score variale is supposed to change too
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); //convert string to int
    reset();
})

resetButton.addEventListener('click', reset);

//cleaner code when there are more than 4...players.
function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){ //loop throuth the array
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-info', 'has-text-danger');
        p.button.disabled = false;
    }
}

