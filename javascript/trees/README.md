# Trees


## Challenge
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a Binary Tree class
Create a Binary Search Tree class
Include methods for tree classes and test their functionality.


## Approach & Efficiency

Thinking about how I can make sure that a method would take less space and memory was daunting at first, but in order to contain the entire tree you must go through it. So I tried to think of ways to make sure that cases were though of when implementing the BinarySearchTree class, to make sure that the order in which things were added matched the critera. Values less than the root fall under the left sub-tree and values greater than the root fall under the right sub-tree when being added with the add method. Contains also returns back an error to the user if they input a string instead of an integer, otherwise returns `true` or `false` for a value passed through it pertainig the current binary tree. These methods end their search the moment their condition is no longer met, making them somewhat time saving, though there may be more effiecient ways to execute it beyond a basic level. 

## API
| Method    | Argument | Binary Tree                                                                                                  |
|-----------|----------|--------------------------------------------------------------------------------------------------------------|
| preOrder()  | N/A      | `current node` → `left Subtree` → `right  Subtree`                                                           |
| inOrder()   | N/A      | `left subtree` → `current` → `right subtree`                                                                 |
| postOrder() | N/A      | `left subtree` → `right subtree` → `current` </br><br>returns an array of the values, ordered appropriately. |
| findMax() | N/A  | Finds the maximum value stored a numeric tree.|
| breadthFirst | N/A | Returns a list of all values in the tree, in the order they were encountered |

| Method     | Argument | Binary Search Tree                                                                 |
|------------|----------|------------------------------------------------------------------------------------|
| add()      | value    |Adds a new node with that value in the correct location in the binary search tree.  |
| contains() | value      | Boolean indicating whether or not the value is in the tree at least once. |


| Function     | Argument | Kary Tree                                                                |
|------------|----------|------------------------------------------------------------------------------------|
| fizzBuzz()      | value    |Sets the values of each of the new integer node depending on the corresponding node value in the source tree to either fizz, buzz, fizzbuzz, or a string value.  |



# Whiteboard 

- findMax()
<img width="1411" alt="findMaxUML" src="https://user-images.githubusercontent.com/90294860/162849877-98d6f5fb-d663-441a-a6b8-9904c647eec5.png">

- breadthFirst()
![BREADTH-UML](https://user-images.githubusercontent.com/90294860/163061641-3873dfe3-9ad9-49ac-9de6-bc17e433fb2b.png)

- fizzBuzz 
![fizzBuzz-UML](https://user-images.githubusercontent.com/90294860/163291107-a1ed574c-4f9a-4959-ab86-f9b1c55e79e6.png)


# Contributions

Chattray Chea


