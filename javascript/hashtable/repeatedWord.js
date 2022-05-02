'use strict';
const { HashTable } = require('../hashtable/hashtable');

//Write a function called repeated word that finds the first word to occur more than once in a string

function repeatedWord(string) {
  let hashTable = new HashTable(1024);
  let char = string.split(' ');
  console.log(char);
  let repeatChar = [];
  for (let i = 0; i < char.length; i++) {
    hashTable.set(char[i], true);
    //Create condition that checks the passed string
    if (hashTable.keys() === char[i]) {
      repeatChar.push(char);
    }
    //If an integer is passed function errors
  }
  return repeatChar;

  //TO DO: return a reoccurring string
}

let paragraph = 'I once had a dog. He had a bone.';

console.log('test', repeatedWord(paragraph));


