// DEFINITION: In javaScript Object is a standalone entity with properties and type.

// -----------------------
// Object Syntax
// -----------------------
const objName = {
  propertyName: "Property value",
};

// EX:
const person = {
  firstName: "Piyash",
  lastName: "Hasan",
  email: "piyashhasan38@gmail.com",
  address: "bogura",
  age: 23,
};
console.log(person);

// --------------------------------
// Access the Object & Insert property
// --------------------------------
const firstName = person.firstName;
console.log(firstName);

const lastName = person["lastName"];
console.log(lastName);

// insert property_name and property_value
person["currentStay"] = "Dhaka - Bangladesh";
console.log(person);

// --------------------------------
// Object Methods
// --------------------------------
// DEFINITION: Methods are function which declare inside Object under a property.
// NB: Here fullName is a method which declare inside object under fullName properties
const info = {
  firstName: "Piyash",
  lastName: "Hasan",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(`Full Name : ${info.fullName()}`);
