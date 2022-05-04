const { BinarySearchTree } = require('../../trees/classes/treeClass.js');
const { HashTable } = require('../hashtable.js');

// Write a function called tree_intersection that takes two binary trees as parameters.
//Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

const treeIntersection = (tree1, tree2) => {
  try {
    const treeRef = new HashTable(1024);
    const foundValues = [];

    addNodes(tree1.root, treeRef);
    checkRef(tree2.root, treeRef, foundValues);
    console.log('VALUES', foundValues);
    return foundValues;
  } catch (e) {
    console.error(e);
  }
};

const addNodes = (node, hashTable) => {
  if (node) {
    hashTable.set(node.value.toString(), node.value); //Key must be a string
    addNodes(node.left, hashTable);
    addNodes(node.right, hashTable);
  }
  return;
};

const checkRef = (node, hashTable, foundValues) => {
  if (node) {
    if (hashTable.contains(node.value.toString())) {
      foundValues.push(node.value);
    }
    checkRef(node.left, hashTable, foundValues);
    checkRef(node.right, hashTable, foundValues);
  }
  return; //When if statement breaks this ends function
};

const tree1 = new BinarySearchTree;
tree1.add(150);
tree1.add(100);
tree1.add(250);
tree1.add(75);
tree1.add(160);
tree1.add(200);
tree1.add(350);
tree1.add(125);
tree1.add(175);
tree1.add(300);
tree1.add(500);

const tree2 = new BinarySearchTree;
tree2.add(42);
tree2.add(100);
tree2.add(600);
tree2.add(15);
tree2.add(160);
tree2.add(200);
tree2.add(350);
tree2.add(125);
tree2.add(175);
tree2.add(4);
tree2.add(500);

console.log(treeIntersection(tree1, tree2));

module.exports = { treeIntersection };
