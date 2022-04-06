'use strict';

const { AnimalShelter } = require('../classes/animal-shelter-class');

describe('stack Animal-ShelterQueue test', () => {

  it('Happy path - can successfully create an empty Animal-Shelter queue', () => {
    let animalShelterQ = new AnimalShelter();

    expect(animalShelterQ).toBeTruthy;

  });


  it('Happy path - can successfully enqueue Animal-Shelter queue', () => {
    let animalShelterQ = new AnimalShelter();
    animalShelterQ.enqueue({creature: 'dog'});

    expect(animalShelterQ).toNotThrow;
  });

  it('Happy path - can successfully add multi enqueue() Animal-Shelter queue', () => {
    let animalShelterQ = new AnimalShelter();
    animalShelterQ.enqueue({creature: 'dog'});
    animalShelterQ.enqueue({creature: 'cat'});
    animalShelterQ.enqueue('3');

    expect(animalShelterQ.dog.front.value).toEqual({"creature": "dog"});
  });

  it('Happy path - can successfully add dequeue() Animal-Shelter queue', () => {
    let animalShelterQ = new AnimalShelter();
    animalShelterQ.enqueue({creature: 'dog'});
    animalShelterQ.enqueue({creature: 'cat'});

    expect(animalShelterQ.dequeue({"creature": "dog"})).toEqual('dog');
    console.log('test q', animalShelterQ);
  });

  it('Happy path - can successfully add multi dequeue() Animal-Shelter queue', () => {
    let animalShelterQ = new AnimalShelter();
    animalShelterQ.enqueue({creature: 'dog'});
    animalShelterQ.enqueue({creature: 'cat'});
    animalShelterQ.dequeue({creature: 'dog'});
    animalShelterQ.dequeue({creature: 'cat'});

    expect(animalShelterQ.dequeue({creature: 'monkey' })).toEqual(`Sorry we cannot remove this monkey`);
  });

  it('Errors when dequeue is instantiated on empty Animal-Shelter queue', () => {
    let animalShelterQ = new AnimalShelter();

    expect(animalShelterQ.dequeue()).toEqual( undefined );

  });


});
