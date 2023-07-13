//Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const div$$= document.querySelectorAll('div') [1]

const p$$ = document.createElement('p');

p$$.textContent = 'Voy en medio!'

document.body.insertBefore(p$$, div$$)

