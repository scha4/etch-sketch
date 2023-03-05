let color = "black";

document.addEventListener("DOMContentLoaded", function () {
  createBoard(32);
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
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
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
