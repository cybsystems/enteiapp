function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  if (a == 0 || b === 0) return -1;
  return a * b;
}
function div(a, b) {
    
  if (b == 0) return "b cant be zero";

  return a / b;
}
function mulAdd5(a, b) {
  return a * b + 5;
}

module.exports = { sum, mul, div };
