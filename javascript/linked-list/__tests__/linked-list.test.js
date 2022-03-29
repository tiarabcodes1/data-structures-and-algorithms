'use strict';

// Require our linked list implementation
const { LinkedList, Node } = require('../index');

describe('Linked List', () => {
  it('creates linked list', () => {
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

    expect(initializeList.head.value).toEqual('B');
  });

  it('testing append function', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('A');
    initializeList.head.next = new Node('B');
    initializeList.append('C');

    expect(initializeList.head.next.next.val).toEqual('C');
  });

  it('testing insert before function', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('A');
    initializeList.head.next = new Node('B');
    initializeList.insertBefore('B', 'C');

    expect(initializeList.head.next.val).toEqual('C');
  });

  it('Testing insert after function', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('A');
    initializeList.head.next = new Node('B');
    initializeList.insertAfter('B', 'C');

    expect(initializeList.head.next.val).toEqual('C');
  });

  it('can add more than one node', () => {
    let initializeList = new LinkedList();
    initializeList.head = new Node('B');

    initializeList.insert('A');
    initializeList.insert('C');

    expect(initializeList.next.next.value).toEqual('C');
  });

});
