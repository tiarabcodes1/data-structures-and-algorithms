'use strict';

const { Queue } = require('./stack-queue-class.js');

class AnimalShelter {

  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  //animal can be either a dog or a cat object.
  enqueue(animal) {
    try {
      if(animal.creature === 'cat'){
        this.cat.enqueue(animal);
        return this.cat;
      }else if(animal.creature === 'dog'){
        this.dog.enqueue(animal);
        return this.dog;
      } else {
        return console.log(`Sorry we cannot take this ${animal.creature}`);
      }
    }catch(err){
      console.error(err);
    }
  }

  dequeue( pref ) {
    try{
      if(pref.creature === 'cat'){
        this.cat.dequeue(pref);
        return this.cat;
      } else if(pref.creature === 'dog') {
        this.dog.dequeue(pref);
        return this.dog;
      } else if(!pref.creature === 'cat'){
        return null, console.log(`Sorry we cannot remove this ${pref.creature}`);
      } else if(!pref.creature === 'dog'){
        return null, console.log(`Sorry we cannot remove this ${pref.creature}`);
      }
    } catch(err) {
      console.error(err);
    }
  }

}

let animalShelter = new AnimalShelter();
animalShelter.enqueue({creature: 'dog'});
animalShelter.enqueue({creature: 'dog'});
animalShelter.dequeue({creature: 'pig'});
animalShelter.enqueue({creature: 'cat'});
animalShelter.enqueue({creature: 'cat'});
animalShelter.dequeue({creature: 'cat'});
console.log(animalShelter);


module.exports = { AnimalShelter };
