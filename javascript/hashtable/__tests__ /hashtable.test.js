'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
// Require our hashtable implementation
const HashTable = require('../hashtable.js');

describe('Tests hashtable class/methods', () => {
  //GLOBAL LIST TESTS FUNCTIONALITY
  let table = new HashTable(1024);

  table.hash('Chance');

  table.set('Brownie', 2);
  table.set('Bone', { treat: 'Bone' });
  console.log('table:', table);

  let newTable = new HashTable(2);
  newTable.hash('Chance');
  newTable.hash('Brownie');
  // newTable.hash('Bone');
  newTable.set('Chance', 1);
  newTable.set('Brownie', 2);
  newTable.set('Bone', { treat: 'Bone' });

  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    table.set('Chance', 1);
    expect(table.contains('Chance')).toEqual(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    table.set('Chance', 1);
    expect(table.get('Chance')).toEqual(1);
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {

    expect(table.get('Mickey')).toEqual(null);
  });

  it('Successfully handle a collision within the hashtable', () => {

    expect(newTable.keys()).toBeTruthy();
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {

    expect(table.keys()).toBeTruthy();
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

    expect(newTable.get('Chance')).toEqual(1);
  });

  it('Successfully hash a key to an in-range value', () => {
    newTable.hash('Micey');
    newTable.set('Mickey', 10000);
    expect(newTable.contains('Mickey')).toBeTruthy();
  });

});
