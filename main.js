// Where the logic goes for the Etch a Sketch

// Setting up vars
const gridContainer = document.querySelector("#grid-container");
const normBtn = document.querySelector("#normbtn");
const rainBtn = document.querySelector("#rainbtn");
const clearBtn = document.querySelector("#clearbtn");
const gridBtn = document.querySelector("#gridbtn");
let choice = 16;

// Initial 16x16 grid
drawGrid();

// Event listeners for buttons
normBtn.addEventListener("click", penMode);
rainBtn.addEventListener("click", rainbowMode);
clearBtn.addEventListener("click", magicWipe);
gridBtn.addEventListener("click", function() {
    gridSelection();
    drawGrid();
});

// Function to turn pen into normal colour
function penMode() {
    let colourBlocks = document.querySelectorAll(".block");
    colourBlocks.forEach((block) => {
        block.addEventListener("mouseenter", () => {
             block.style.backgroundColor = "rgb(73,73,73)";
        })
    });
}

// Function to turn pen into RAINDBOW mode colours
function rainbowMode() {
    let colourBlocks = document.querySelectorAll(".block");
    colourBlocks.forEach((block) => {
        block.addEventListener("mouseenter", () => {
            let number1 = Math.floor(Math.random() * 255);
            let number2 = Math.floor(Math.random() * 255);
            let number3 = Math.floor(Math.random() * 255);
            block.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
        })
    });
}

// Function for clear button
function magicWipe() {
    let cleangrid = document.querySelectorAll(".block");
    cleangrid.forEach(item => {
        item.style.backgroundColor = "";
    })
}

/*
function shadowMode() {
    let colourBlocks = document.querySelectorAll(".block");
    colourBlocks.forEach((block) => {
        let grey = block.style.backgroundColor;
        console.log(`${grey}`);
        block.addEventListener("click", () => {
            let grey = block.style.backgroundColor;
            
            if (grey === null) {
                grey = 255;
            }
            else {
                grey =-51;
            }
            block.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey})`;
        })
    });
}
*/

// Function for grid size button
function gridSelection() { // Resetting choice and allowing user to pick from 1-20.
    choice = 0;
    while (choice < 1 || choice > 100) {
        choice = prompt("Grid size per side? (1-100)");
    };
}

// Function for drawing the grid and removing the previous one if applicable
function drawGrid() {
    const oldBlock = document.querySelectorAll(".block");
    oldBlock.forEach(item => {
        item.remove();
    });

    let size = 660 / choice;
    selection = choice * choice;

    for (let i = 0; i < selection; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.height = `${size}px`;
        block.style.width = `${size}px`;
        gridContainer.appendChild(block);
    };

    let colourBlocks = document.querySelectorAll(".block");

    colourBlocks.forEach((block) => {
        block.addEventListener("mouseenter", () => {
            block.style.backgroundColor = "rgb(73,73,73)";
        })
    });
}