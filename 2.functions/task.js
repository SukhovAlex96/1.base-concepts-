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

  return {sum: sum};
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
  }
  empty = parseFloat((min - max).toFixed(2));
  
  return {empty: empty};
}

function differenceEvenOddWorker (...arr){
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (i % 2 == 0){
      sumOddElement += arr[i];
    }else if (i % 2 !== 0){
      sumEvenElement += arr[i];
    }
  } 
  difference = parseFloat((sumOddElement - sumEvenElement).toFixed(2));
  return {difference: difference};
}

function averageEvenElementsWorker (...arr){
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let empty = 0;

  for(let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
      countEvenElement +=1; 
      sumEvenElement += arr[i];
    }
  }
  }
    empty = parseFloat((sumEvenElement / countEvenElement).toFixed(2));

    return {empty: empty};


// Задание №3

function makeWork(func,arrOfArr){
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const summElementsWorker = func(arrOfArr[i]);
    if (summElementsWorker > maxWorkerResult) {
      maxWorkerResult = summElementsWorker;
    }
  }
    for (let i = 0; i < arrOfArr.length; i++) {
    const differenceMaxMinWorker = func(arrOfArr[i]);
    if (differenceMaxMinWorker > maxWorkerResult) {
      maxWorkerResult = differenceMaxMinWorker;
  }
}
      for (let i = 0; i < arrOfArr.length; i++) {
    const differenceEvenOddWorker = func(arrOfArr[i]);
    if (differenceEvenOddWorker > maxWorkerResult) {
      maxWorkerResult = differenceEvenOddWorker;
    }
  }
        for (let i = 0; i < arrOfArr.length; i++) {
    const averageEvenElementsWorker = func(arrOfArr[i]);
    if (averageEvenElementsWorker > maxWorkerResult) {
      maxWorkerResult = averageEvenElementsWorker;
  }
}       

  return maxWorkerResult;
}