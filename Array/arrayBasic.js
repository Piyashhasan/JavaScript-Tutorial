// DEFINITION: Array is a special variable which contain multiple data.

// ------------------------
// how to make array and insert value inside the array
// ------------------------
const person = ["Piyash", "shishir", "riyad", "digonto", "shakil"];
console.log(person);

const makePerson = [];
makePerson[0] = "Rasel";
makePerson[1] = "Rohi";
makePerson[2] = "Shawon dada";
makePerson[3] = "Momin Ben ten";
console.log(makePerson);

// NB: we also make an array using (new Array()) syntax

// -------------------------------------
// Accessing Array Elements
// -------------------------------------
const cars = ["volvo", "bmw", "audi", "mercedes", "range rover"];

// array element access
let firstElement = cars[0];
console.log("Array first Element:", firstElement);

// array element change
cars[0] = "volvo is a most safest car in this world";
console.log(cars);

// access the full array
console.log("Access the full array :", cars);

// -------------------------------------
// Arrays are Objects
// -------------------------------------
// NB: Array is a special type of object but in JavaScript arrays are best described as arrays.

const typeCheck = typeof cars;
console.log(typeCheck);

const carsObj = {
  name: "volvo",
};
console.log(typeof carsObj);


// -------------------------------------
// Array Properties and Methods
// -------------------------------------
/**
 * length
 * sort
 * **/
// --------- length ---------
const name = ["piyash", "shakil", "riyad", "digonto", "shishir"];
console.log(name.length);

// -------------------------------------
// Accessing the First Array Element & Last Element & Apply loop & Add element
// -------------------------------------

// --------- first elements access ---------
const fruits = ["Banana", "Orange", "Apple", "Mango", "Guava"];
const fruitsFirstElements = fruits[0];
console.log(fruitsFirstElements);

// --------- last elements access ---------
const fruitsLastElement = fruits[fruits.length - 1];
console.log("Last element:", fruitsLastElement);

// --------- apply loop ---------
fruits.forEach((value, index, array) => {
    console.log(`value ${value}`);
});

// --------- add element ---------
fruits.push("Pineapple");
console.log(fruits);

// -------------------------------------
// Associative Arrays
// -------------------------------------

// Definition: Name index array are called Associative Arrays. In js array are number index.

// -------------------------------------
// Difference Between Arrays and Objects & when use it
// -------------------------------------
/**
 * Array  are number index
 * Object are named index
 * When need number index use Array and Where need name index use Object
 */
