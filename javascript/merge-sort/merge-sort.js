'use strict';
let sampleArr = [8,4,23,42,16,15];

function mergeSort(arr){
  const n = arr.length;

  if(n > 1){
    let mid = n/2;
    let left = arr[0.. mid];
    let right = arr[mid.. n];

    mergeSort(left);
    mergeSort(rigt);
    mergeSort(left, right, arr);
  }


}

function merge(left, right, arr){
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length){
      if(left[i] <= right.length){
        arr[k] = left[i];
        i = i+1
      } else{
        arr[k] = right[j];
        j = j+1
      }
      k = k + 1;
    }
    if(i = left.length){
      return [...arr] = [...right];
    } else {
      return [...arr] = [...left];
    }
  }
console.log(mergeSort(sampleArr));
