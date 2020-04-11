function sum(x, y) {
  return x + y;
}

function tkaw(x, y) {
  return x - y;
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function fact(x) {
  var result = 1;
  for (let i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}

export { sum, tkaw, mult, div, fact };
