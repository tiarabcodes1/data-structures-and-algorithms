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

  pop() {
    try {
      if(!this.isEmpty()){
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp.value;
      }
    }catch(err){
      console.error(err);
    }
  }

  push(value) {
    try{
      let toBePushed = new Node(value);
      // this grabs the node and connects the pointer (next)
      toBePushed.next = this.top;
      // this takes the value to the top of the stack
      this.top = toBePushed;
    } catch(err){
      console.error('Stack is empty!', err);
    }

  }

  //Returns: Value of the node located at the top of the stack
  peek() {
    try{
      if(!this.isEmpty()){
        return this.top.value;
      }
    } catch(err){
      console.error('Stack is empty!', err);
    }
  }
  // Returns: Boolean indicating whether or not the stack is empty.
  isEmpty() {
    try {
      if(this.isEmpty()){
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error('Your stack is broken', err);
    }
  }
}

// class Queue {
//   constructor() {
//     this.front = null;
//     this.back = null;
//   }

//   dequeue() {

//   }

//   enqueue() {

//   }

//   peek() {

//   }

//   isEmpty() {

//   }
// }






module.exports = { Stack, Node };
