const { Stack, Node } = require('../stack-queue-class.js');

describe('stack & queue tests', () => {

//tests stacks
  it('Can successfully push onto a stack', () => {
    let initStack = new Stack();
    this.top = new Node(1);
    this.top.next = new Node(3);
    let pushedVal = new Node(2);

    expect(initStack.push(pushedVal)).toEqual(2);
  });

  // tests queues


});
