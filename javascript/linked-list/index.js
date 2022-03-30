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
    try{
      let newNode = new Node(value);
      if(!this.head){
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    } catch (err){
      console.error(err);
    }
  }

  append(value){
    let currNode = this.head;

    while(currNode.next){
      currNode = currNode.next;
    }
    currNode.next = new Node(value);
    currNode.next.next = null;
  }


  insertBefore(insertBefore, value){
    let currNode = this.head;
    while(currNode.next.val !== insertBefore){
      currNode = currNode.next;
    }
    let temp = currNode.next;
    currNode.next = new Node(value);
    currNode.next.next = temp;
  }

  insertAfter(insertAfter, value){
    let currNode = this.head;

    while(currNode.val !== insertAfter){
      currNode = currNode.next;
    }
    let temp = currNode.next;
    currNode.next = new Node(value);
    currNode.next.next = temp;
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
