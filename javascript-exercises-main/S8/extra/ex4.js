/*
Añade un evento click al botón `Call a cat` que haga una petición a `https://api.thecatapi.com/v1/images/search`. Pinta la imagen que recibas de la api y añade además un botón `Eliminar` que elimine la imagen del gato.

Puedes hacer click tantas veces como quieras en el botón `Call a cat`. De modo que si hago click 5 veces, pintaré 5 gatos
*/

const startPoint$$ = document.querySelector("[data-fn='callACat']");
setEventBtn = ()=> {
    startPoint$$.addEventListener("click", getACat);
}

getACat = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const character = await response.json();
    printCat(character)
  };

printCat = (cat) => {
    const div$$ = document.createElement('div');
    console.log(cat[0].url)
    div$$.innerHTML = `
        <img src=${cat[0].url}>
    `;
    const btn$$ = document.createElement("button");
    btn$$.textContent = "BORRAR";
    btn$$.addEventListener("click", (removeDiv) => div$$.remove());

    div$$.appendChild(btn$$);
    startPoint$$.appendChild(div$$)
}

  init = async () => {
    setEventBtn();
  };
  init();