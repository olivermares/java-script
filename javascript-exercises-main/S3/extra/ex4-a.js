//Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

createList(countries, document.body);

/*
countries.forEach((element) => {
  const li$$ = document.createElement("li");
  createLi_1(element, li$$);
  ul$$.appendChild(li$$);
});

function createLi_1(element, li$$) {
  const div$$ = document.createElement("div");
  const h4$$ = document.createElement("h4");
  h4$$.textContent = element.title;
  div$$.appendChild(h4$$);
  const img$$ = document.createElement("img");
  img$$.setAttribute("src", element.imgUrl);
  div$$.appendChild(img$$);
  li$$.appendChild(div$$);
}

//La funcion segun la solucion se puede simplificar
//Copiado de la solucion y adatada a codigo

function createLi_2(element, li$$) {
  const div$$ = document.createElement("div");
  div$$.innerHTML = `<h4>${element.title}</h4><img src="${element.imgUrl}"/>`;

  li$$.appendChild(div$$);
}
*/
//Otra vuelta de tuerca. CreateList
// elements => elementos a introducir en la lista
// inti$$ => punto incial donde se insertala la lista
//Esta funcion solo funciona en este ejercicio ya que las propiedades de los elemento pueden cambiar en otros ejemplo.

function createList(elements, init$$) {
    const ul$$ = document.createElement("ul");
    init$$.appendChild(ul$$);

    elements.forEach((element) => {
        const li$$ = document.createElement("li");
        li$$.innerHTML = `
            <div>
                <h4>${element.title}</h4>
                <img src="${element.imgUrl}"/>
            </div>
            `;
    
        ul$$.appendChild(li$$);
      });


}
