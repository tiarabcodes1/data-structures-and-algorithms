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
    this.count = 0;
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
        //number of times console.count() is called
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

  toString() {
    let currNode = this.head;
    let results = '';
    while (currNode) {
      results += `${currNode.value} ->`;
      currNode = currNode.next;
    }
    return `${results}null`;
  }
  //Return the node’s value that is k places from the tail of the linked list.

  kthFromEnd(k) {
    let currNode = this.head;

    let position = this.count -k;
    if(k === this.count) {
      return null;
    }
    if(k < 0 || k > this.count) {
      return this.head;
    }
    if (k === 1) {
      return this.head.value;
    }
    while(position) {
      currNode = currNode.next;
      position--;
    }
    return currNode;
  }


  //Zip the two linked lists together into one so that the nodes alternate
  //between the two lists and return a reference to the the zipped list.

  //   zipLists(list1, list2) {

  //     if(list1 === null)
  //       return list2;
  //     if(list2 === null)
  //       return list1;

  //     if (list1.count < list2.count){
  //       list1.next = this.zipLists(list1.next, list2);
  //       return list1;
  //     } else {
  //       list2.next = this.zipLists(list1, list2.next);
  //       return list2;
  //     }
  //   }
  // }
}

let ll = new LinkedList;
ll.head = new Node(1);
ll.head.next = new Node(2);
ll.head.next.next = new Node(3);
ll.head.next.next.next= new Node(4);

console.log(ll.toString());






module.exports = { LinkedList, Node };
