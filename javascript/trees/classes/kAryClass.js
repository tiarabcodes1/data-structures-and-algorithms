// const { Node, BinarySearchTree, BinaryTree } = require("./treeClass");


// //If Nodes are able have more than 2 child nodes, we call the tree that contains them a K-ary Tree.
// class KaryNode {
//   constructor(value, k) {
//     this.value = value;
//     this.k = k;
//     this.children = [];
//   }

//   kTraverse() {
//     let results = [];
//     let current = this.root;
//     this.children = [current];

//     while (this.children.length) {
//       current = this.children.pop();
//       results.push(current.value);
//       if (current) this.children.unshift(current);
//     }

//     return results;
//   }
// }

// let binaryTree = new BinarySearchTree();
// binaryTree.add(5);
// binaryTree.children(13);
// binaryTree.add();
// binaryTree.add(5);


// module.exports = { KaryNode };
