
var MyStack = function() {
  this.q1 = []
  this.q2 = []
  this.isUsing1 = true
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.isUsing1 ? this.q1.push(x) : this.q2.push(x)
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  let v
  let len
  
  if (this.isUsing1) {
      len = this.q1.length
      for (let i = 0; i < len - 1; i++) {
          this.q2.push(this.q1.shift())
      }
      v = this.q1.shift()
  } else {
      len = this.q2.length
      for (let i = 0; i < len - 1; i++) {
          this.q1.push(this.q2.shift())
      }
      v = this.q2.shift()
  }
  
  this.isUsing1 = !this.isUsing1
  return v
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  let v
  let len
  
  if (this.isUsing1) {
      len = this.q1.length
      for (let i = 0; i < len - 1; i++) {
          this.q2.push(this.q1.shift())
      }
      v = this.q1.shift()
      this.q2.push(v)
  } else {
      len = this.q2.length
      for (let i = 0; i < len - 1; i++) {
          this.q1.push(this.q2.shift())
      }
      v = this.q2.shift()
      this.q1.push(v)
  }
  
  this.isUsing1 = !this.isUsing1
  return v
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.isUsing1 ? this.q1.length === 0 : this.q2.length === 0
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/

var obj = new MyStack()
// ["MyStack","push","push","push","top"]
// [[],[1],[2],[3],[]]
obj.push(1)
obj.push(2)
obj.push(3)
obj.top()

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
