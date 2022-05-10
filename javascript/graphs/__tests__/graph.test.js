const { Graph } = require('../graph');

describe('TESTING GRAPH METHODS', () => {

  test('Node can be successfully added to the graph', () => {
    const newGraph = new Graph();
    const newValue = newGraph.addVertex('Chance');

    expect(newValue).toEqual({ "value": 'Chance' });
  });

  test('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const value1 = graph.addVertex('value1');
    const value2 = graph.addVertex('value2');

    graph.addDirectedEdge(value1, value2);

    let newEdge = graph.getNeighbors(value1);
    expect(newEdge).toEqual([{"vertex": {"value": "value2"}, "weight": 0}]);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    const newGraph = new Graph();
    const value1 = newGraph.addVertex('value1');
    const value2 = newGraph.addVertex('value2');
    newGraph.addDirectedEdge(value1, value2);

    let nodes = newGraph.getNodes();
    expect(console.log(nodes)).toEqual(newGraph.vertex);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const newGraph = new Graph();
    const value100 = newGraph.addVertex('value100');
    const value200 = newGraph.addVertex('value200');

    newGraph.addDirectedEdge(value100, value200);

    let newEdge = newGraph.getNeighbors(value100);
    
    expect(newEdge).toEqual([{"vertex": {"value": "value200"}, "weight": 0}]);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    const newGraph = new Graph();
    const value100 = newGraph.addVertex('value100');
    const value200 = newGraph.addVertex('value200');
  
    newGraph.addDirectedEdge(value100, value200);
    let graphSize = newGraph.size();

    expect(graphSize).toEqual(2);
  });
});
