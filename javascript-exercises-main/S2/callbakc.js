
//Mi funcion de prueba de addEventListener
function addEvent(text, funcion){
    console.log(text) //seguramente el es para buscar o poner en algun atributo del objeto 
    funcion(Object) //Con muchos atributos
}


addEvent('soy una prueba',  function(e){
    console.log(e) //funcion anonima pasada como parametro a addEvent(). Se puede crear fuera
});

/*
function  anonima(){
    console.log('funcion anonima')
}
*/
