/*
Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:
*/

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

console.log(array);

function swap(array, indieA, indexB){
    const aux=array[indexB]
    array[indexB] = array[indieA]
    array[indieA]=aux
}

swap(array, 1, 3)

console.log(array)