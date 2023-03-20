// ------------------------
//  Function Call Methods
// ------------------------

const myInfo = {
  firstName: "Piyash",
  lastName: "Hasan",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const myFullName = myInfo.fullName();
// console.log(myFullName);

//--------------------------
// now multiple person information make using Call methods
//--------------------------
// NB: Here we using info obj we can console different person name print calling Call() methods

const info = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const personOne = {
  firstName: "Tanvir Ahmed",
  lastName: "Digonto",
};

const personTwo = {
  firstName: "Shakil Sheikh",
  lastName: "Shakil",
};

const personThree = {
  firstName: "Hossain",
  lastName: "Riyad",
};

const personOneOutput = info.fullName.call(personOne);
const personTwoOutput = info.fullName.call(personTwo);
const personThreeOutput = info.fullName.call(personThree);

console.log(personOneOutput);
console.log(personTwoOutput);
console.log(personThreeOutput);
