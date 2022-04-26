'use strict';

let traceArray = [8, 4, 23, 42, 16, 15];

function insertionSort(arr) {
  try {
    if(arr === null){
      throw new Error('array must contain integers');
    }
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];

      while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = temp;
    }
    return arr;
  } catch (e) {
    console.error(e);
  }
}


console.log(insertionSort(traceArray));

module.exports = insertionSort;
