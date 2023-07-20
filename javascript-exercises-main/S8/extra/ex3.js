/*
En este ejercicio vamos a pintar todas las propiedades de las peliculas.

De nuevo, tendremos una api local que deberemos ejecutar con json-server `json-server --watch exercise-3.json`. La url en cuestión de los personajes sería
`http://localhost:3000/movies`. Ten en cuenta que como usamos imágenes locales tienes que hacer el ejercicio en esta misma carpeta o llevarte la carpeta /public (carpeta con imágenes) donde tengas tus propios ejercicios.
*/

const getCharacters = async () => {
    const response = await fetch(`http://localhost:3000/movies`);
    const characters = await response.json();
    return characters;
  };
   
  const body$$ = document.body;
  const drawCharacters = (characters) => {
    body$$.innerHTML = "";
    for (const character of characters) {
      let div$$ = document.createElement("div");
      div$$.innerHTML = `
          <h3>${character.title}</h3>
          <h5>${character.date}</5>
          <img src="./public/${character.img}" alt="${character.id}"/>
          <h6>${character.rating}</h6>
          <p>${character.description}</p>
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
    //characters = await orderCharacters(characters);
    console.log(characters)
    drawCharacters(characters);
  };
  init();