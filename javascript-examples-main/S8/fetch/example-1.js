function printData(data) {
  const h1$$ = document.createElement("h1");
  h1$$.innerHTML = data.name;

  const h2$$ = document.createElement("h2");

  h2$$.innerHTML = data.probability + " " + data.gender;

  document.body.appendChild(h1$$);
  document.body.appendChild(h2$$);
}

fetch("https://api.genderize.io?name=abel")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    printData(data);
  });

// setTimeout(function () {
//     console.log("timeout pepe")
// }, 116);

console.log("pepe");

//   fetch("")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {

//   });

// fetch('https://api.genderize.io?name=peter').then(res => {
//     console.log("Me resuelvo")
// }).catch(() => {
// })

// ASYNC

// async function getPokemons() {
//   try {
//     const res = await fetch("http://pokeapi.com/pokemon");
//     const pokemons = await res.json();
//   } catch (err) {
//     console.log(err);
//   }
// }

// getPokemons();

const btn$$ = document.querySelector("button");

btn$$.addEventListener("click", function () {

  fetch("https://api.genderize.io?name=")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data)
    });
});
