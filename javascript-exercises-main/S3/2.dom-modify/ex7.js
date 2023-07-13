// Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

// Primera opcion Uno a uno

const p$$ = document.querySelectorAll('.fn-remove-me')

p$$.forEach(element => {
   element.remove()
});

/*
for (const element of p$$) {
    element.remove()
}
*/


// Segunda todo de golpe
//Creo que no se puede por que hay tienes que acceder a la etiqueta y hay algunas que no se han de borrar