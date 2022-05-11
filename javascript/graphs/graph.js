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
    this.vertices = new Set();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this.vertices.add(vertex);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    //returns all nodes from set
    this.vertices.values();
  }

  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    //places root in the Nodes
    visited.add(root);
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

  size() {
    return this.vertices.size;
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


graph.depthFirst(A, console.log);
console.log('*****************');
graph.breadthFirst(A, console.log);

module.exports = {Graph, Edge,Vertex };
