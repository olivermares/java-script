// Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const text = 'Wubba Lubba dub dub'
const h2$$= document.body.querySelector('.fn-insert-here') //accede a una clase  
//const fn$$ = document.querySelector('.fn-test'); //Mejor solucion. Pero hay que añadir  data-fn="test" a la etiqueta 
h2$$.textContent=text;  //h2$$ =Wubba Lubba dub dub'

//en una linia
//document.body.querySelector('.fn-insert-here').textContent ='Wubba Lubba dub dub';



