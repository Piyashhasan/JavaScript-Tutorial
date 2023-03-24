// make callback function first

function display(sum) {
  console.log(sum);
}
function summation(a, b, callback) {
  const result = a + b;
  if (callback) {
    callback(result);
  }
  return result;
}
const output = summation(5, 5);
// console.log(output);

// call the function using call back
// summation(10, 10, display);

// ------- EXAMPLE USING ASYNC -------

const coursePayment = true;
const mark = 80;

// course enrollment
function enroll(callback) {
  console.log("Course Enroll or Payment Progress ..........");
  setTimeout(() => {
    if (coursePayment) {
      callback();
    } else {
      console.log(`Please pay for the course`);
    }
  }, 2000);
}

// course progress
function progress(callback) {
  console.log("Welcome , now you can start the course .......");
  setTimeout(() => {
    if (mark >= 80) {
      callback();
    } else {
      console.log(`You cant't get the certificate , your marks below 80`);
    }
  }, 2000);
}

// get certificate
function getCertificate() {
  setTimeout(() => {
    console.log(`Congregates You get the Certificate & Your mark - ${mark}`);
  }, 2000);
}

// call the function and maintain Async
enroll(() => {
  progress(getCertificate);
});
