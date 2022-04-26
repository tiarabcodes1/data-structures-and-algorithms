'use strict';

// Require our linked list implementation
const insertionSort = require('../trace/trace');

describe('Tests Insertion Sort Function', () => {
  //GLOBAL LIST TESTS FUNCTIONALITY
  let arr = [8, 4, 23, 42, 16, 15];
  let reverseSorted = [20,18,12,8,5,-2];
  let fewUniques = [5,12,7,5,5,7];
  let nearlySorted = [2,3,5,7,13,11];


  it('traverses through a linked list and return sorted min values first', () => {

    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('returns return sorted min values first for a Reverse-sorted list', () => {

    expect(insertionSort(reverseSorted)).toEqual([-2, 5, 8, 12,18, 20]);
  });


  it('returns return sorted min values first for a Few uniques list', () => {

    expect(insertionSort(fewUniques)).toEqual([5,5,5,7,7,12]);
  });

  it('returns return sorted min values first for a Nearly-sorted list', () => {

    expect(insertionSort(nearlySorted)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
