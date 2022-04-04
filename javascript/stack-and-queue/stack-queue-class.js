

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop() { // first added is last to be removed
    try {
      if(!this.isEmpty()){
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp.value;
      } else {
        return this.isEmpty();
      }
    }catch(err){
      console.error(err);
    }
  }

  push(value) { //adds new value to the top of stack (previous val at bottom)
    try{
      if(this.isEmpty()){
        this.top = new Node(value);
      }else{
        let toBePushed = new Node(value);
        // this grabs the node and connects the pointer (next)
        toBePushed.next = this.top;
        // this takes the value to the top of the stack
        this.top = toBePushed;
        return toBePushed.value;
      }
    } catch(err){
      console.error('Stack is empty!', err);
    }

  }

  //Returns: Value of the node located at the top of the stack
  peek() {
    try{
      if(!this.isEmpty()){
        return this.top.value;
      } else {
        return this.isEmpty();
      }
    } catch(err){
      console.error('Stack is empty!', err);
    }
  }
  // Returns: Boolean indicating whether or not the stack is empty.
  isEmpty() {

    try {
      //if this stacks top does not equal null is a false statement
      // then
      //that means top is null and the stack is empty
      if(!this.top){
        return true;
      }
      //if this stacks top does equal null is true then the
      //that means top isn't null and stack is full(ish)
      return false;
    } catch (err) {
      console.error('Your stack is broken', err);
    }
  }
}

let initStack = new Stack();
initStack.top = new Node(1);
initStack.push(100);

console.log('testStack', initStack);



class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }


  //Returns: the value from node from the front of the queue
  //Removes the node from the front of the queue
  dequeue() {
    try{
    //front is stored in temp var
      let temp = this.front;
      //if temp.next is not true then this.back is null
      this.front = this.front.next;
      if(!temp.next){
        this.back = null;
        return this.isEmpty();
      }
      //removes the pointer we put pointer on
      temp.next = null;
      //returns the temps value
      return temp.value;
    } catch(err) {
      console.error(err);
    }
  }

  //adds a new node with that value to the back of the queue with an O(1) Time performance.
  enqueue(value) {
    let addedVal = new Node(value);
    //if empty is not true add value to back.next
    if(!this.isEmpty()){
      this.back.next = addedVal;
    }else{
      this.front = addedVal;
    }
    this.back = addedVal;
    // let node = new Node(value);
    // this.back.next = node;
    // this.back = node;

  }

  peek() {
    try {
      return this.front.value;
    } catch(err) {
      console.error('Your Queue is broken', err);
    }

  }

  isEmpty() { //Returns: Boolean indicating whether or not the queue is empty
    try{
      //if the front node has a value in it then the conditional statement is false
      if(!this.front){
        return true;
      } else {
        return false;
      }
    } catch(err) {
      console.error('Your Queue is broken', err);
    }
  }
}



let initQueue = new Queue();
initQueue.enqueue(2);
initQueue.enqueue(3);
initQueue.enqueue(4);


// console.log(initQueue);

module.exports={ Stack, Node, Queue };
