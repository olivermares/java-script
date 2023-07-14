//Basandote en el html siguiente, elimina el elemento que tenga la clase .fn-remove-me.

const p$$ = document.querySelectorAll('.fn-remove-me')

p$$.forEach(element => {
   element.remove()
});