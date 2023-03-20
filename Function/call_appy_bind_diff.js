// ------------------------
//  Function Bind Methods
// ------------------------
/**
 * call() & apply() methods almost same but difference is - apply() methods takes arguments as an array.
 * bind() method return bound function.
 */

const info = {
    fullName: function (address, city) {
      return console.log(
        this.firstName + " " + this.lastName + " " + address + " " + city
      );
    },
  };
  
  const person = {
    firstName: "Piyash",
    lastName: "Hasan",
  };
  
  const person2 = {
    firstName: "Piyashsss",
    lastName: "Hasan",
  };
  
  // ------------- using call() methods -------------
  info.fullName.call(person, "Thanthania", "Bogura");
  
  // ------------- using appy() methods -------------
  info.fullName.apply(person, ["Thanthania", "bogura"]);
  
  // ------------- using bind() methods -------------
  // NB: bind() method return bounded function
  const result = info.fullName.bind(person, "Thanthania", "bogura");
  result(); // bounded function
  