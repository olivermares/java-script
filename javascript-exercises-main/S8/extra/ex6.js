/*
Ejecuta `json-server --watch exercise-6.json` para obtener un endpoint de personajes `http://localhost:3000/characters`.

Pinta una galeria con los campos .name .image de los cinco primeros personajes. Para ello utilizaremos el endpoint con un filtro de página y limite de personajes de 5 por página `http://localhost:3000/characters?_page=1&_limit=5`.

Una vez pintados, crea un botón que esté situado abajo con el texto `Cargar más`. Si hacemos click en este botón hará un nuevo fetch a la siguiente página de personajes por lo tanto la url debería de ser la página actual + 1 `http://localhost:3000/characters?_page=2&_limit=5`. De esta forma obtendremos 5 personajes más que tendremos que pintar debajo de los anteriores.

La base de datos solo tiene 20 personajes así que lo ideal sería ocular el botón cuando estemos en la página 4.
*/
let page =1;
const getCharacters = async () => {    
    const characters = await fetch(`http://localhost:3000/characters?_page=${page}&_limit=5`)
    page ++;
    if(page>4)page=1;
    return characters.json();
};

const body$$ = document.body;

darwCharacters = (characters) => {
  //body$$.innerHTML = "";
  console.log(characters)
  for (const character of characters) {
    let div$$ = document.createElement("div");
    div$$.innerHTML = `
       <h3>${character.name}</h3>
       <img src=${character.image}>
   `;
    //const btn$$ = document.createElement("button");
    //btn$$.textContent = "BORRAR";
    //btn$$.addEventListener("click", () => div$$.remove());

    //div$$.appendChild(btn$$);
    body$$.appendChild(div$$);
  }
    const btn$$ = document.createElement("button");
    btn$$.textContent = "AÑADIR";
    btn$$.addEventListener("click", ()=> init())
    ;
    body$$.appendChild(btn$$)
};

const init = async () => {
    const characters = await getCharacters();
    darwCharacters(characters);
  };

  init();

