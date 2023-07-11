// REMOVE

const removeMe$$ = document.querySelector('.fn-remove-me');

removeMe$$.remove();

// Insert content

const insertHere$$ = document.querySelector('.fn-insert-here');

insertHere$$.textContent = 'Hola';


const insertHereSec$$ = document.querySelector('.fn-insert-here-sec');

insertHereSec$$.innerHTML = `<img src="https://picsum.photos/300/200?random=2"/><p class="soyunap"><span class="edit-me">Hola</span> secundario</p>`;


const insertOverMe$$ = document.querySelector('.fn-insert-over-me');

insertOverMe$$.outerHTML = `<div><p>Estoy sobrescribiendo</p></div>`;