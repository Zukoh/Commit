const cellsize=25;
let colCount=20;
let rowCount=20;

const containerDiv = document.getElementById("container");

containerDiv.style.gridTemplateColumns = `repeat(${colCount}, 1fr)`;


for(let i = 0; i< colCount * rowCount;i++){
const newDiv = document.createElement("div");
newDiv.style.width = `${cellsize}px`;
newDiv.style.height = `${cellsize}px`;
newDiv.classList.add("grid-item");
containerDiv.appendChild(newDiv);

newDiv.addEventListener("click", () => {
    newDiv.style.backgroundColor = "black";
});

newDiv.addEventListener("mouseover", () => {
    newDiv.style.backgroundColor = "white";
})

}

const resetBtn = document.getElementById("reset");
const valInputCol = document.getElementById("col");
const valInputRow = document.getElementById("row");


resetBtn.addEventListener("click", () => {
        colCount = valInputCol.value;
        rowCount = valInputRow.value;

        for(let i = 0; i< 400;i++){
            const divs = document.getElementById("grid-item")
            containerDiv.removeChild(divs);
            }
            

        
})
