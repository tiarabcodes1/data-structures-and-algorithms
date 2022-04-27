const { mergeSort } = require('../merge-sort.js');


describe('Tets MergeSort and Merge functionality', () => {
  let sampleArr = [8, 4, 23, 42, 16, 15];
  let reverseSort = [20,18,12,8,5,-2];
  let fewUniques = [5,12,7,5,5,7];
  let newlySorted = [2,3,5,7,13,11];
  test('Returns sorted array ', ()=>{
    expect((mergeSort(sampleArr))).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

  test('Returns sorted reverse-sorted array ', ()=>{
    expect(mergeSort(reverseSort)).toEqual([-2, 5, 8, 12,18, 20]);
  });

  test('Returns sorted Few uniques array ', ()=>{
    expect(mergeSort(fewUniques)).toEqual([5,5,5,7,7,12]);
  });

  test('Returns sorted Nearly-sorted array ', ()=>{
    expect(mergeSort(newlySorted)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
