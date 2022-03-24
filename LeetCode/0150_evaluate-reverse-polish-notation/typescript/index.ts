function evalRPN(tokens: string[]): number {
  const fourMath = (a: number, b: number, op: string) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          throw "invalid number";
        }
        return Math.trunc(a / b);
    }
    throw "invalid op";
  };

  const arr = [];

  tokens.forEach((t, i) => {
    const n = parseInt(t, 10);
    const isNum = !isNaN(n);

    if (isNum) {
      arr.push(n);
    } else {
      const b = arr.pop();
      const a = arr.pop();
      arr.push(fourMath(a, b, t));
    }
  });
  return arr[0];
}

/**
["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
["10","6","12","-11","*","/","*","17","+","5","+"]
["10","6","-132","/","*","17","+","5","+"]
["10","0","*","17","+","5","+"]
["0","17","+","5","+"]
["17","5","+"]
**/
