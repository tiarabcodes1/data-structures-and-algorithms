const { Stack, Node, Queue} = require('../classes/stack-queue-class');

describe('stack tests', () => {

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
    expect(initStack.peek()).toEqual(initStack.isEmpty());
    expect(initStack.pop()).toEqual(initStack.isEmpty());

  });
  it('Can validate true bracket balance', () => {
    let initStack = new Stack();
    initStack.validateBrackets('[]');
    expect(initStack.validateBrackets('[()()]')).toEqual(true);
    console.log('test', initStack);

  });


});

// tests queues

describe('queue tests', () => {
  it('Can successfully enqueue into a queue', () => {
    let initQueue = new Queue();
    initQueue.enqueue(2);
    initQueue.enqueue(60);
    initQueue.enqueue(100);

    expect(initQueue.front.value).toEqual(2);
    expect(initQueue.front.next.value).toEqual(60);
    expect(initQueue.back.value).toEqual(100);
    expect(initQueue.back.next).toEqual(null);
  });

  it('Can successfully dequeue', () => {
    let initQueue = new Queue();
    initQueue.enqueue(2);
    initQueue.enqueue(60);
    initQueue.enqueue(100);

    expect(initQueue.dequeue()).toEqual(2);
    expect(initQueue.dequeue()).toEqual(60);
    expect(initQueue.dequeue()).toBeTruthy;
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let initQueue = new Queue();
    initQueue.enqueue(2);
    initQueue.enqueue(60);
    initQueue.enqueue(100);

    expect(initQueue.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty queue', () => {
    let initQueue = new Queue();
    expect(initQueue.front).toEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let initQueue = new Queue();
    expect(initQueue.peek()).toEqual(undefined);
    expect(initQueue.dequeue()).toEqual(undefined);
  });


});
