// how to declare string
/**
 * using single quotes
 * using double quotes
 * find out the string length
 */

const myName = "Md Piyash Hasan";
console.log("Name: ", myName);

const nameLength = myName.length;
console.log("Name Length: ", nameLength);

// -------------------
// Escape Character
// ------------------
/**
 * use ( \ \ )
 */
const text = 'We are the so-called "Vikings" from the north';
console.log(text);

// -------------------
// JavaScript Strings as Objects
// -------------------
const name = "John";
console.log("Name One: ", name);
console.log(typeof name);

const nameTwo = new String("John");
console.log("Name Two: ", nameTwo);
console.log(typeof nameTwo);

// comparison between two String
const comparisonOne = name == nameTwo;
console.log(comparisonOne); // when double equal use return true

const comparisonThree = name === nameTwo;
console.log(comparisonOne); // when double equal and type both check return false

const nameThree = new String("John");
const nameFour = new String("John");
const comparisonTwo = nameThree === nameFour;
console.log(comparisonTwo); // objOne and objTwo always return false when comparison between each other.
