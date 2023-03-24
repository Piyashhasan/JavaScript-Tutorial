// make promise and declare promise

console.log("Task 1 print");

// -------- Promise definition --------
const task = false;
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (task) {
      res("Task 2 print");
    } else {
      rej("Failed .............!");
    }
  }, 2000);
});

// -------- Promise call --------
promise.then((value) => console.log(value)).catch((err) => console.log(err));

console.log("Task 3 print");
