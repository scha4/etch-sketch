let color = "black";
const INITIAL_GRID = 32;
let actual_grid = INITIAL_GRID;

let click = false;
let gridRange = document.getElementById("myRange");
document.addEventListener("DOMContentLoaded", function () {
  createBoard(32);
  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
    }
  });
});

function createBoard(size) {
  let board = document.querySelector(".container");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}
//color
function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    if (color == "erase") {
      this.style.backgroundColor = "white";
    }
  } else {
    this.style.backgroundColor = "black";
  }
}
function setColor(colorChoice) {
  color = colorChoice;
}

//Reset button
function reset() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}

// displaying slider
let range = document.querySelector(".rangeValue");
range.innerHTML = INITIAL_GRID + "  x  " + INITIAL_GRID;

//change slider

function changeValue() {
  range.innerHTML = gridRange.value + "  x  " + gridRange.value;
  actual_grid = gridRange.value;
  createBoard(actual_grid);
}

gridRange.addEventListener("input", changeValue);
gridRange.addEventListener("input", createBoard);
