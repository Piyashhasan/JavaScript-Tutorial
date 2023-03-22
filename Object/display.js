// ----------------------------------------
// How to Display JavaScript Objects?
// ----------------------------------------
/**
 * Using Properties by name
 * Using Properties in a Loop
 * Using Object.values() -- convert into ARRAY
 * Using JSON.stringify()
 */

const info = {
  firstName: "Piyash",
  lastName: "Hasan",
  email: "piyashhasan38@gmail.com",
};

// -------- display using properties by name --------
const fullName = info.firstName + " " + info.lastName;
console.log(fullName);

// -------- display using properties by Loop --------
let objValue = "";
for (let x in info) {
  objValue = objValue + " " + info[x];
}
console.log(objValue);

// -------- display using properties by Object.value() --------
const displayInfoObj = Object.values(info);
console.log(displayInfoObj);

// -------- display using properties by JSON.stringify() --------
const stringify = JSON.stringify(info);
console.log(stringify);
const parse = JSON.parse(stringify);
console.log(parse);
