// ------------------------
//  Function Expression
// ------------------------
/**
 * Function return value store in a Variable.
 * And use this Variable like function any where in code.
 */

// NB: with out name function call Anonymous function
function sumFunc(a, b) {
  return a + b;
}
const sumValue = sumFunc(5, 5);
console.log(sumValue);

// ------------------------
//  Function Constructor
// ------------------------
/**
 * Previously we see using function key word, we declare a function
 * Another way using we declare a Function.
 * new Function() - key word using we declare a function.
 */

const myFunc = new Function("a", "b", "return a + b");
const output = myFunc(4, 5);
console.log(output);

// ------------------------
//  Function Hoisting
// ------------------------

/**
 * Hoisting is a JavaScript default behavior which moving declaration to the top
 * When normally function declare, function are hoisted.
 * But when declare a function using expression, in this case function are not hoisted.
 */

// ------------------------
//  Self-Invoking Functions
// ------------------------
/**
 * which function it calls itself
 */

(function () {
    console.log("I am Self Invoked function");
})();

// ------------------------
//  Functions are objects
// ------------------------
/**
 * typeof operator return "Function" for function
 * JavaScript functions can best be described as objects
 * Because js have Properties and methods
 */

function myFunction(a, b) {
  return arguments;
}
const result = myFunction(4, 4);
console.log(result);

// ------------------------
//  Arrow Function
// ------------------------
/**
 * When using arrow function , this keyword is not suited for defining object methods
 */

let a = 5;
const infoObj = {
  firstName: "Md Piyash",
  lastName: "Hasan",
  designation: "Cse Engineer",
  a: "testing",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  arrow: () => {
    return this.a; // this now countable for arrow function
  },
};

const fullName = infoObj.fullName();
console.log(fullName);
