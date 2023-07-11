class Personaje{
    nombre;
    serie;
    edad;
    apellido;
    altura = 180;

    constructor(nombre, apellido, serie, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.serie = serie;
        this.edad = edad;
    }

    getNombreCompleto(){
       return this.nombre + ' ' + this.apellido; 
    }
}

const pokemon = new Personaje("Pikachu", "Chu", "Pokemon", 250);
console.log(pokemon.nombre) // Pikachu
console.log(pokemon.apellido) // Chu
console.log(pokemon.serie) // Pokemon
console.log(pokemon.edad) // 250

const personaje1 = new Personaje('Son', 'Goku', 'Dragon ball', 27);

console.log(personaje1.nombre); // Son
console.log(personaje1.getNombreCompleto()); // Son goku
console.log(personaje1.serie); // Dragon ball
console.log(personaje1.altura); // 180

const personaje2 = new Personaje('Lelouch' , 'Lamperouge', 'Code geass', 21);

console.log(personaje2.nombre); // Lelouch
console.log(personaje2.getNombreCompleto()); // Lelouch Lamperouge
console.log(personaje2.serie); // Code geass



// function createPersonaje(nombre, serie, edad, altura){
//     return {nombre, serie, edad, altura}
// }

// createPersonaje('Lelouch Lamperouge', 'Code geass', 21)
// createPersonaje('Lelouch Lamperouge', 'Code geass', 21)