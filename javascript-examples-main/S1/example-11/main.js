// Edad que tenemos
const age = 22;

// Si soy mayor de edad, entonces puedo ser un Vengador
if (age < 18) {
    // Si mi edad es menor de 18
    console.log("Vaya tendrás que ir con Spidy a jugar al parque");
} else {
    // Si mi edad es mayor de 18
    console.log("Bienvenido Vengador");
}

const sortWord = 'Fresa';
// const sortWord = 'Esternocleidomastoideo';

const sortWordLength = sortWord.length;

console.log(sortWordLength);

if (sortWordLength < 4) {
    console.log('La palabra es pequeña')
} else if (sortWordLength > 4 && sortWordLength < 8) {
    console.log('La palabra es mediana')
} else {
    console.log('La palabra es grande')
}


let age = 22;

let accessAllowed = age > 18 ? "Puedes entrar" : "Vete de aqui";
console.log(accessAllowed) // "Puedes entrar"
// O
let accessAllowed2;
if(age > 18){
    accessAllowed2 = "Puedes entrar";
} else {
    accessAllowed2 = "Vete de aqui";
}


const tengoCarnet = true;
const miEdad = 27;
const soyElReyDeEspania = false;

if((miEdad >= 18 && tengoCarnet) || (soyElReyDeEspania)){
    console.log("Puedo conducir")
} else{
    console.log("No puedo conducir")
}