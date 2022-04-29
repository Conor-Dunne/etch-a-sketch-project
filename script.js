const pad = document.querySelector(".sketchpad");


let gridNum = 60;



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
    console.log(squares);

    squares.forEach(square => square.addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = "purple"
    }))

}





let padFill = function (num) {
    for (let i = 0; i < num; i++) {
        addSquares();
    }
}




padFill(gridNum);





