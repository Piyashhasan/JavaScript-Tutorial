// DEFINITION: Array iteration methods operate on every array item.

// ------------------------
// Array Iteration Methods
// ------------------------

/**
 * forEach()
 * map()
 * filter()
 * reducer()
 * reducerRight()
 * find()
 * findIndex()
 * every()
 * some()
 * indexOf()
 * lastIndexOf()
 * Array.from()
 * keys()
 * entries()
 * includes()
 * spread(...)
 */

// --------------------- forEach() ---------------------
// NB: forEach() not return a new array.
const forEachNumbers = [1, 2, 3, 4, 5, 6, 7];
forEachNumbers.forEach((value, index, arr) => {
    return console.log(value * 2); // multiply and return new value
});
console.log(forEachNumbers); // not change main array

// --------------------- map() ---------------------
// NB: map() return a new array.
const mapNumbers = [1, 2, 3, 4, 5, 6, 7];
const result = mapNumbers.map((value, index, arr) => {
  return value * 3;
});
console.log(result);

// --------------------- filter() ---------------------
// NB: filter() return a new array.
const filterNumbers = [1, 2, 3, 4, 55, 66, 77, 88, 9, 18];

// --- filter output ---
const filterResult = filterNumbers.filter((value) => {
  return value >= 18;
});

//--- sort value
const sortValue = filterResult.sort((a, b) => {
  return a - b;
});
// --- max value find out
const maxFinder = (arr) => {
  return Math.max.apply(null, arr);
};
const maxValue = maxFinder(filterResult);

// --- min value find out
const minFinder = (arr) => {
  return Math.min.apply(null, arr);
};
const minValue = minFinder(filterResult);

console.log(`
            Filter Value: ${filterResult}
            Sort Array Value: ${sortValue}
            Max Value : ${maxValue}
            Min Value : ${minValue}
`);

// --------------------- reducer() ---------------------
// NB: The reduce() method does not reduce the original array and it works left to right

/**
 * take 4 arguments
 * The total (the initial value / previously returned value)
 * value
 * index
 * array
 */

const reducerNumber = [1, 2, 3, 4, 5, 6, 7];
const totalValue = reducerNumber.reduce((total, value) => {
  return total + value;
});
console.log(totalValue);

// --------------------- reducerRight() ---------------------
// NB: It works right to left
const rightReducer = reducerNumber.reduceRight((total, value) => {
  return total + value;
});
console.log(rightReducer);

// --------------------- find() ---------------------
// NB: The find() method returns the value of the first array element that passes a test function.
const findNumbers = [1, 2, 3, 4, 55, 66, 77, 88, 9, 18, 19];
const findValue = findNumbers.find((value) => {
  return value > 18;
});

console.log(findValue); // output : 55

const sortFindNumber = findNumbers.sort((a, b) => {
  return a - b;
});

const rightOutput = sortFindNumber.find((value) => {
  return value > 18;
});
console.log(rightOutput); // output: 19

// --------------------- findIndex() ---------------------
const findIndexNumber = sortFindNumber.findIndex((value) => {
  return value > 18;
});
console.log(`Sort value index Number: ${findIndexNumber}`) // output: 6

// --------------------- every() ---------------------
// NB: condition full fill all array element then every() return true other wise false
const everyNumbers = [1, 2, 3, 4, 55, 66, 77, 88, 9, 18, 19];
const everyPassResult = everyNumbers.every((value, index, arr) => {
  return value >= 18;
});
console.log(everyPassResult); // output : false

// --------------------- some() ---------------------
// NB: condition full fill some array element some() return true other wise false
const someNumbers = [4, 55, 66, 77, 88, 9, 18, 19];
const somePassResult = someNumbers.some((value) => {
  return value > 3 && value <= 4;
});
console.log(somePassResult);

// --------------------- indexOf() ---------------------
// NB: return the element position no
const fruits = ["Apple", "Orange", "Apple", "Mango"];
const mangoPosition = fruits.indexOf("Mango") + 1;
console.log(mangoPosition)

// --------------------- lastIndexOf() ---------------------
const basket = ["Orange", "Apple", "Mango"];
const applePositionFromLast = basket.lastIndexOf("Apple");
console.log(applePositionFromLast);

// --------------------- Array.from() ---------------------
let str = "Hello world";
const myArray = Array.from(str);
console.log(myArray); // output : ['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

// --------------------- keys() ---------------------
// NB: Return the array index
const cars = ["volvo", "bmw", "audi", "mercedes"];
const keys = cars.keys()
console.log(keys)


// --------------------- includes() ---------------------
const findVolvo = cars.includes('volvo')
console.log(findVolvo)
