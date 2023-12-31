//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

createList(countries, document.body);

function createList(elements, init$$) {
    const ul$$ = document.createElement("ul");
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
      init$$.appendChild(ul$$);
}

const btn$$ = document.querySelector('button')
btn$$.setAttribute('class','btn');

//Funcion anonima declarada en la version moderna 
btn$$.addEventListener('click',() => {
    const allLi$$ = document.body.querySelectorAll('li');
    allLi$$[allLi$$.length - 1].remove();
})

//Mi version a diferencia de la solucion propuesta es que me queda la etiqueta ul.
//No esta bien del todo. 
