# Challenge

1. Implementation: Singly Linked Lists
2. Extend a Linked List to allow various insertion methods.
3. To create a method that finds the k-th value from the end of a linked list.

## Whiteboarding process
![Screen Shot 2022-04-01 at 3 53 54 PM](https://user-images.githubusercontent.com/90294860/161332579-b511cdb0-0e97-4e0f-a3ae-981a34498c7b.png)

## Approach & Efficiency
I approached each challenge at a level of consideration on how one would build off of the other during the testing of eac method and implementation of the next. There were things that blocked some from passing, but that would create an opportunity for me to refactor and start a new approach that was more efficient than the last. The most importatnt thing that I have kept in mind was the Big O of each method all taking into account that they will not exceed the length of the list in time and memory. 

The Lists are created via a class Node constructor and LinkedList constructor and call utilize each method. This challenge uses these methods to test the functionality when coupled with an instantiated list using Jest test suites.

## Methods

| Method         | Argument         | Functionality                                                                                                     |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------|
| kthFromEnd()   | k                | Return the node’s value that is `k` places from the tail of the linked list.                                      |
| includes()     | value            | Indicates whether that value exists as a Node’s value somewhere within the list by returning a boolean.           |
| insert()       | value            | Adds a new node with that value to the  head  of the list with an O(1) Time performance                           |
| toString()     | n/a              | Returns: a string representing all the values in the Linked List, formatted as: "[ a ] -> [ b ] -> [ c ] -> NULL" |
| append()       | new value        | Adds a new node with the given `value` to the end of the list.                                                    |
| insertBefore() | value, new value | Adds a new node with the given new value immediately before the first node that has the value specified.          |
| insertAfter()  | value, new value | Adds a new node with the given new value immediately after the first node that has the value specified.           |



