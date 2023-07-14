//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$=document.createElement('ul');
document.body.appendChild(ul$$);

countries.forEach(element => {
    createElement(element)
});

function createElement(element){
    const li$$ =document.createElement('li');
    li$$.textContent = element;
    ul$$.appendChild(li$$);
}

//se puede crear un evento que muestre y esconde la lista 