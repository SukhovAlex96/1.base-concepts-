"use strict"
// Задание №1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    if (arr[i > max]){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


// Задание №2
function summElementsWorker(...arr) {
  let sum = 0;
     for (let i = 0; i < arr.length; i++){
      sum = sum + arr[i];
     }

  return sum;
}

function differenceMaxMinWorker (...arr) {
  let min = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++){
    if (i > max){
      max = arr[i];
    }
    if (i < min){
      min = arr[i];
    }
  }
  
  return max - min;
}

function differenceEvenOddWorker (...arr){
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (i % 2 == 0){
      sumOddElement += arr[i];
    }else if (i % 2 !== 0){
      sumEvenElement += arr[i];
    }
  } 

  return sumOddElement - sumEvenElement;
}

function averageEvenElementsWorker (...arr){
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++){
    if (i % 2 !== 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

    return sumEvenElement / countEvenElement;
}

function makeWork(func) {
  func();
 
  // Задание №3
 function arrOfArr(){
   let maxWorkerResult = -Infinity;
   for (let num of arr){
     maxWorkerResult = num;
   } 
}
 function summElementsWorker() {
   console.log("Насадка суммирования значения");
 } 
 function differenceMaxMinWorker() {
   console.log("Насадка разницы элементов");
 }
 function differenceEvenOddWorker() {
   console.log("Насадка разницы четных и нечетных элементов");
 }
 function averageEvenElementsWorker() {
   console.log("Насадка среднего значения четных элементов");
 }
 
 return [summElementsWorker, differenceMaxMinWorker, differenceEvenOddWorker, averageEvenElementsWorker];
}