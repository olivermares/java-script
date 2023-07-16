//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector("input");
const btn$$ =document.querySelector("button");

/*
const search =() => {
    fetch(baseUrl + '?name=' + input$$.value)  
    //console.log(baseUrl + input$$.value)
        .then(response=>{
            return response.json();
    })
        .then(responseJson=>{
            console.log(responseJson)
            //return responseJson
    })
}
*/
//Mas limpio 
const search =() => {
    fetch(baseUrl + '?name=' + input$$.value)  
        .then(response=>{return response.json();})
        .then(responseJson=>{console.log(responseJson)
    })
}

/*
//Solucioin
const search = () => {
    // const input$$ = event.target.previousElementSibling;
    // const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json())
    .then(res =>{
        console.log(res);
    })
}
*/

btn$$.addEventListener('click', search);