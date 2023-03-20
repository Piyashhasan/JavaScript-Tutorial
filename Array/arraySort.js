// -------------------------------------
// Array Sort Methods
// -------------------------------------

/**
 * sort()
 * reverse()
 * Compare Function (ascending & descending order)
 * Math.max() /  Math.max.apply()
 * Math.min() / Math.min.apply()
 * Math.random()
 */

// --------- sort() ---------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortResult = fruits.sort();
console.log(sortResult);

// --------- reverse() ---------
const reverseResult = fruits.reverse();
console.log(reverseResult);

// -------------------------------------
// Numeric Sort / Compare Function
// -------------------------------------
const number = [100, 20, 30, 5, 10, 6, 5, 1, 400, 250, 500];

// ascending order
const sortNumber = number.sort((a, b) => {
  return a - b;
});
console.log(sortNumber);

// descending order
const reverseNumber = number.sort((a, b) => {
  return b - a;
});
console.log(reverseNumber);

// find Max number
const maxFinderFunc = (arr) => {
  return Math.max.apply(null, arr);
};
const maxNumber = maxFinderFunc(number);
console.log(maxNumber);

// find Min number
const minFinderFunc = (arr) => {
  return Math.min.apply(null, arr);
};
const minNumber = minFinderFunc(number);
console.log(minNumber);
