# Singly Linked List

Given an initial Node class that stores values and a pointer to the next node a singly linked list is created.

## Linked List Implementation

Create a linked list clas that includes a head property, that upon instantiation creates an empty linked list. The class contained the following methods:

- Insert
- Includes 
- To string

## Approach & Efficiency

I thought of how each method would be able to be implemented to any portion of the code-base to expand the scalabilty of the project. During research on linked-lists and based on previous lectures I saw that the approach to be taken created the opportunity to have an execution of methods that will be as long as the list presented to it. This allows for an efficient proccess and will only compile for the amount of items within each list. Big O(n).

## API

The methods publicly available to my linked list:

- new Node();
    - this takes in the value anticipted to be within then list
- new LinkedList();
    - this takes no parameters and instantiates the list

- includes();
    - passes the value to be validates that it's placed within the proper node

- insert();
    - passes the value to be added within the head node

- append();
    - passes the value to be added within the 'next' node, appends to the head initially

- toString();
    - this takes no parameters 
    - returns a string Returns: a string representing all the values in the Linked List
        - ex: "[ a ] -> [ b ] -> [ c ] -> NULL"
