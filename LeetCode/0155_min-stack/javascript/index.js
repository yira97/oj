// [3]
// [X]

// [3][5]
// [X][3]

// [3][5][2]
// [X][3][3]

// [3][5][2][4]
// [X][3][3][2]

// [3][5][2]
// [X][3][3]

var MinStack = function () {
  this.val = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min.length === 0) {
    this.min.push(val);
  } else {
    this.min.push(Math.min(val, this.min[this.min.length - 1]));
  }
  this.val.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.val.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.val[this.val.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // getMin operations will always be called on non-empty stacks.
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
