'use strict';
let sampleArr = [8, 4, 23, 42, 16, 15];

function mergeSort(arr) {
  let n = arr.length;

  if (n <= 1) return arr;
  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // console.log(`LEFT: ${left} RIGHT: ${right}`);

  console.log('MERGED',merge(mergeSort(left), mergeSort(right)));
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

  let i = 0;
  let k = 0;
  let mergedArr = [];
  while (i < left.length && k < right.length) {
    if (left[i] < right[k]) {
      mergedArr.push(left[i++]);
    } else {
      mergedArr.push(right[k++]);
    }
  }

  return [...mergedArr, ...left.slice(i), ...right.slice(k)];
}

console.log('FUNCTION', mergeSort(sampleArr));

module.exports = { mergeSort, merge };
