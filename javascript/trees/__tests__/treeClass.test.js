//
//
//
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal


const { BinaryTree, Node, BinarySearchTree } = require('../classes/treeClass.js');

describe('Tree tests, Binary Tree/Binary Search Tree', () => {
  //GLOBAL LIST TESTS FUNCTIONALITY

  let bTree = new BinaryTree();
  let bsTree = new BinarySearchTree();

  it('Can successfully instantiate an empty tree', () => {

    expect(bTree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    bTree.root = new Node(1);

    expect(bTree.root.value).toEqual(1);
  });

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    bsTree.add(3);
    bsTree.add(1);
    bsTree.add(500);
    expect(bsTree.root.left.value).toEqual(1);
    expect(bsTree.root.right.value).toEqual(500);

  });

  it('Can successfully return a collection from a pre-order traversal', () => {
    bTree.root.left = new Node(1);
    bTree.root.left.right = new Node(7);
    bTree.root.right = new Node(30);
    bTree.root.right.right = new Node(56);
    bTree.root.left.right.right = new Node(9);

    expect(bTree.preOrder()).toEqual([1, 1, 7, 9, 30, 56]);

  });

  it('Can successfully return a collection from an in-order traversal', () => {

    expect(bTree.inOrder()).toEqual([1, 7, 9, 1, 30, 56]);
  });

  it('Can successfully return a collection from a post-order traversal', () => {


    expect(bTree.postOrder()).toEqual([9, 7, 1, 56, 30, 1]);
    console.log(bTree);
  });

  it('false for the contains method, given an existing or non-existing node value', () => {

    expect(bsTree.contains(900000)).toEqual(false);

  });
});
