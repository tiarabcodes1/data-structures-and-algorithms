const { Graph } = require('../graph');
const businessTrip = require('../businessTrip');

describe('TESTING GRAPH METHODS', () => {

  test('Should return a true value and weight reflecting input', () => {
    const newTrip = new Graph();

    const OakHill = newTrip.addVertex('Oak Hill');
    const Beckley = newTrip.addVertex('Beckley');
    const Charleston = newTrip.addVertex('Charleston');
    const Huntington = newTrip.addVertex('Huntington');

    newTrip.addDirectedEdge(OakHill, Beckley, 5);
    newTrip.addDirectedEdge(Charleston, Huntington, 1);


    console.log(businessTrip(newTrip, [OakHill, Beckley]));

    expect(businessTrip(newTrip, [OakHill, Beckley])).toEqual([ true, '5' ]);

  });

  test('Should error due to improper graph layout', () => {

    const newTrip = new Graph();

    let brokenFunction = businessTrip(newTrip);
    expect(brokenFunction).toEqual("There are no listed cities for your trip");
    
  });

  test('Should return false with weight of null for trip if it does not exist', () => {

    const newTrip = new Graph();

    const OakHill = newTrip.addVertex('Oak Hill');
    const Beckley = newTrip.addVertex('Beckley');


    console.log(businessTrip(newTrip, [OakHill, Beckley]));

    expect(businessTrip(newTrip, [OakHill, Beckley])).toEqual([ false, null ]);

  });
});
