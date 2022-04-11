
const BinaryTree = require('./treeClass');

class BinarySearchTree {
  constructor(){

  }

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
        } else if (typeof value === 'string'){ // value is equal to another value
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
