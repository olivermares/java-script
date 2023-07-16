//En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = "https://api.nationalize.io";


const search =() => {
    const input$$ = document.querySelector('input');
    fetch(baseUrl + '?name=' + input$$.value)  
        .then(response => response.json())
        .then(responseJson => createP(responseJson))
}

const createP = (person) => {
  let text = `El nombre ${person.name} tiene`;

  for (const country of person.country) {
      const percentage = Math.floor(country.probability * 100)
      text += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  const btn$$ = document.createElement('button');
  const div$$ = document.createElement('div');
  const p$$ = document.createElement('p');

  p$$.textContent = text;
  btn$$.textContent = 'X';

  div$$.appendChild(p$$);
  div$$.appendChild(btn$$);


  btn$$.addEventListener('click', removeP => div$$.remove())

  document.body.appendChild(div$$);
};

const btn$$ = document.querySelector("button");

btn$$.addEventListener("click", search);
