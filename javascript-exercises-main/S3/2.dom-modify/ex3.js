// Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div$$ = document.createElement('div');
const p$$ = document.createElement('p') //Cuidad solo crea uno objeto tipo nodo-html
for (let index = 0; index < 6; index++) {
    div$$.appendChild(document.createElement('p')) //Hay que crear un nodo en cada vuelta
}


document.body.appendChild(div$$)