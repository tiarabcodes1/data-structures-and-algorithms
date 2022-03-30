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
    this.add = 0;
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
        this.count++;
        newNode.next = this.head;
        this.head = newNode;
      }
    } catch (err){
      console.error(err);
    }
  }

  append(value){
    let newNode = new Node(value);
    this.count++;
    let currNode = this.head;

    while(currNode.next){
      currNode = currNode.next;
    }
    currNode.next = newNode;
  }


  insertBefore(value, updatedValue){
    let newNode = new Node(updatedValue);
    this.count++;
    let currNode = this.head;

    while(currNode.next.value !== value){
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  insertAfter(value, updatedValue){
    let newNode = new Node(updatedValue);
    this.count++;
    let currNode = this.head;

    while(currNode.value !== value){
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  //Return the node’s value that is k places from the tail of the linked list.

  kthFromEnd(k) {
    let currNode = this.head;
    let kPlacesVal = this.count -k;

    if(k > this.count || k < 0) {
      return null;
    }// checks the index
    if( k === 1){
      return this.head.value;
    }
    while(kPlacesVal){
      currNode = currNode.next;
      kPlacesVal--;
    }
    return currNode.value;
  }
}


module.exports = { LinkedList, Node };
