// ------------------------
//  Function Apply Methods
// ------------------------
/**
 * Call and Apply Methods are same almost
 * But difference is call() method takes arguments separately.
 * apply() method takes arguments as an array.
 */

// ------------- Call() -------------
const infoObj = {
  fullName: function (address, city) {
    return this.name + " " + address + " " + city;
  },
};

const myInfo = {
  name: "Md Piyash Hasan",
};

const myInfoOutput = infoObj.fullName.call(myInfo, "thanthania", "Bogura");
console.log(myInfoOutput);

// ------------- apply() -------------

const shakilInfo = {
  name: "Shakil Sheikh Shakil",
};
const shakilInfoOutput = infoObj.fullName.apply(shakilInfo, [
  "Thanthania",
  "Bogura",
]); // Difference - argument accept by using array
console.log(shakilInfoOutput);
