/**
 * ------ JavaScript Search Methods ------
 * indexOf()
 * lastIndexOf()
 * search()
 * match()
 * matchAll()
 * includes()
 * startsWith()
 * endsWith()
 * **/

// --------- indexOf() ---------
// NB: accept second parameter , count the value form second parameter
let str = "Please locate where 'locate' occurs!";
let indexOfResult = str.indexOf("locate");
console.log(indexOfResult); // return the locate position

// --------- lastIndexOf() ---------
// NB: accept second parameter , count the value form second parameter
let lastIndexOfResult = str.lastIndexOf("locate");
console.log(lastIndexOfResult); // return the locate position from last

// --------- search() ---------
// NB: indexOf and search method same work policy but difference is
// 1. indexOf accept 2nd parameter but not accept regular expression
// 2. search method accept regular expression not 2nd parameter.
const textTwo = "My name is Md Piyash Hasan, I am a web developer and designer";

const indexOfResultTwo = textTwo.indexOf("P");
console.log(indexOfResultTwo);

const searchResult = textTwo.search("Piyash");
console.log(searchResult);

// --------- match() ---------
let textThree = "The rain in SPAIN stays mainly in the plain";
const matchResult = textThree.match("ain");
console.log(matchResult);

// global find match
const globalFindMatch = text.match(/ain/g);
console.log(globalFindMatch) // return an array with all ain value

// globally and caseInSensitive find match value
console.log(text.match(/ain/gi))

// --------- matchAll() ---------
let textFour = "I love cats. Cats are very easy to love. Cats are very popular.";

const iterator = text.matchAll("cats");
console.log("another iterator : ", iterator);

const usingRegex = text.matchAll(/Cats/gi); // when use regex throw an error solve this error convert into array using - Array.from() methods.
const newArray = [];
if (usingRegex) {
  const convertIntoArray = Array.from(usingRegex);
  convertIntoArray.forEach((value) => {
    value.forEach((value) => {
      newArray.push(value);
    });
  });
} else {
  console.log("not found any value");
}
console.log(newArray);

// --------- includes() ---------
let text = "Hello world, worldTwo welcome to the universe a.";
let result = text.includes("world");
console.log(result);

// --------- startsWith() ---------
let startWithResult = text.startsWith("Hello");
console.log(startWithResult);

// --------- endsWith() ---------
let endsWithResult = text.endsWith(".");
console.log(endsWithResult);
