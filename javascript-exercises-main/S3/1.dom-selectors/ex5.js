// Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const span$$ = document.querySelectorAll('[data-function="testMe"]')


span$$.forEach(element => {
    console.log(element)
});