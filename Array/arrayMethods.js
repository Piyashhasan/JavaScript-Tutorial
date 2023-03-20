// -------------------------------------
// Array All Methods
// -------------------------------------

/**
 * toString()
 * join()
 * pop()
 * push()
 * shift()
 * unshift()
 * length
 * delete
 * concat()
 * splice()
 * slice()
 */

// -------------------------------------
// Converting Arrays to Strings
// -------------------------------------

// --------- toString() ---------
const fruits = ["mango", "banana", "pineapple", "orange", "apple"];
const convertString = fruits.toString();
console.log("Convert into string: ", convertString);

// --------- join() ---------
const basket = ["mango", "banana", "pineapple", "orange", "apple"];
const useJoin = basket.join(" * ");
console.log(useJoin);

// -------------------------------------
// ADD & REMOVE Elements
// -------------------------------------

// --------- push() ---------
// NB: Push methods return array length as output.
const cars = ["bmw", "volvo", "mercedes", "audi"];
const elementAddLast = cars.push("TATA");
console.log(elementAddLast); // output: 6

// --------- pop() ---------
// NB: Pop methods return remove items.
const removeElementLast = cars.pop();
console.log(removeElementLast); // output : TATA
console.log(cars);

// --------- unshift() ---------
// NB: like push() methods difference element add in FIRST
const laptopAccessories = ["processor", "ram", "rom", "ssd"];
const addAccessories = laptopAccessories.unshift("mother-board");
console.log(addAccessories) // output: 5

// --------- shift() ---------
// NB: like pop() methods difference element remove from FIRST
const removeAccessories = laptopAccessories.shift();
console.log(removeAccessories) // output : mother-board

// --------- length ---------
const arrayLength = ["processor", "ram", "rom", "ssd"];
console.log(arrayLength.length) // output : 4

// NB: Another way to add an element in array using length methods
arrayLength[arrayLength.length] = "something";
console.log(arrayLength)

// --------- delete element ---------
// NB: delete method create unwanted hole in array that's why use push/pop method for delete an item in array
const soup = ["lux", "meril", "detol", "lifebuoy", "sandolina"];
delete soup[0];
console.log(soup);

// --------- concat() ---------
const girls = ["sadida", "konica", "mim", "asha", "joya"];
const boys = ["piyash", "nur", "alvi", "shihab", "musfiq", "niloy"];
const natorBoys = ["Toufiq", "likhon", "aditto"];

const mergeArray = boys.concat(girls, natorBoys);
console.log(mergeArray);
console.log(mergeArray.length);

// -------------------------------------
// Splicing and Slicing Arrays
// -------------------------------------

/***
 * slice() method use for  slice piece of array
 * splice() method provide more control for adding & remove items in array
 **/

// --------- slice() ---------

// NB: slice() method create new array & does not remove any elements in source array
const fruitShop = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const sliceBanana = fruitShop.slice(1);
console.log(sliceBanana); // output : [ 'Orange', 'Lemon', 'Apple', 'Mango' ]
const sliceTwoFruits = sliceBanana.slice(1, 3);
console.log(sliceTwoFruits);

// --------- splice() ---------
const fruitsFactory = ["Banana", "Orange", "Apple", "Mango", 'hello'];
fruitsFactory.splice(2, 0, "Lemon", "Kiwi");
console.log(fruitsFactory);

fruitsFactory.splice(2, 2, "lemon", "kiwi");
console.log(fruitsFactory);
