/*
Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
*/

const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

let moviesS = [];
let moviesM = [];
let moviesB = [];

movies.forEach((element) => {
  if (element.durationInMinutes < 100) moviesS.push(element);
  else if (element.durationInMinutes < 200) moviesM.push(element);
  else moviesB.push(element);
});

function wievMovies(movie) {
  movie.forEach((element) => {
    console.log("  Titulo: " + element.name + "\n  Duracion: " + element.durationInMinutes);
  });
}

console.log("Peliculas pequeñas:");
wievMovies(moviesS);
console.log("Peliculas medianas:");
wievMovies(moviesM);
console.log("Peliculas grande:");
wievMovies(moviesB);

