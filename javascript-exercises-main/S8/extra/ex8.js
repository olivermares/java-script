/*
Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

Para ello, ejecutemos `json-server --watch exercise-8.json`. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo `http://localhost:3000/characters?idPlanet=1` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
Además de esto, agrega un buscador para poder filtrar los personajes por nombre una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

Como extra podríamos hacer que si haces click a un personaje salga la descripción debajo. Como extra del extra haz que la descripción se oculte si vuelves a hacer click en el mismo personaje.


*/
const planets$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');

const getCharacters = async () => {
  return await (await fetch(`http://localhost:3000/planets`)).json();
};

const drawCharacters = (characters) => {
  //planets$$.innerHTML = "";
  characters.forEach((character) => {
    //console.log(order)
    const div$$ = document.createElement('div');
    div$$.innerHTML = `
              <h3>${character.name}</h3>
              <img src=${character.image}>
          `;
    //div$$.appendChild(section$$)
    planets$$.appendChild(div$$);
  });
};

const init = async () => {
  const characters = await getCharacters();
  //console.log(characters)
  drawCharacters(characters);
};

init();
