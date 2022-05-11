const { Graph } = require('./graph.js');

function businessTrip(graph, cityArray) {

  //returns trip cost or null

  //check size of graph return message if no cities added
  if (!graph.adjacencyList.size) {
    return 'There are no listed cities for your trip';
  }
  try {
    let directFlights = graph.adjacencyList.get(cityArray[0]);

    if (directFlights) {
      for (let available of directFlights) {
        if (available.vertex.value === cityArray[1].value) {
          return [true, `${available.weight}`];
        }
      }
    }
    return [false, null];
  } catch (e) {
    console.error(e);
  }
}

const newTrip = new Graph();

const OakHill = newTrip.addVertex('Oak Hill');
const Beckley = newTrip.addVertex('Beckley');
const Charleston = newTrip.addVertex('Charleston');
const Huntington = newTrip.addVertex('Huntington');

newTrip.addDirectedEdge(OakHill, Beckley, 5);
newTrip.addDirectedEdge(Charleston, Huntington, 1);


console.log(businessTrip(newTrip, [OakHill, Beckley]));

module.exports = businessTrip;
