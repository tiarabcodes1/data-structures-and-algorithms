'use strict';
const { HashTable } = require('../hashtable.js');
const { leftJoin } = require('../leftJoin.js');

describe('TESTING LEFTJOIN FUNCTIONALITY', () => {
  let synonymsHash = new HashTable(1024);
  synonymsHash.set('diligent', 'employed');
  synonymsHash.set('fond', 'enamored');

  let antonymsHash = new HashTable(1024);
  antonymsHash.set('diligent', 'idle');
  antonymsHash.set('fond', 'averse');

  test('should only return the repeating words in hashtables or null', () => {
    
    expect(leftJoin(antonymsHash.keys(), synonymsHash.keys())).not.toEqual(['had', 'a']);
  });

  test('should return words that repeat in the left and right tables push them into the left and return them all', () => {
    
    expect(leftJoin(antonymsHash.keys(), synonymsHash.keys())).toEqual([ 'diligent', 'diligent', null, null, 'fond', 'fond' ]);
  });

  test('should contain null if no matching' , () => {
    let noMatch2 = new HashTable(1024);
    noMatch2.set('d', 'i');
    noMatch2.set('f', 'a');
    let noMatch1 = new HashTable(1024);
    noMatch1.set('dil', 'id');
    noMatch1.set('fo', 'ave');
    expect(leftJoin(noMatch1.keys(), noMatch2.keys())).toEqual([null, null, null, null]);
    console.log(leftJoin(noMatch1.keys(), noMatch2.keys()));
  });

});
