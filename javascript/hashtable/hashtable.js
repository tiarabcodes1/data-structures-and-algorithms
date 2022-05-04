'use strict';

let LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) { //pass size when init HashTable
    this.size = size;
    this.buckets = new Array(size); // an array with the amount of buckets placed into the hashtable
  }


  hash(key) { //Returns: Index in the collection for that key
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }


  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else if (data !== this.buckets[position]) {
      let bucket = new LinkedList();

      bucket.add(data);

      this.buckets[position] = bucket;
    }
  }

  get(key) { //Returns: Value associated with that key in the table
    try {
      let position = this.hash(key);

      if (this.buckets[position]) {
        let bucket = this.buckets[position];
        let value = bucket.head.value[key];
        return value;
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
    }

  }

  contains(key) { // Returns: Boolean, indicating if the key exists in the table already.
    let position = this.hash(key);
    if (this.buckets[position]) {
      console.log('This key exists');
      return true;
    } else {
      console.log('This key does not exist');
      return false;
    }
  }

  keys() { //Returns: Collection of keys
    try {
      let currHashTable = this.buckets.filter((bucket) => Boolean(bucket));
      let keys = [];
      currHashTable.forEach((chain) => {
        chain.traverse((value) => keys.push(Object.keys(value)[0]));
      });
      return keys;
    } catch (e) {
      console.error(e);
      throw new Error('THIS HASHTABLE DOES NOT EXIST');
    }

  }

}

// let table = new HashTable(1024);
// console.log(table);
// console.log(table.hash('Chance'));
// table.set('Chance', 1);
// table.set('Brownie', 2);
// table.set('Bone', { treat: 'Bone' });
// console.log('table:', table);
// console.log('test contains()', table.contains('notHere'));
// console.log('test keys()', table.keys());
// console.log('Chance: ', table.get('Chance'));
// console.log('Brownie: ', table.get('Brownie'));
// console.log('Bone: ', table.get('Bone'));

module.exports = { HashTable };
