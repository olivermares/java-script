//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.


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
                <button class="btn2">Remove element</button>
            </div>
            `;
            
        ul$$.appendChild(li$$);
      });
      init$$.appendChild(ul$$);
}

const btn$$ = document.querySelector('button')
btn$$.setAttribute('class','btn1');
 
btn$$.addEventListener('click',() => {
    const allLi$$ = document.body.querySelectorAll('li');
    allLi$$[allLi$$.length - 1].remove();
})


const btns$$ = document.querySelectorAll('.btn2')
console.log(btns$$)

for (let index = 0; index < btns$$.length; index++) {
    btns$$[index].addEventListener('click',() => {
        const allLi$$ = document.body.querySelectorAll('li');
        allLi$$[index].remove();
    });   
}

 
