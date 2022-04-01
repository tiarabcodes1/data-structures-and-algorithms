'use strict';

// Require our linked list implementation
const { LinkedList, Node } = require('../linked.list.class1.js');

describe('Linked List', () => {
  //GLOBAL LIST TESTS FUNCTIONALITY

  it('creates linked list', () => {
    //Empty object = truthy
    let initializeList = new LinkedList();
    expect(initializeList).toBeTruthy();
  });

  it('adds value to front of list', () => {
    let value = new Node('A');
    let initializeList = new LinkedList();
    initializeList.head = value;
    expect(initializeList.head).toEqual(value);
  });

  it('head is at head node location', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('B');
    initializeList.head.next = new Node('A');
    initializeList.head.next.next = new Node('C');

    console.log(initializeList);
    expect(initializeList.head.next.next.value).toEqual('C');
  });

  it('testing append function', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('A');
    initializeList.head.next = new Node('B');
    initializeList.append('C');

    expect(initializeList.head.next.next.value).toEqual('C');
  });

  it('testing insert before function', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('A');
    initializeList.head.next = new Node('B');
    initializeList.insertBefore('B', 'C');

    expect(initializeList.head.next.value).toEqual('C');
  });

  it('Testing insert after function', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('A');
    initializeList.head.next = new Node('B');
    initializeList.insertAfter('B', 'C');

    expect(initializeList.head.next.next.value).toEqual('C');
  });

  it('can add more than one node', () => {

    let initializeList = new LinkedList();

    initializeList.head = new Node('B');

    initializeList.insert('A');
    initializeList.insert('C');
    console.log(initializeList.length);
    expect(initializeList.includes('A')).toBeTruthy;
    expect(initializeList.includes('C')).toBeTruthy;
  });

  it('Test that k is > linked-list.length', () => {

    let kthGreater = new LinkedList().kthFromEnd(2);

    expect(kthGreater).toEqual(null);
  });


  it('Where k and the length of the list are the same', () => {


    let ll = new LinkedList();
    ll.head = new Node(1);
    ll.append(new Node(2));
    ll.append(new Node(3));
    ll.count++;
    // 3 positions from the initial node is null on the ll
    expect(ll.kthFromEnd(3)).toEqual(null);
  });

  it('Where k is not a positive integer', () => {
    let ll = new LinkedList();
    ll.head = new Node(30);
    let negInteger = ll.kthFromEnd(-1);
    //if(k < this.count || k < 0) works correctly
    expect(negInteger.value).toEqual(ll.head.value);
  });

  it('Where the linked list is of a size 1', () => {
    let ll = new LinkedList();
    ll.head = new Node(1);

    expect(ll.kthFromEnd(1).value).toEqual(ll.head.value);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let ll = new LinkedList();
    ll.head = new Node(1);
    ll.append(new Node(2));
    ll.append(new Node(3));
    ll.append(new Node(4));
    ll.append(new Node(5));
    let kInMiddle = ll.kthFromEnd(2);

    expect(kInMiddle.value.value).toEqual(3);
  });

  //TO DO: zipped list test
});
