// -----------------------
// Js Primitives
// -----------------------
// Definition: Primitives value is a value that has no properties and methods

/**
 * Object create two way
 * 1. Object literal / using curly bracket {}
 * 2. Using constructor - new Object()
 */

/**
 * In Js 7 type of primitives data types
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 * bigint
 */

// NB: Primitives value are immutable (value are not changeable)

/**
 * Object are non-primitives data types and mutable
 */

const info = {
  name: "Piyash Hasan",
  email: "piyashhasan38@gmail.com",
  age: 22,
};

const x = info;
console.log(x); // obj age properties not change

x.age = 23; // mutable age value

const address = "bogura"; // declare address variable
x["address"] = address; // assign address properties in info obj

console.log(x); // see age value are change
