//Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

//Diferentes formas
const union1 = [...pointsList] + [pointsLis2] // Mal porque no crea un array

const union2 = [[...pointsList] + [...pointsLis2]]

const union3 = [...pointsList, ...pointsLis2 ] //La de la solucion

console.log(pointsList)
console.log(pointsLis2)

console.log(union1)
console.log(typeof(union2[0]))
console.log(typeof(union3[0]))

/*
Union1 en este caso esta mal. Quizas para otras app sirva
Union2 y Union 3 si crea un array pero de formas distinatas.
Union2 crear un array con un string dentro
Union3 SI crea un array de numeros.
*/