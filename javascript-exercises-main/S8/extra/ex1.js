/*
En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.

*/

//#region Adquisicion API

const getCharacters= async () => {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const characters = await response.json();
    return characters;
};
const body$$ = document.body;
darwCharacters = (characters) => {
 console.log(characters)
 body$$.innerHTML = "";
 for (const character of characters) {
   let div$$ = document.createElement("div");
   div$$.innerHTML = `
       <h3>${character.name}</h3>
       <img src=${character.img}>
   `;
   const btn$$ = document.createElement("button");
   btn$$.textContent = "BORRAR";
   btn$$.addEventListener("click", () => div$$.remove());

   div$$.appendChild(btn$$);
   body$$.appendChild(div$$)
 }
};

const init = async () => {
  const characters = await getCharacters();
  darwCharacters(characters)
};
init();
