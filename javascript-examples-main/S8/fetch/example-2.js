
fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response) => {
  return response.json();
})
.then((myJson) => {
  console.log(myJson);
  printPokemons(myJson.results)

});

function printPokemons(pokemons){
    for (const pokemon of pokemons) {
        const h1$$ = document.createElement("h1");

        h1$$.textContent = pokemon.name

        document.body.appendChild(h1$$)
    }
}