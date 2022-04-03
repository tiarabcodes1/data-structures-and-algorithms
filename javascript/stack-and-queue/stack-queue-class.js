

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


let initStack = new Stack();
initStack.top = new Node(1);
initStack.push(100);

console.log('testStack', initStack);



module.exports = { Stack, Node };
