const { it } = require('eslint/lib/rule-tester/rule-tester');
const { Stack, Node} = require('../stack-queue-class.js');

describe('stack & queue tests', () => {

  //tests stacks
  it('Can successfully push onto a stack', () => {
    let initStack = new Stack();
    initStack.push(8);

    expect(initStack.top.value).toEqual(8);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let initStack = new Stack();
    initStack.top = new Node(2);
    initStack.push(4);
    initStack.push(6);
    //equals last added, last = new top
    expect(initStack.top.value).toEqual(6);
  });

  it('Can successfully pop off the stack', () => {
    let initStack = new Stack;
    initStack.push(4);
    initStack.push(6);
    initStack.push(8);
    initStack.push(10);
    // last added first removed
    expect(initStack.pop()).toEqual(10);
  });

  it('Can successfully empty a stack after multiple pops', () =>{
    let initStack = new Stack;
    initStack.push(4);
    initStack.push(6);
    initStack.push(8);
    initStack.push(10);

    expect(initStack.pop()).toEqual(10);
    expect(initStack.pop()).toEqual(8);
    expect(initStack.pop()).toEqual(6);
    expect(initStack.pop()).toEqual(4);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let initStack = new Stack();
    initStack.top = new Node(2);
    initStack.push(4);
    initStack.push(6);
    //show top/last added
    expect(initStack.peek()).toEqual(6);
  });

  it('Can successfully instantiate an empty stack', () => {
    let initStack = new Stack();

    expect(initStack.isEmpty()).toEqual(true);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let initStack = new Stack();
    // initStack.top = new Node(2);
    console.log('pop', initStack);
    expect(initStack.peek()).toEqual(initStack.isEmpty());
    expect(initStack.pop()).toEqual(initStack.isEmpty());

  });



  // tests queues


});
