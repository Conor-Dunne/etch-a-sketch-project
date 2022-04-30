let gridNum = 80;
const pad = document.querySelector(".sketchpad");
const gridSizeBox = document.querySelector(".gridSize");
const changeGridSizeBtn = document.querySelector("#gridBtn");
gridSizeBox.textContent = `Current grid size: ${gridNum} x ${gridNum}`;
const emptyGrid = function removeAllChildNodes(pad) {
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
}

changeGridSizeBtn.addEventListener("click", function () {
    let userNum = window.prompt("Please type desired squares per side (MAX: 100)", "80");
    if (userNum == null || userNum <= 0 || userNum > 80 || isNaN(userNum)) {
        alert("Please type a number between 1 and 80")
        return;
    } else {
        gridNum = userNum;
        emptyGrid(pad);
        padFill(gridNum);
        gridSizeBox.textContent = `Current grid size: ${gridNum} x ${gridNum}`;
    }

});

let addSquares = function () {
    const row = document.createElement("div");
    row.classList.add("row");
    pad.appendChild(row)

    for (let i = 0; i < gridNum; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }

    const squares = Array.from(document.querySelectorAll('.column'));


    squares.forEach(square => square.addEventListener("mouseenter", function (event) {
        event.target.style.backgroundColor = "purple"
    }))

}







let padFill = function (num) {
    for (let i = 0; i < num; i++) {
        addSquares();
    }
}




padFill(gridNum);





