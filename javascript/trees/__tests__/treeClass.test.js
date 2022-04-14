const { BinaryTree, Node, BinarySearchTree, KaryTree } = require('../classes/treeClass.js');

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

  it('test, findMax method returns the max value', () => {

    expect(bTree.findMax()).toEqual(56);

  });

  it('test, bredthFirst to equal tree in the order of node encounters', () => {

    expect(bTree.breadthFirst()).toEqual([1, 1, 30, 7, 56, 9]);
    console.log(bTree);

  });

  it('test, fizzBuzz functionality works on Kary tree', () => {

    function breadthFirst(node){
      const arr = [];
      const result = [];
      let current = node;

      arr.unshift(node);

      while(arr.length){
        current = arr.pop();
        result.push(current.value);
        for (let node of current.children){
          arr.unshift(node);
        }
      }
      return result;
    }
    function fizzBuzz(node){
      let result = [];
      let i;

      for(i = 0; i < node.length; i++) {
        if(node[i] % 15 === 0) result.push("FizzBuzz");
        else if(node[i] % 3 === 0) result.push("Fizz");
        else if (node[i] % 5 === 0) result.push("Buzz");
        else result.push(node[i].toString());
      }
      return result;
    }

    let tree = new KaryTree(4);

    tree.root = new Node(10);
    tree.root.children.push(new Node(1), new Node(3), new Node(15), new Node(32));
    tree.root.children[0].children.push(new Node(40), new Node(30), new Node(9));
    tree.root.children[1].children.push(new Node(45), new Node(38), new Node(90));
    tree.root.children[2].children.push(new Node(12), new Node(60), new Node(41));
    tree.root.children[3].children.push(new Node(80), new Node(66), new Node(49));
    expect(fizzBuzz(breadthFirst(tree.root))).toEqual([
      'Buzz', '1',
      'Fizz','FizzBuzz',
      '32', 'Buzz',
      'FizzBuzz', 'Fizz',
      'FizzBuzz', '38',
      'FizzBuzz', 'Fizz',
      'FizzBuzz', '41',
      'Buzz', 'Fizz',
      '49'
    ]);
    console.log(tree);

  });

});
