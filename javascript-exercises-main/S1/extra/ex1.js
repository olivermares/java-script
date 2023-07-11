/*
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuario menor de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuario mayor de edad:".
*/

const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

users.forEach(element => {
    if(element.years < 18)console.log(element.name + ' es menor de edad: ' + element.years);
    else if(element.years >= 18)console.log(element.name + ' es mayor de edad: ' + element.years);
    else console.log('ERROR');
});