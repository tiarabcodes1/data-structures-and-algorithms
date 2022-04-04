'use strict';

const { Stack } = require('./stack-queue-class.js');

class PseudoQueue {
  constructor() {
    // new Stack();
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    try{
    //if empty is not true
      while (!this.stack1.isEmpty()){
        this.stack2.push(this.stack1.pop());
      }

      this.stack1.push(value);

      while( !this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
      }
      return this.value;
    } catch (err){
      console.error(err);
    }
  }

  dequeue() {
    try{
    //if empty is not true return string
      if (this.stack1.isEmpty()){
        return 'Sorry. This is empty';
      }
      //evades null
      // let value = this.stack1[this.stack1. -1];

      return this.stack1.pop();
      // return value;
    } catch(err){
      console.error(err);
    }
  }
}


let imposterQueue = new PseudoQueue();
imposterQueue.enqueue(1);
imposterQueue.enqueue(2);
imposterQueue.enqueue(3);

// console.log('Fake Queue before', imposterQueue);
// console.log('dequeue! ', imposterQueue.dequeue());
// console.log('dequeue! ', imposterQueue.dequeue());
// console.log('dequeue! ', imposterQueue.dequeue());
// console.log('Fake Queue after', imposterQueue);

module.exports = { PseudoQueue };
