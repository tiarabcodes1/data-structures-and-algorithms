'use strict';
const { PseudoQueue } = require('../pseudoQueue.js');
// const { , Node, Queue} = require('../stack-queue-class.js');

describe('stack pseudoQueue test', () => {

  it('Happy path - can successfully create an empty pseudo queue', () => {
    let initPQ = new PseudoQueue();

    expect(initPQ).toBeTruthy;
  });


  it('Happy path - can successfully enqueue pseudo queue', () => {
    let initPQ = new PseudoQueue();
    initPQ.enqueue(1);

    expect(initPQ.stack1.top.value).toEqual(1);
  });

  it('Happy path - can successfully add multi enqueue() pseudo queue', () => {
    let initPQ = new PseudoQueue();
    initPQ.enqueue(1);
    initPQ.enqueue(2);
    initPQ.enqueue(3);

    expect(initPQ.stack1.top.next.value).toEqual(2);
  });

  it('Happy path - can successfully add dequeue() pseudo queue', () => {
    let initPQ = new PseudoQueue();
    initPQ.enqueue(1);
    initPQ.enqueue(2);
    initPQ.enqueue(3);

    expect(initPQ.dequeue()).toEqual(1);
  });

  it('Happy path - can successfully add multi dequeue() pseudo queue', () => {
    let initPQ = new PseudoQueue();
    initPQ.enqueue(1);
    initPQ.enqueue(2);
    initPQ.enqueue(3);

    expect(initPQ.dequeue()).toEqual(1);
    expect(initPQ.dequeue()).toEqual(2);
  });

  it('Errors when dequeue is instantiated on empty pseudo queue', () => {
    let initPQ = new PseudoQueue();

    expect(initPQ.dequeue()).toEqual('Sorry. This is empty');
    console.log('test q', initPQ);
  });


});
