// --------- Js Constructors ---------

// DEFINITION: JavaScript constructor is a blue print of an object. we can use the blue print and make multiple object.

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const piyashInfo = new Person("Piyash", "Hasan", 23, "Black");
console.log(piyashInfo);

const shakilInfo = new Person("Shakil", "Sheikh", 24, "Black");
console.log(shakilInfo);

// --------- Adding a Property to an Object ---------
piyashInfo.nationality = "Bangladeshi";
console.log(piyashInfo);

// --------- Adding a Methods to an Object ---------
piyashInfo.fullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(`Full Name : ${piyashInfo.fullName()}`);

// ------------- Adding a Method to a Constructor -------------
function Phone(name, brand, processor, ram, rom) {
  this.phoneName = name;
  this.brandName = brand;
  (this.processor = processor), (this.ramSize = ram);
  this.romSize = rom;
  this.myOpinion = function () {
    return `I love ${this.phoneName} & it's my favorite brand ${this.brandName}`;
  };
}

const myDreamPhone = new Phone(
  "Iphone 14 pro",
  "Apple",
  "Apple A16 Bionic",
  "6gb",
  "128gb"
);

console.log(myDreamPhone);
console.log(`My Openion about my phone : ${myDreamPhone.myOpinion()}`);

function Information(name, email, address) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.nickName = function (name) {
    return `My nick name is ${name}`;
  };
}

const myInformation = new Information(
  "piyash",
  "piyashhasan38@gmail.com",
  "bogura"
);
console.log(myInformation);

const myNickName = myInformation.nickName("Piu");
console.log(myNickName);
