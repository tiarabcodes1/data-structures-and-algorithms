'use strict';
const { BinarySearchTree  } = require('../../trees/classes/treeClass.js');
// const { describe } = require('eslint/lib/rule-tester/rule-tester');
const { treeIntersection } = require('../tree-intersection/tree-intersection.js');

describe('TESTING TreeIntersection() FUNCTIONALITY', () => {
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

  test('should return the repeating values in each tree', () => {

    expect(treeIntersection(tree1,tree2)).toEqual([
      100, 600, 160,
      125, 200, 175,
      350, 500
    ]);
  });

  test('should throw if trees have no matching values', () => {
    const newTree = new BinarySearchTree;
    newTree.add(150);
    newTree.add(100);
    newTree.add(75);
  
    const oldTree = new BinarySearchTree;
    oldTree.add(42);
    oldTree.add(30);
    oldTree.add(15);
  

    expect(treeIntersection(newTree, oldTree)).toEqual([]);
  });

  test('should error if only one tree is passed into function', () => {

    expect(treeIntersection(tree1)).toBeFalsy();
  });
});
