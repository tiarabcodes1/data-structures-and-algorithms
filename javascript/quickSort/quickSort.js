'use strict';

let sampleArr = [8,4,23,42,16,15];

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  console.log(right);
  const index = partition(arr, left, right);
  quickSort(arr, left, index - 1);
  quickSort(arr, index + 1, right);
  return arr;
}

function partition(arr, left, right) {
  const swap = (a, b) => { [arr[a], arr[b]] = [arr[b], arr[a]]; };
  const pivot = arr[right];
  let low = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot)
      swap(i, low++);
  }
  swap(right, low);
  return low;
}

console.log(quickSort(sampleArr));
module.exports = quickSort;
