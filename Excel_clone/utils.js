
function solveFormula(formula){
  // ( A1 + A2 )  --> ( 10 + 20 )

  let formComps = formula.split(" ");
  // [ "(" , "A1", "+", ")",")"]

  for(let i=0; i<formComps.length; i++){
      let fcomps = formComps[i];
      if(fcomps[0] >= 'A' && fcomps[0] <= 'Z'){
          // inside valid fcomps
         let {rowId, colId} = getRowIdColIdFromAddress(fcomps);
         let cellObject = db[rowId][colId];
         let value = cellObject.value;
         formula = formula.replace(fcomps,value);
      }
  }

 // stack infix evaluation ( 10 + 20 )
  let result = eval(formula);  
  return result
}

function getRowIdColIdFromAddress(comp){
  let colId = comp.charCodeAt(0) - 65;
  let rowId = Number(comp.substring(1))-1;
//   console.log(col, row)

  return {rowId, colId};
}