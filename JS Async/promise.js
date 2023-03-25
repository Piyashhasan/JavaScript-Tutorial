// make promise and declare promise

// console.log("Task 1 print");

// -------- Promise definition --------
// const task = false;
// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (task) {
//       res("Task 2 print");
//     } else {
//       rej("Failed .............!");
//     }
//   }, 2000);
// });

// -------- Promise call --------
// promise.then((value) => console.log(value)).catch((err) => console.log(err));

// console.log("Task 3 print");

// -------- Example Course Enroll --------
const payment = true;
const mark = 80;

function enroll() {
  console.log("Course enrollment progress .....");
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (payment) {
        res();
      } else {
        rej("Payment failed......!");
      }
    }, 1000);
  });

  return promise;
}

function courseProgress() {
  console.log("You now continue the course ....");

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (mark >= 80) {
        res();
      } else {
        rej(`You cant't get the certificate , your marks below 80`);
      }
    }, 2000);
  });

  return promise;
}

function getCertificate() {
  console.log("Preparing for your certificate .....");
  const promise = new Promise((res) => {
    setTimeout(() => {
      res("Hurry ! you get the certificate....");
    }, 2000);
  });
  return promise;
}

// call the course enrollment promise
enroll()
  .then(courseProgress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
