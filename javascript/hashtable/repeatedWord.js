'use strict';
const { HashTable } = require('../hashtable/hashtable');

//Write a function called repeated word that finds the first word to occur more than once in a string
// using Map() will allow me to increment through the array of strings and print out a count of repeated words.

function repeatedWord(string) {
  let mapObj = new Map();
  //match words using regular expression
  let searchWords = string.toLowerCase().match(/\w+/gm);
  let hashTable = new HashTable(1024);
  searchWords.map((repeated) => {
    if (mapObj.has(repeated)) {
      //add as you map values
      let data = mapObj.get(repeated) + 1;
      // let tableData = hashTable.get(repeated + 1) ;
      hashTable.set(repeated, data);
      mapObj.set(repeated, data);
      return console.log(`the word '${hashTable.keys()}' was repeated ${hashTable.get(repeated)} times.`);
      // return hashTable.get(repeated +1);
    } else {
      //does not add as incrementing of other values occurs
      mapObj.set(repeated, 1);
    }
  });

  return hashTable.keys();

}


module.exports = { repeatedWord };


