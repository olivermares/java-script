//Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

function focus(event){
    console.log(event.target.value);
    console.log('voy bien')
}

const input$$= document.querySelector('input');

input$$.addEventListener('focus', focus);


/*function handleFocus(event){
    console.log(event.target.value);
    console.log('voy bien')
}

const input$$ = document.querySelector('input');

input$$.addEventListener('focus', handleFocus);
*/