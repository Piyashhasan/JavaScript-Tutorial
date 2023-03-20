// DEFINITION: Methods is a function which declare inside the object under properties.

const info = {
  firstName: "Piyash",
  lastName: "Hasan",
  // fullName is a methods
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const fullName = info.fullName();
console.log(fullName);
