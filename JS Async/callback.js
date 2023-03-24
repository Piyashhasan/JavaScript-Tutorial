// Definition: Callback is function which function pass another function as a arguments.

// ------------- Example One -------------
// NB: Here problem is
/**
 * at a time we need to call two function
 */

function display(output) {
  console.log(output);
}
function calculatorOne(a, b) {
  return a + b;
}

const result = calculatorOne(5, 5);
display(result);

// ------------- Example Two -------------
// NB: Here problem is
/**
 * We have no control in displayTwo() function
 */
function displayTwo(sum) {
  console.log(sum);
}
function calculatorTwo(a, b) {
  const output = a + b;
  displayTwo(output);
}

calculatorTwo(10, 10);

// ------------- CALLBACK FUNCTION -------
/**
 * But in callback case we have a better control in display three function.
 */
function displayThree(sum) {
  console.log(sum);
}
function calculatorThree(a, b, callback) {
  const sum = a + b;
  if (callback) {
    callback(sum);
  }
  return sum;
}

const callBackResultOne = calculatorThree(20, 20);

console.log(callBackResultOne);

const callBackResultTwo = calculatorThree(30, 20, displayThree);
