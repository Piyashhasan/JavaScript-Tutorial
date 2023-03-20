// Properties are the most important part of any JavaScript object.

const information = {
  name: "Piyash Hasan",
  designation: "Computer Science Engineer",
  email: "piyashhasan38@gmail.com",
  currentAddress: "Bosila Mohammadpur - Dhaka",
  presentAddress: "Thanthania - Bogura",
};

// ---------- Accessing JavaScript Properties ----------
console.log(information.name);
console.log(information["designation"]);

// using expression
const currentAddress = "currentAddress";
const presentAddress = "presentAddress";
console.log(information[currentAddress]);
console.log(information[presentAddress]);

// ---------- Adding new properties ----------
information.phone = "01790800372";
// or
information["anotherPhone"] = "01907100346";
// or
const hobby = "Hobby";
information[hobby] = "Hangout with friends";
// output
console.log(information);

// ---------- Delete properties ----------
delete information["Hobby"];
console.log(information); // delete Hobby properties

// ---------------------------------
//  Loop apply
// ---------------------------------
const friendInfo = {
  name: "Shakil sheikh shakil",
  designation: "Businessman",
  email: "shakil8@gmail.com",
  currentAddress: "Thanthania - Bogura",
  presentAddress: "Dhaka ",
};

for (let key in friendInfo) {
  console.log(`
            ${key} - ${friendInfo[key]}
  `);
}
