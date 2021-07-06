const grid = document.getElementById("grid-container");
const button = document.getElementById("reset");
const button3 = document.getElementById("clear");

//load default size of grid 
window.addEventListener("load", setDefaultGrid);
button.addEventListener("click", resetSize);
button3.addEventListener("click", reStart);

function setDefaultGrid() {
    setGridSize(36);
    createGrid(36);
}


function setGridSize(n) {
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
}
//generate given size of 2d grid array
//rgb(158, 245, 184); rgb(153, 241, 20);
function createGrid(n) {
    for (let i = 0; i < n * n; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element"; //css styling
        gridElement.addEventListener('mouseover', changeColor); //mouseover
        grid.appendChild(gridElement); //append each cloumns
    }
}

//change size of canvas by user input
function resetSize(size){
    let userSize = prompt("Change the canvas size by entering a grid width between 1-100")
    
    if(userSize !== null){
        userSize = parseInt(userSize);
        if(userSize < 1 || userSize > 100 || Number.isNaN(userSize)){
            alert("Try enter a number between 1 and 100");
            resetSize();
        }else{
            clearGrid();
            setGridSize(userSize);
            createGrid(userSize);
        }
    }
}

//removes each cell from grid array generated from creatGrid(n);
function clearGrid(){
    //console.log(Array.from('foo')); --> expected output: Array ["f", "o", "o"]
    //creates a new, shallow-copied array instance from an array-like or iterable object
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => { //execute each element in array
        //node.removeChild(child);
        grid.removeChild(element);
    });
}


/**
 * Set up a “hover” effect so that the grid divs change color when your mouse passes over them, 
 * leaving a (pixelated) trail through your grid like a pen would.
 * “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. 
 * You can set up event listeners for either of those events as a starting point.
 * 
 * There are multiple ways to change the color of the divs, including: 
 * adding a new class to the div.
 * changing the div’s background color using JavaScript.
 * 
 */
function changeColor(e) {
    const randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = randomColor ;
}


function reStart(e){
    clearGrid();
    setDefaultGrid();
}

