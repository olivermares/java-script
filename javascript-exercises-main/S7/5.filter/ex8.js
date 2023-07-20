/*
Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
*/

const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const toFilterStreamers = () => {
    const input$$ = document.querySelector('input')
    const streamersFilter = streamers.filter(streamer => 
        streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
    );
    console.log(streamersFilter)
}


const btn$$ = document.querySelector('[data-function="toShowFilterStreamers"]');

btn$$.addEventListener("click", toFilterStreamers);