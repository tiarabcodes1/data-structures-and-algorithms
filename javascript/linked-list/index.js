'use strict';
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  includes(value){
    let currNode = this.head;
    while(currNode){
      if(currNode.value === value){
        return true;
      } else {
        currNode = currNode.next;
      }
    }
    return false;
  }

  insert(value){
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  append(value){
    let newNode = new Node(value);
    let currNode = this.head;

    while(currNode.next){
      currNode = currNode.next;
    }
    currNode.next = newNode;
  }


  insertBefore(insertBefore, value){
    let currNode = this.head;
    while(currNode.next.value !== insertBefore){
      currNode = currNode.next;
    }
    let temp = currNode.next;
    currNode.next = new Node(value);
    currNode.next.next = temp;
  }

  insertAfter(value, newVal){
    let newNode = new Node(newVal);
    let currNode = this.head;

    while(currNode.value !== value){
      currNode = currNode.next;
    }

    newNode.next = currNode.next;
    currNode.next = newNode;
  }
}

let linList = new LinkedList();
linList.insert('A');
linList.insert('B');
linList.insert('C');

console.log(linList.head.value);
console.log(linList.includes('B'));

linList.append('Z');

linList.insertBefore('Z', 'K');
linList.insertAfter('C', 'T');


module.exports = { LinkedList, Node };
