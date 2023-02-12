"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2-4*a*c);
  if (d>0){
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
     arr.push(x1,x2);
     console.log(arr);
     return arr;
  }
  if (d===0){
    let x0 = -b/(2*a);
    arr.push(x0);
    console.log(arr);
  }
  else{
    console.log("Корень отсутствует " + arr)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}