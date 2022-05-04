'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  traverse(callback) {
    let current = this.head;
    while (current !== null) {
      callback(current.value);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
