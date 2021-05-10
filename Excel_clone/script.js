let topLeftCell = document.querySelector(".top-left-cell")
let topRow = document.querySelector(".top-row")
let leftCol = document.querySelector(".left-col")

let cells = document.querySelector(".cells");
let addressInput = document.querySelector("#address");
let allCells = document.querySelectorAll(".cell");
let formulaInput = document.querySelector("#formula");

cellsContent.addEventListener("scroll",function(e){
    // console.log(e.target.scrollTop, e.target.scrollLeft);
    let top = e.target.scrollTop;
    let left = e.target.scrollLeft;

    topLeftCell.style.top = top + "px";
    topLeftCell.style.left = left + "px";
    topRow.style.top = top +"px";
    leftCol.style.left = left +"px";
})

let rowId;
let colId;
let lastSelectedCell;

cells.addEventListener("click", function(e){
 let currentCell = e.target;
  rowId = Number(currentCell.getAttribute("rowid"));
  colId = Number(currentCell.getAttribute("colid"));

 let address = String.fromCharCode(65+colId)+ (rowId+1) + "";
//  console.log(address);
 addressInput.value = address;
})

for(let i=0; i<allCells.length; i++){
    allCells[i].addEventListener("blur", function(e){
        let currentElement = e.target;
        lastSelectedCell = currentElement;
        let value = currentElement.textContent;
        let cellObject = db[rowId][colId];

        if(value !== cellObject.value){
            cellObject.value = value;
            // console.log(db)
        }

    })
}

// for formula
formulaInput.addEventListener("blur", function(e){
  let formula = formulaInput.value;

  if(formula && lastSelectedCell){
      let solvedValue = solveFormula(formula);

      //set ui
       lastSelectedCell.textContent = solvedValue;
    
      // set db
      let cellObject = db[rowId][colId];
      cellObject.value = solvedValue;
      cellObject.formula = formula;
  }
})




