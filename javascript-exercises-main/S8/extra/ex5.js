/*
Haz una peticion a la api de pokemons `https://pokeapi.co/api/v2/pokemon` y pinta su nombre e imagen. La api solo devuelve el nombre (.name) y la url (.url). 

Por ello tendrás que hacer para cada pokemon otra petición a la url de la propiedad (.url). Esto te devolverá el detalle del pokemon donde encontrarás su imagen (.sprites.front_default). 

Para que no haya problema con el pintado de los pokemons os recomendamos que hagais un `Promise.all` y que así todos los pokemons vengan en orden.
*/

const getCharacters = async (url) => {
  const response = await fetch(url);
  const characters = await response.json();
  const pokemon = {
    name: characters.name,
    img:  characters.sprites.front_default,
  }
  return pokemon
};
/*
Esta mal porque solo devuelve los 20 primeros. 
Esto se puede hacer como en la practica de pokedex con un for y modificando un poco la url inicial. 
O usando recursividad, Forma avanzada. 
*/
const url = `https://pokeapi.co/api/v2/pokemon`;
const getCharactersRecursive = async (url) => {
  const result = [];
  const response = await fetch(url);
  const characters = await response.json();
  characters.results.forEach(async (element) => {
    result.push(await getCharacters(element.url));
  });
  aux = characters.next === null ? result : await getCharactersRecursive(characters.next);
  aux.forEach( async (element) => {
    //console.log(element)
    result.push(element)
  });
  return result;
};

//Se puede pasar a recursive pero en este caso no es una buena idea. 
const drawCharacters = (characters) => {
  const body$$ = document.body;
  body$$.innerHTML = "";
  for (const character of characters) {
    let div$$ = document.createElement("div");
    console.log(character.url);
    div$$.innerHTML = `
          <h3>${character.name}</h3>
          <img src=${character.img} alt=${character.name}>
      `;
    const btn$$ = document.createElement("button");
    btn$$.textContent = "BORRAR";
    btn$$.addEventListener("click", () => div$$.remove());

    div$$.appendChild(btn$$);
    body$$.appendChild(div$$);
  }
};

const init = async () => {
  const characters = await getCharactersRecursive(url);
  //console.log(characters);
  drawCharacters(characters);
};
init();
