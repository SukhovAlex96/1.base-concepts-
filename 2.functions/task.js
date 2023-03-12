"use strict"
// Задание №1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    if (arr[i] > max){
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
  let min = Infinity;
  let max = -Infinity;
  let empty = 0;

  for (let i = 0; i < arr.length; i++){
    if (i > max){
      max = arr[i];
    }
    if (i < min){
      min = arr[i];
    }
    if (i = 0){
      empty =arr[i];
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
  let empty = 0;

  for(let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
    if (i = 0){
      empty =arr[i];
    }
  }

    return sumEvenElement / countEvenElement;
}

function makeWork(func) {
  func();
 
  // Задание №3
  function makeWork(func,arrOfArr){
    let maxWorkerResult = - Infinity;
  
    const arr = [summElementsWorker, differenceMaxMinWorker, differenceEvenOddWorker, averageEvenElementsWorker];
    arrOfArr(...arr);
    for (let i = 0; i < arr.length; i++) 
      if ( i > maxWorkerResult){
        maxWorkerResult = arr[i];
      }
    func()
  }
  makeWork(summElementsWorker);
  makeWork(differenceMaxMinWorker);
  makeWork(differenceEvenOddWorker);
  makeWork(averageEvenElementsWorker);