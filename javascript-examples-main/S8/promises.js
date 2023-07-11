const name = "pepe";

const promise = new Promise((resolve, reject) => {
  if (name === "pepe") {
    setTimeout(function () {
      resolve();
    }, 2000);
  } else {
    reject();
  }
});

promise
  .then(() => {
    console.log(`resuelto`);
  })
  .catch(() => {
    console.log(`resuelto mal`);
  });

// async function playPromise() {
//   try {
//     await promise;
//     console.log(`resuelto`);
//   } catch (e) {
//     console.log(`resuelto`, e);
//   }
// }
// playPromise();

console.log("Voy antes");
