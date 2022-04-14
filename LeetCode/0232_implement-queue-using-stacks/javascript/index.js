var MyQueue = function () {
  this.s = [];
  this._s = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.s.length > 0) {
    this._s.push(this.s.pop());
  }

  let v = this._s.pop();

  while (this._s.length > 0) {
    this.s.push(this._s.pop());
  }

  return v;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.s.length > 0) {
    this._s.push(this.s.pop());
  }

  let v = this._s.pop();
  this.s.push(v);

  while (this._s.length > 0) {
    this.s.push(this._s.pop());
  }

  return v;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
