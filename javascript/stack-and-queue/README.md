# Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Approach & Efficiency

When starting this challenge I thought about how I could create each method with the thought of cutting down time and space in mind. Each are able to be used within the other method and create for a more efficient execution if used within a funciton. The tests reflect cases that may come up during production of a queue or stack and throws errors upon a method that is executed on an empty stack or queue. 

## API

| Method         | Argument         | Queue Functionality                                                                                               |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------|
| enqueue()      | value            | adds a new node with that value to the back of the queue with an O(1) Time performance.                           |
| dequeue()      |   n/a            | Removes the node from the front of the queue.                                                                     |
| peek()         |   n/a            | Value of the node located at the front of the queue                                                               |
| isEmpty()      |   n/a            |  Boolean indicating whether or not the queue is empty                                                             |


| Method         | Argument         | Stack Functionality                                                                                               |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------|
| push()         | value            | adds a new node with that value to the top of the stack with an O(1) Time performance.                            |
| pop()          |   n/a            | Removes the node from the top of the stack                                                                        |
| peek()         |   n/a            | Value of the node located at the top of the stack                                                                 |
| isEmpty()      |   n/a            | Boolean indicating whether or not the queue is empty   
