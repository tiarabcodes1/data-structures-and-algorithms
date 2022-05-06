
const { HashTable } = require('../hashtable/hashtable.js');



//The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
//The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
// The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic
// a left join returns all the values from the left table, plus matched values from the right table or NULL in case of no matching join predicate.
const leftJoin = (hashmap1, hashmap2) => {
  const list = new Array();
  for(let key of hashmap1){
    for(let value of hashmap2){
      if(key === value){
        list.push(key, value);
      } else {
        // list.push(key);
        list.push(null);
      }
    }
  }

  return list;
};

let synonymsHash = new HashTable(1024);
synonymsHash.set('diligent', 'employed');
synonymsHash.set('fond', 'enamored');

let antonymsHash = new HashTable(1024);
antonymsHash.set('diligent', 'idle');
antonymsHash.set('fond', 'averse');



console.log(leftJoin(synonymsHash.keys(), antonymsHash.keys()));

module.exports = { leftJoin };
