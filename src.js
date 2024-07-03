const firstDiv = document.querySelector("div")
let gridSize = 17;

function createGrid(number) {
    for (let step = 0; step < number; step++) {
        let aDiv = document.createElement('div');
        aDiv.classList.add('container');        
        for (let count = 0; count < number; count++) {
            let anotherDiv = document.createElement("div");
            anotherDiv.classList.add('grid');
            aDiv.appendChild(anotherDiv);
        };
        firstDiv.appendChild(aDiv);
    };
};

function divEventListeners() {
    const divs = document.querySelectorAll("div.grid");

    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "lightblue";
        });
    });
};

function btnEventListeners() {
    const btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        gridSize = Number(prompt('Choose the Height/Width of the grid'));
        while (isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
            gridSize = Number(prompt('Please pick an appropriate height/width (whole number 1-100)'));
        }
        while (firstDiv.firstChild) {
            firstDiv.removeChild(firstDiv.firstChild);
        };
        createGrid(gridSize);
        divEventListeners();
    });
};

createGrid(gridSize);
divEventListeners();
btnEventListeners();