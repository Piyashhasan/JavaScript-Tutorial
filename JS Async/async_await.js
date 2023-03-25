// ----------- Example -----------

const payment = true;
const mark = 80;

function enroll() {
  console.log(`Enroll process progress....!`);
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (payment) {
        res();
      } else {
        rej("Payment Failed...!");
      }
    }, 1000);
  });

  return promise;
}

function courseProgress() {
  console.log(`Continue your course....!`);
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (mark >= 80) {
        res();
      } else {
        rej(`You cant't get the certificate your below 80`);
      }
    }, 1500);
  });
  return promise;
}

function getCertificate() {
  console.log(`Prepare you certificate....`);
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(`Hurray! you get the certificate...`);
    }, 1500);
  });

  return promise;
}

// ----------- call promise using then() -----------
// enroll()
//   .then(courseProgress)
//   .then(getCertificate)
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

// ----------- call promise using async & await -----------
async function course() {
  try {
    await enroll();
    await courseProgress();
    const getCertificateMsg = await getCertificate();
    console.log(getCertificateMsg);
  } catch (err) {
    console.log(err);
  }
}
// call course function
course();


