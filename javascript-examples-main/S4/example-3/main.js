// console.log(1)
// fetch('https://pokeapi.co/api/v2/pokemon').then(function (res) {
//     console.log(res);
//     console.log(2);
// }) 
// console.log(3);

fetch('https://pokeapi.co/api/v2/pokemon').then(function (res) { return res.json() }).then(function (res) {
    console.log(res);
    for (const pokemon of res.results) {
        const p$$ = document.createElement('p');
        p$$.textContent = pokemon.name;
        document.body.appendChild(p$$);
    }
})


fetch('https://rickandmortyapi.com/api/character').then(function (res) { return res.json() }).then(function (res) {
    console.log(res);
    for (const character of res.results) {
        const p$$ = document.createElement('p');
        const img$$ = document.createElement('img');
        p$$.textContent = character.name;
        img$$.setAttribute('src', character.image);
        document.body.appendChild(p$$);
        document.body.appendChild(img$$);
    }
}) 

