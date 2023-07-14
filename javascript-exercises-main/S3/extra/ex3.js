//Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]');
console.log(div$$)

const ul$$=document.createElement('ul');
div$$.appendChild(ul$$);

cars.forEach(element => {
    createElement(element)
});

function createElement(element){
    const li$$ =document.createElement('li');
    li$$.textContent = element;
    ul$$.appendChild(li$$);
}