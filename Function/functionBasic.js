// DEFINITION: Function is a block of code design by perform a particular task.
// Parameter: Parameter is a parentheses inside value when function declare.
// Arguments: Arguments is a received value when a function invoked.

// ------------------------
// Function syntax
// ------------------------
function myFunction(p1, p2) {
  return p1 * p2;
}
const result = myFunction(3, 4);
// console.log(result);

// ------------------------
// Local Variable
// ------------------------
// NB: Insight function carName parameter is not LOCAL variable, but outside the function carName is a local variable because it's declare in globally.
function printCarName(carName) {
  let result = `Car name is : ${carName}`;
  return result;
}
const carName = printCarName("volvo");
console.log(carName);
