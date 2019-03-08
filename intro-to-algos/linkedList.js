class Node {
  constructor(val, next = null) {
    this._val = val;
    this._next = next;
  }
}

class LinkedList {
  constructor() {
    this._storage = {};
    this._head = null;
    this.length = 0;
  }

  // O(1)
  insert(val) {
    if (this._head) {
      const insertNext = (node) => {
	if (!node._next) {
	  node._next = new Node(val, null);
	} else {
	  insertNext(node._next);
	}
      }
      insertNext(this._head);
    } else {
      this._head = new Node(val, null);
    }
    this.length++;
  }

  // O(1)
  remove() {
    
  }

  
  removeTail() {
    
  }

  // O(n)
  contains(val) {
    if (!this._head) return false;
    if (this._head) {
      if (val === this._head._val) {
	return 0;
      } if (val ===)
      
    }
    
    
  }

  // O(1)
  isHead() {
    
  }

  // O(1)
  isTail() {
    
  }
}

let myList = new LinkedList();
myList.insert('a');
myList.insert('b');
myList.insert('c');

module.exports = LinkedList;
