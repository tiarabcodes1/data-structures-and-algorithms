'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addDirectedEdge(startVertex, endVertex) {
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    let current = null;

    while (queue.length) {
      current = queue.pop();
      if (cb) cb(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }

    return visited;
  }

  depthFirst(root, cb) {

    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();
      if (cb) cb(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }

    return visited;
  }
}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const D = graph.addVertex('D');
const C = graph.addVertex('C');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(H, D);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(F, E);

// console.log(graph.adjacencyList);


/**
 * Efficiency
 * time: O(n) depends on the size of our root node.
 * Space: O(n) create a set that contains all nodes visited.
 * @param {Vertex} root
 * @param {Function} cb
 * @returns Set of Vertices
 */
function breadthFirst(root, cb) {
  const queue = [root];
  const visited = new Set();
  let current = null;

  while (queue.length) {
    current = queue.pop();
    if (cb) cb(current.value);

    const neighbors = getNeighbors(current);
    for (let edge of neighbors) {
      if (!visited.has(edge.vertex)) {
        visited.add(edge.vertex);
        queue.unshift(edge.vertex);
      }
    }
  }

  return visited;
}


function depthFirst(root, cb) {

  const stack = [root];
  const visited = new Set();
  let current = null;

  while(stack.length) {
    current = stack.pop();


    if (cb) cb(current.value);

    const neighbors = getNeighbors(current);
    for (let edge of neighbors) {
      if (!visited.has(edge.vertex)) {
        visited.add(edge.vertex);
        stack.push(edge.vertex);
      }
    }
  }

  return visited;
}

graph.depthFirst(A, console.log);
console.log('*****************');
graph.breadthFirst(A, console.log);
