'use strict';
const Stack = require('./../stack/stack');
function Queue2Stacks (capacity) {
  this._head = new Stack(capacity);
  this._tail = new Stack(capacity);
}

// O(1)
Queue.prototype.size = function () {
  return this._tail - this._head;
}

// O(1)
Queue.prototype.enqueue = function (data) {
  if (data === undefined || this.size() === this._capacity) return false;
  this._storage[this._tail++] = data;
  return this.size();
}

// O(1)
Queue.prototype.dequeue = function () {
  if (this.size() === 0) return null;

  const data = this._storage[this._head];
  this._storage[this._head++] = null;
  return data;
}

// O(1)
Queue.prototype.peek = function () {
  return this._storage[this._head];
}

// O(n)
Queue.prototype.contains = function (input) {
  for (let i = this._head; i < this._tail; i++) {
    if (isEqual(input, this._storage[i]))
      return true;
  }
  return false;
}

// O(n)
Queue.prototype.until = function (input) {
  for (let i = this._tail - 1; i >= this._head; i--) {
    if (isEqual(input, this._storage[i]))
      return this.size() - i;
  }
  return null;
}

module.exports = Queue;

// Private
function isEqual (a, b) {
  return (typeof a !== 'object' && b === a) ||
    (typeof a === 'object' && JSON.stringify(a) === JSON.stringify(b));
}