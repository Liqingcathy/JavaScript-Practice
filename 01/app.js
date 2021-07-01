const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

//event: when click +1, the 1 score adds to the <span id="p1Score"> and updates everytime
//let(changable) vs const(unchangable)
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

//if either of the player hits winning score, the game is over
p1Button.addEventListener('click', function() {
    if(!isGameOver){ //if the game isn't over
        p1Score ++;
        if(p1Score === winningScore){
            isGameOver = true; //none click is working
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-info');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }

})

p2Button.addEventListener('click', function() {
    if(!isGameOver){ //if the game isn't over
        p2Score ++;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('has-text-info');
            p1Display.classList.add('has-text-danger');
             //when games if over, disable the button
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p2Display.textContent = p2Score;
    }

})

//when choose winning score from 5,10,15..options, winning score variale is supposed to change too
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); //convert string to int
    
})

resetButton.addEventListener('click', reset);


function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;

    p1Display.classList.remove('has-text-info', 'has-text-danger');
    p2Display.classList.remove('has-text-info', 'has-text-danger');

   //reset to able buttons
    p1Button.disabled = false;
    p2Button.disabled = false;
}

