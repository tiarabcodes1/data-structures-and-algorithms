# Create a Pseudo Queue

Implement a Queue using two Stacks. This challenge builds off a previous that required Stack methods to be built manually. Instantiate these Stack objects in your PseudoQueue constructor.

## Whiteboard Process

![UML](https://user-images.githubusercontent.com/90294860/161655130-4626e971-c2fe-4a07-820f-d580065e1e06.png)

## Approach & Efficiency

Using the Stack mehtods created in a previous challenge, I created a new class that imported the Stack instance that held those method into it. The Pseudo Queue implements a standard queue interface using enqueue and dequeue. Since those methods were to be made to work on functions that created a "fake queue" made of stacks I refactored previously created queue methods to take in and reconstruct values within the two stacks that performed the enqueue and dequeue methods. `Stack2` managed the queue while `Stack1` took the input and gave the output. 

Using these methods allowed for a more efficeint execution of these functions and gave the illusion of built-in JavaScript methods. 

Enqueue was exected with a time of O(n)
Dequeue was executed with a time of O(1)
## Tests

Tests showed the functionality of the pseudo `queue`:
- Building an empty `queue` 
- adding values to a `queue` with `enqueue`
- removing values from a `queue` using `dequeue` 
- throwing errors when a `dequeue` is being attempted on an empty `queue`
![Solution](https://user-images.githubusercontent.com/90294860/161655900-302a2f26-c1a7-4d19-a06c-eb06099b759b.png)
