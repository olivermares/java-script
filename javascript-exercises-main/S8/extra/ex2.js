/*
Si tienes windows. Lo primero que tienes que hacer es abrir powerShell como ADMINISTRADOR y ejecutar el comando `Set-ExecutionPolicy Unrestricted`. Elige la opciòn SI y dale a intro. Si tu ordenador está en español La opción SI será escribiendo una `S` y si está en ingles una `Y`.

Ahora vamos a trabajar con JSON SERVER para simular una `api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando  `npm i -g json-server y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.
 
Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
  
Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...
    
   
`Si tienes windows es posible que tambien tengas que ejecutar `set-executionpolicy unrestricted –force` en una terminal abierta como administrador.`
*/

const getCharacters = async () => {
  const response = await fetch("http://localhost:3000/diary");
  const characters = await response.json();
  return characters;
};

const orderCharacters = async (characters) => {
  return characters.sort((a, b) => Date(a.date) - Date(b.date));
};

const body$$ = document.body;
const drawCharacters = (characters) => {
  body$$.innerHTML = "";
  for (const character of characters) {
    let div$$ = document.createElement("div");
    div$$.innerHTML = `
        <h3>${character.title}</h3>
        <h5>${character.date}</5>
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
  const charactersAll = await getCharacters();
  const charactersOrder = await orderCharacters(charactersAll);
  //console.log(orderCharacters(charactersOrder))
  drawCharacters(charactersOrder);
};
init();
