'use strict';

class Node {
  constructor(value, left = null, right = null) {
    //value stored in the node
    this.value = value;
    //left child node
    this.left = left;
    //right child node
    this.right = right;
  }
}

// class KaryNode {
//   constructor(value, k) {
//     this.value = value;
//     this.k = k;
//     this.children = [];
//   }
// }

class BinaryTree {
  constructor() {
    this.root = null;
  }

  //Recursive approach
  preOrder() {
    //Traversed values of tree
    let results = [];

    //Recursive helper function, walks through all values and does something with the node <-- currNode argument
    let traverse = (node) => {

      // Pushes the added value in depending on conditions
      results.push(node.value);

      // decides where added value belongs on subtrees
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      // else {
      //   throw new Error('Sorry value must not be equal to current nodes');
      // }
    };
    //runs the function starting at the root
    traverse(this.root);
    return results;
  }


  inOrder() {
    let results = [];

    let traverse = (node) => {
      // where do I go?
      if (node.left) traverse(node.left);

      // do
      results.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let traverse = (node) => {
      // where do I go?
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      // do
      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }

  breadthFirst() {
    let results = [];
    let current = this.root;
    let children = [current];

    while (children.length) {
      current = children.pop();
      results.push(current.value);
      if (current.left) children.unshift(current.left);
      if (current.right) children.unshift(current.right);
    }

    return results;
  }

  findMax() {
    let maxValue;

    let traverse = (node) => {

      if (node === null) {
        return Number.MIN_VALUE;
      }

      maxValue = node.value;
      let leftVal = traverse(node.left);
      let rightVal = traverse(node.right);

      if (leftVal > maxValue){
        maxValue = leftVal;
      }
      if(rightVal > maxValue){
        maxValue = rightVal;
      }

    };
    traverse(this.root);
    return maxValue;
  }

}


class BinarySearchTree extends BinaryTree {

  //adds a new node with that value in the correct location in the binary search tree
  add(value) {
    let node = this.root;
    if (node === null) {
      this.root = new Node(value);
    } else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else if (typeof value === 'string') { // value is equal to another value
          throw new Error('Sorry, strings can not be added');
        }
      };
      return searchTree(node);
    }
  }

  contains(value) {
    try {
      let currNode = this.root;
      let present = false;

      while (!present && currNode) {
        if (value < currNode.value) {
          currNode = currNode.left;
        } else if (value > currNode.value) {
          currNode = currNode.right;
        } else if (typeof value === 'string') {
          throw new Error(`${value} is not a valid value`);
        }
        else {
          present = true;
        }
      }
      return present;
    } catch (err) {
      console.error(err);
    }
  }



}




let tree = new BinaryTree();
tree.root = new Node(3);
tree.root.left = new Node(20000);
tree.root.right = new Node(2000000);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(7);
// tree.root.right.left = new Node(30);
// tree.root.right.right = new Node(56);
// tree.root.left.right.right = new Node(9);
console.log(tree.findMax());

module.exports = {
  BinaryTree,
  Node,
  BinarySearchTree,
};
