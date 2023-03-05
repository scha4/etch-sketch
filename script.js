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
    div.style.backgroundColor = "red";
    board.insertAdjacentElement("beforeend", div);
  }
}
