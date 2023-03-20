// -----------------------
// Length Method
// -----------------------
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let findLength = alphabet.length;
console.log("TEXT Length: ", findLength);

// -----------------------
// Extracting String Parts
// -----------------------
/**
 * slice(start, end)
 * substring(start, end) -- not accept negative value
 * substr(start, length) -- almost deprecated
 */

// ---- slice method ----
let fruits = "Apple, Banana, Orange";
let slicePart = fruits.slice(7, 13);
console.log("Slice Method: ", slicePart);

let slicePartWithOutParameter = fruits.slice(7); // when provide one parameter only
console.log("when provide one parameter only: ", slicePartWithOutParameter);

// ---- substring method ----
// NB: Difference between slice and substring - slice accept negative value but substring cant accept negative value, it consider negative value like zero.
let basket = "Apple, Banana, Orange, pineapple";
let findBanana = basket.substring(7, 13);
let findOrange = basket.substring(15);
console.log(findBanana);
console.log(findOrange);


// ---- substr method ----
let str = "Apple, Banana, Kiwi";
let subStrPart = str.substr(7, 6);
console.log("Substr method: ", subStrPart);

let subStrPartWithOutParameter = str.substr(7);
console.log(subStrPartWithOutParameter);

let subStrNegativeValue = str.substr(-4);
console.log(subStrNegativeValue); // return kiwi count from last value

// -----------------------
// Replacing Method
// -----------------------
let textTwo = "Please visit Microsoft";
let replacing = textTwo.replace("Microsoft", "W3 Schools");
console.log(textTwo);
console.log(replacing);

let solveCaseSensitive = textTwo.replace(/MICROSOFT/i, "W3 School");
console.log(solveCaseSensitive);

let anotherText = "Please visit Microsoft and visit also Microsoft head office";
let replaceAllMicrosoft = anotherText.replace(/Microsoft/g, "W3 School");
console.log(replaceAllMicrosoft);

// -----------------------
// Converting to Upper and Lower Case
// -----------------------
const name = "Md Piyash Hasan";
const lowerCase = name.toLowerCase();
console.log(lowerCase);

const upperCase = name.toUpperCase();
console.log(upperCase);

// -----------------------
// Concat method
// -----------------------
const firstName = "Md";
const middleName = "Piyash";
const lastName = "Hasan";

const fullName = firstName.concat(" ", middleName, " ", lastName);
console.log(fullName);

// -----------------------
// Trim method
// -----------------------
const userName = "       Jhon doe     ";
const removeWhiteSpace = userName.trim();
console.log(removeWhiteSpace);

// -----------------------
// Extracting String Characters
// -----------------------
/**
 * There are 3 methods extracting string characters
 * charAt(position)
 * charCodeAt(position)
 * Property access []
 */

// ---- charAt(position) ----
let text = "Hello world";
let char = text.charAt(6);
console.log(char); // return 6 position word

// ---- charCodeAt(position) ----
let charCode = text.charCodeAt(6);
console.log(charCode); // return UTF-16 code for 6 position word

// ---- Property access[] ----
let position = text[0];
text[0] = "a";
console.log("Position :", position);
console.log(text);

// -----------------------
// Converting a String to an Array
// -----------------------

// ---- split() ----
const text = "My name is Md Piyash Hasan and I am Computer Science Engineer";
const textToArray = text.split(" ");

if (textToArray.length <= 6) {
  console.log("done");
} else {
  console.log("Maximum word limit 6");
}
console.log(textToArray.length);
