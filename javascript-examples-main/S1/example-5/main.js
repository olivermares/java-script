const age = 19;
const minAge = 18;
const minAgeEEUU = 21;

const puedoBeber = age > minAge; // true
const puedoBeberEnEEUU = age > minAgeEEUU; // false
const noPuedoBeberEnEEUU = age < minAgeEEUU; // true
const cualCadenaEsMayor = me > "Coche"; // true // Compara el tamaño...numero de caracteres

const aniosCasados = "50";
const celebrarBodaDeOro = "50" == 50; // true
const celebrarBodaDeOroB = "50" === 50; // false


const myAge = 18;
const puedoConducir = myAge >= 18; // true <= >=


const me = "Peaton";
const puedoPasar = me !== "Coche"; // true



const tengoCarnet = true;
const tengoCoche = true
const tengoMoto = false
const puedoConducirBro = myAge >= 18 && tengoCarnet && (tengoCoche || tengoMoto)
console.log(puedoConducirBro) // true


if(myAge >= 18 && tengoCarnet && (tengoCoche || tengoMoto)){
    console.log("Me ejecuto")
}




























const number1 = 10;
const number2 = 20;
const number3 = 30;

if(number3 > number2){
    console.log('number3 es mayor que number2')
}

if(number3 > number2 && number3 > number1){
    console.log('number3 es mayor que number2 y que number1')
}

if(number3 > number2 || number3 < number1){
    console.log('number3 es mayor que number2 o number3 es menor que number1')
} else {
    console.log("en cualquier otro caso");
}
