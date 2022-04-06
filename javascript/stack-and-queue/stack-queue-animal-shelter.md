# Animal Shelter Queues

Implementations upon previously created Queue class.

# Challenge

Create an animal shelter that only accepts and removes dogs and cats in the form of a queue using first in first out method.

## Whiteboard 
![UML](https://user-images.githubusercontent.com/90294860/161893085-fecec915-d5c6-4cea-9548-7b6c9f320f5e.png)

## Approach & Efficiency

When starting this challenge I thought about how I could create each method with the thought of cutting down time and space in mind. Each are able to be used within the other method and create for a more efficient execution if used within a funciton. The tests reflect cases that may come up during production of a queue and throws errors upon a method that is executed on an empty queue. 

Upon creation of the AnimalShelter class I implemented a previously created queue class to have access to it's methods and apply them to new ones relevent to this queues functionality.

## API

| Method         | Argument         | Queue Functionality                                                                                               |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------|
| enqueue()      | animal          | adds a new animal with that type to the back of the queue with an O(1) Time performance.                           |
| dequeue()      |   pref           | Removes the preffered animal from the front of the queue.                                                                     |
