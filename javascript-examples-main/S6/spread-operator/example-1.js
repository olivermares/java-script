// ARRAY

let xmen = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl'];
let newXmen = ['Wolverine', 'NightCrawler', 'Storm'];

// Se usa para copiar los valores en un nuevo array
// let xmenCopy = xmen;  // ['Ciclops', 'Beast', 'Angel', 'Marvel-girl']
let xmenCopy = [...xmen]; // ['Ciclops', 'Beast', 'Angel', 'Marvel-girl']

// Antes se usaba el concat y ahora ...
// let myMutants = [xmen, newXmen]; // [['Ciclops', 'Beast', 'Angel', 'Marvel-girl'],['Wolverine', 'NightCrawler', 'Storm']]
let myMutants = [...xmen, ...newXmen]; // ['Ciclops', 'Beast', 'Angel', 'Marvel-girl','Wolverine', 'NightCrawler', 'Storm']

let myMutants2 = [...xmen, 'Pikachu', ...newXmen]; // ['Ciclops', 'Beast', 'Angel', 'Marvel-girl', 'Pikachu', 'Wolverine', 'NightCrawler', 'Storm']
let myMutants3 = ['Bulbasaur', ...xmen, 'Pikachu', true, ...newXmen, 25]; // ['Bulbasaur', 'Ciclops', 'Beast', 'Angel', 'Marvel-girl', 'Pikachu', true, 'Wolverine', 'NightCrawler', 'Storm', 25]


// se usa para jugar con tu array sin modificarlo
let arraySpliced = [...myMutants3].splice(0, 5);
let [lastMutant] = [...xmen].reverse(); // ['Marvel-girl', 'Angel', 'Beast', 'Ciclops'];

// No se ha modificado
console.log(xmen);
console.log(lastMutant);
console.log(myMutants3);
console.log(arraySpliced);


// OBJECT

const pokemon1 = { name: 'Pikachu', gen: 1, type: 'electric' };
const pokemon2 = { name: 'charizard', gen: 1, type: 'fire' };


const copy1 = { ...pokemon1 }; // coge los valores de pokemon1 y los introduce en un nuevo objeto. Creando asi una copia


const action = { action: 'Fly', time: '60 seconds' };

const copy2 = { ...pokemon1, ...pokemon2 }; // {name: 'charizard', gen: 1, type: 'fire',}
const copy3 = { ...pokemon2, ...action }; // {name: 'charizard', gen: 1, type: 'fire', action: 'Fly', time: '60 seconds'}

console.log(copy2);
console.log(copy3);

const pokemon3 = { name: 'Ditto', gen: 1, type: 'normal', action: 'copy' };
const copy4 = { ...pokemon3, ...pokemon1 }; // {name: 'Pikachu', gen: 1, type: 'electric', action: 'copy'}

console.log(copy4);





// FORMULARIO

const dataUser = {name: "Abel", age: 27};
const dataUser2 = {age: 32};
const defaultData = {name: "Sin nombre", age: 99, role: "Profesor"};

const newUser = {...defaultData, ...dataUser}; // {name: "Abel", age: 27, role: "Profesor"}
const newUser2 = {...defaultData, ...dataUser2}; // {name: "Sin nombre", age: 32, role: "Profesor"}