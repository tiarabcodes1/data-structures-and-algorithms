# Multi-bracket Validation

Implementations upon previously created Stack class.

# Challenge

Create an function that takes in a string and returns a boolean representing whether or not the brackets in the string are balanced.


## Whiteboard 
![UML](https://user-images.githubusercontent.com/90294860/162097256-92608dca-00ad-4d77-ac04-b09d129b862b.png)

## Approach & Efficiency

When starting this challenge I thought about how I could create a method that can take in one arguemnt and get a varritey of outputs based on the values already placed within the stack. This method used the push and pop method upon the passed argumenet based on a conditional that validates whether it is balanced with an already existing portion of the stack by popping the top off of the stack checking the input against it and returning true if it's a valid pair. Pipes within a conditional checks the closing brackets input against the top of the stack to test validity and return that boolean. If the stack is empty and the argument does not pass an opening bracket the validator will return false.

## API

| Method         | Argument         | Queue Functionality                                                                                               |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------|
| validateBrackets()      | string  |returns a boolean representing whether or not the brackets in the string are balanced.  |
