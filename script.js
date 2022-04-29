const pad = document.querySelector(".sketchpad");
const rows = document.querySelector(".row");


let gridNum = 80;



let addRows = function () {
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





let rowFill = function (num) {
    for (let i = 0; i < num; i++) {
        addRows();
    }
}




rowFill(gridNum);





