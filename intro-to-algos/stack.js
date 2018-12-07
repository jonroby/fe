// Implement a stack (push, pop, peek)
// All operations have O(1)

class Stack {
  constructor() {
    this._storage = {};
    this._count = 0;
  }

  push(val) {
    this._count++;
    this._storage[this._count] = val;
  }

  pop() {
    const popped = this._storage[this._count];
    delete this._storage[this._count]
    this._count--;
    return popped;
  }

  peek() {
    return this._storage[this._count];
  }
}

// const s = new Stack();
// s.push('a');
// s.push('b');
// s.push('c');
